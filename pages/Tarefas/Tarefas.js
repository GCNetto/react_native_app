import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogoImg from '../../assets/logo.png';

import { 
    StyledHeader, 
    Container, 
    Img, 
    Button, 
    BtnText, 
    Form, 
    BtnForm, 
    Input, 
    TaskContainer, 
    Tasks, 
    TaskDescription, 
    TaskActions 
} from './Styles';

const Tarefas = () => {
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
            <TaskContainer>
                <Tasks>
                    <TaskDescription>Criar Tarefas</TaskDescription>
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
                </Tasks>
                <Tasks>
                    <TaskDescription>Conduzir Tarefas</TaskDescription>
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
                </Tasks>
                <Tasks>
                    <TaskDescription>Deletar Tarefas</TaskDescription>
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
                </Tasks>
            </TaskContainer>
        </Container>
        </>
    );
}

export default Tarefas;