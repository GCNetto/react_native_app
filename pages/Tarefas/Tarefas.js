import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogoImg from '../../assets/logo.png';
import Api from '../../services/Api';

import { 
    StyledHeader, 
    Container, 
    Img, 
    Button, 
    BtnText, 
    Form, 
    BtnForm, 
    Input,  
    Tasks, 
    TaskDescription, 
    TaskActions 
} from './Styles';

const Tarefas = () => {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    const loadTasks = async () => {

        try {
            const response = await Api.get("tarefas");
            setTask(response.data)
        } catch (err) {
            console.warn("Falha ao recuperar as tarefas.")
        }
    }

    const handlePostTasks = async () => {
        if (newTask == "") {
            console.warn("você deve preencher a tarefa")
        }

        const params = {
            descricao: newTask,
            concluido: false
        }

        try {
            await Api.post("tarefas", params);
            setNewTask("");
            loadTasks();
        } catch (err) {
            console.warn("Erro ao salvar a tarefa")
        }
    }

    const handleDeleteTasks = async ({ id }) => {
        try {
            await Api.delete(`tarefas/${id}`);
            loadTasks();
        } catch (err) {
            console.warn("Erro ao deletar tarefa")
        }
    }

    const handlePutTasks = async (task) => {
        const params = {
            ...task,
            concluido: !task.concluido
        }
    
        try {
            await Api.put(`tarefas/${task.id}`, params);
            loadTasks();
        } catch (err) {
            console.warn("Erro ao atualizar tarefas")
        }
    }

    useEffect(() => {
        loadTasks();
    }, [])

    return (
        <>
        <StyledHeader>
                <Img source={LogoImg}/>
            <Button>
                <BtnText>
                    <MaterialCommunityIcons 
                        name="exit-to-app"
                        size={28} />
                </BtnText>
            </Button>
        </StyledHeader>

        <Container>
            <Form>
                <Input placeholder="Digite aqui sua tarefa" onChangeText={(letras) => 
                    {
                        setNewTask(letras)
                    }
                } value={newTask}/>
                <BtnForm onPress={ handlePostTasks }>
                    <BtnText>
                        <MaterialCommunityIcons
                            name="pencil-plus-outline"
                            size={32} />
                    </BtnText>
                </BtnForm>
            </Form>

            {task.map(task => (
                <Tasks key={task.id}>
                    <TaskDescription>{task.descricao}</TaskDescription>
                    <TaskActions>
                        <MaterialCommunityIcons 
                            name="delete-circle-outline" 
                            size={36} 
                            color="#dc3545" 
                            onPress={() => 
                                {
                                    handleDeleteTasks(task)
                                }
                            }
                        />
                        <MaterialCommunityIcons 
                            name={task.concluido ? "check-circle-outline" : "circle-outline"} 
                            size={36} 
                            color={task.concluido ? "#18db83" : "#dae3dc"}
                            onPress={() => 
                                {
                                    handlePutTasks(task)
                                }
                            }
                        />
                    </TaskActions>
                </Tasks>)
            )}
        </Container>
        </>
    );
}

export default Tarefas;