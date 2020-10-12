import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogoImg from '../../assets/logo.png';
import Api from '../../services/Api';

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
    ProjectActions
} from './Styles';

const Projetos= () => {
    const [ project, setProject ] = useState([]);
    const [ newProject, setNewProject ] = useState("");

    const loadProjects = async () => {
        try {
            const response = await Api.get("projetos");
            setProject(response.data)
        } catch (err) {
            console.warn("Falha ao recuperar projetos")
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
            await Api.post("projetos", params)
            setNewProject("")
            loadProjects();
        } catch (err) {
            console.warn("Erro ao salvar projeto")
        }
    }

    const handleDeleteProjects = async ({ id }) => {
        try {
            await Api.delete(`projetos/${id}`);
            loadProjects();
        } catch (err) {
            
        }
    }

    useEffect(() => {
        loadProjects();
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
                    </Projects>)
                )}
                <Text>Container</Text>
            </ProjectContainer>
        </Container>
        </>
    );
}

export default Projetos;