import React, { useEffect, useState, useContext } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogoImg from '../../assets/logo.png';
import firebase from 'firebase';
import 'firebase/firestore';
import { UsuarioContext } from '../../contexts/user';

import { 
    StyledHeader, 
    Button, 
    BtnText, 
    Img, 
    Container, 
    Form, 
    Input, 
    BtnForm,
    Projects,
    ProjectContainer,
    ProjectDescription,
    ProjectActions,
    TaskContainer,
    Tasks,
    TaskDescription,
    TaskActions
} from './Styles';

const Projetos= () => {
    const { signOut } = useContext(UsuarioContext);

    const [ project, setProject ] = useState([]);
    const [ newProject, setNewProject ] = useState("");
    const [ task, setTask ] = useState([]);

    const listenProjects = (projetos) => {
        const data = projetos.docs.map((projeto) => {
            return {
                id: projeto.id,
                ...projeto.data()
            }
        })
        setProject(data);
    }

    const listenTasks = (tarefas) => {
        const data = tarefas.docs.map((tarefa) => {
            return {
                id: tarefa.id,
                ...tarefa.data()
            }
        })
        setTask(data);
    }

    const handleSaida = async () => {
        try {
            await signOut();
        } catch (err) {
            console.warn(err);       
        }
    }
    
    const handlePostProjects = async () => {
        if(newProject == "") {
            console.warn("Você deve preencher o projeto");
        }

        const params = {
            descricao: newProject
        }

        try {
            await firebase.firestore().collection('projetos').add(params);
            setNewProject("");
        } catch (err) {
            console.warn("Erro ao salvar projeto");
        }
    }

    const handleDeleteProjects = async ({ id }) => {
        try {
            await firebase.firestore().collection('projetos').doc(id).delete();
        } catch (err) { }
    }

    const handlePutTasks = async ({ id, concluido }) => {
        const params = {
            ...task,
            concluido: !concluido
        }

        try {
            await firebase.firestore().collection('tarefas').doc(id).set(params, { merge: true });
        } catch (err) {
            console.warn("Erro ao atualizar tarefa");
        }
    }
    
    useEffect(() => {
        const listener = firebase.firestore().collection('projetos').onSnapshot(listenProjects);
        return () => {
            listener();
        }
    }, [])
    
    useEffect(() => {
        const taskListener = firebase.firestore().collection('tarefas').onSnapshot(listenTasks);
        return () => {
            taskListener();
        }
    }, [])

    return (
        <>
        <StyledHeader>
                <Img source={LogoImg}/>
            <Button>
                <BtnText>
                    <MaterialCommunityIcons 
                        name="exit-to-app"
                        size={28}
                        onPress={() => { handleSaida(); }}
                    />
                </BtnText>
            </Button>
        </StyledHeader>

        <Container>
            <Form>
                <Input placeholder="Informe o nome do projeto" onChangeText={(letras) => 
                    {
                        setNewProject(letras);
                    }
                } value={newProject}/>
                <BtnForm onPress={ handlePostProjects }>
                    <BtnText>
                        <MaterialCommunityIcons
                            name="pencil-plus-outline"
                            size={32} />
                    </BtnText>
                </BtnForm>
            </Form>

            <ProjectContainer>
                {project.map(project => (
                <Projects key={project.id}>
                    <ProjectDescription>{project.descricao}</ProjectDescription>
                    <ProjectActions>
                        <MaterialCommunityIcons 
                            name="delete-circle-outline" 
                            size={36} 
                            color="#dc3545"
                            onPress={() => {
                                handleDeleteProjects(project);
                            }}
                        />
                    </ProjectActions>
                </Projects>))}
                <TaskContainer>
                    {task.map(task => (
                    <Tasks key={task.id}>
                        <TaskDescription>{task.descricao}</TaskDescription>
                        <TaskActions>
                            <MaterialCommunityIcons
                                name={task.concluido ? "check-circle-outline" : "circle-outline"}
                                size={36}
                                color={task.concluido ? "#18db83" : "#dae3dc"}
                                onPress={() => {
                                    handlePutTasks(task);
                                }}
                            />
                        </TaskActions>
                    </Tasks>))}
                </TaskContainer>
            </ProjectContainer>
        </Container>
        </>
    );
}

export default Projetos;