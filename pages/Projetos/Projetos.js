import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogoImg from '../../assets/logo.png';

import { 
    StyledHeader, 
    Button, 
    BtnText, 
    Img, 
    Container, 
    Form, 
    Input, 
    BtnForm, 
    ProjectContainer, 
    Projects, 
    ProjectActions, 
    ProjectDescription, 
    DescriptionContainer, 
    Descriptions 
} from './Styles';

const Projetos= () => {
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
                <Input placeholder="Informe o nome do projeto"/>
                <BtnForm>
                    <BtnText>
                        <MaterialCommunityIcons
                            name="pencil-plus-outline"
                            size={32} />
                    </BtnText>
                </BtnForm>
            </Form>
            <ProjectContainer>
                <Projects>
                    <ProjectDescription>Projeto Final</ProjectDescription>
                    <ProjectActions>
                        <MaterialCommunityIcons
                            name="delete-circle-outline"
                            size={36}
                            color="#dc3545"
                            />
                    </ProjectActions>
                </Projects>
                <DescriptionContainer>
                    <Descriptions>
                        <ProjectDescription>1. Criar Tarefas</ProjectDescription>
                        <ProjectActions>
                            <MaterialCommunityIcons
                            name="check-circle-outline"
                            size={30}
                            color="#18db83"
                            />
                        </ProjectActions>
                    </Descriptions>
                    <Descriptions>
                        <ProjectDescription>2. Conduzir Tarefas</ProjectDescription>
                        <ProjectActions>
                            <MaterialCommunityIcons
                            name="check-circle-outline"
                            size={30}
                            color="#18db83"
                            />
                        </ProjectActions>
                    </Descriptions>
                    <Descriptions>
                        <ProjectDescription>3. Deletar Tarefas</ProjectDescription>
                        <ProjectActions>
                            <MaterialCommunityIcons
                            name="check-circle-outline"
                            size={30}
                            color="#18db83"
                            />
                        </ProjectActions>
                    </Descriptions>
                </DescriptionContainer>
            </ProjectContainer>
        </Container>
        </>
    );
}

export default Projetos;