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
    // const [newTask, setNewTask] = useState("");

    const loadTasks = async () => {

        try {
            const response = await Api.get("tarefas");
            setTask(response.data)
        } catch (err) {
            console.warn("Falha ao recuperar as tarefas.")
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
                <Input placeholder="Digite aqui sua tarefa"/>
                <BtnForm>
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
                        />
                        <MaterialCommunityIcons 
                            name="check-circle-outline" 
                            size={36} 
                            color="#18db83" />
                    </TaskActions>
                </Tasks>)
            )}
        </Container>
        </>
    );
}

export default Tarefas;