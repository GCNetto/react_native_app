import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogoImg from '../../assets/logo.png';
import firebase from 'firebase';
import 'firebase/firestore';

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
    const [ task, setTask ] = useState([]);
    const [ newTask, setNewTask ] = useState("");
    const [ project, setProject ] = useState([]);
    const [ descricaoProjeto, setDescricaoProjeto ] = useState("");

    const listenTasks = (tasks) => {
        const data = tasks.docs.map((task) => {
            return {
                id: task.id,
                ...task.data()
            }
        })
        setTask(data);
    }

    const listenProjects = (projects) => {
        const data = projects.docs.map((project) => {
            return {
                id: project.id,
                ...project.data()
            }
        })
        setProject(data);
    }
    
    
    const handlePostTasks = async () => {
        if (newTask == "") {
            console.warn("Você deve preencher a tarefa");
        }

        // const projetos = await firebase.firestore().collection('projetos').get().then(
        //     querySnapshot => {
        //         const docs = querySnapshot.docs;
        //         const data = [];
        //         docs.forEach((doc) => {
        //             console.warn(doc);
        //             data.push(doc.data());
        //         })
        //         return data;
        //     }
        // );

        // setProject(projetos.find(({descricao}) => {
        //     return descricao == descricaoProjeto;
        // }))

    // // // => 

        // const response = await Api.get("projetos");
        // setProject(response.data.find(({ descricao }) => {
        //    return descricao == descricaoProjeto;
        // }))
        
        const params = {
            descricao: newTask,
            concluido: false,
            // idProjeto: project.id
        }
        
        try {
            await firebase.firestore().collection('tarefas').add(params);
            setNewTask("");
        } catch (err) {
            console.warn("Erro ao salvar a tarefa");
        }      
    }
    
    const handleDeleteTasks = async ({ id }) => {
        try {
            await firebase.firestore().collection('tarefas').doc(id).delete();
        } catch (err) {
            console.warn("erro ao deletar tarefa");
        }
    }
    
    const handlePutTasks = async ({ id, concluido }) => {
        const params = {
            ...task,
            concluido: !concluido
        }
        
        try {
            await firebase.firestore().collection('tarefas').doc(id).set(params, { merge: true });
        } catch (err) {
            console.warn("Erro ao atualizar tarefas");
        }
    }

    useEffect(() => {
        const listener = firebase.firestore().collection('tarefas').onSnapshot(listenTasks);
        return () => listener();
    }, [])

    useEffect(() => {
        const projectListener = firebase.firestore().collection('projetos').onSnapshot(listenProjects);
        return () => projectListener();
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
            </Form>
            <Form>
                <Input placeholder="Projeto pertencente" onChangeText={(letras) => 
                    {
                        setDescricaoProjeto(letras)
                    }
                } value={descricaoProjeto}/>
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