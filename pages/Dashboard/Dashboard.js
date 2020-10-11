import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { StyledHeader, Container, Img, Button, BtnText } from './Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogoImg from '../../assets/logo.png';
import ProgressCircle from 'react-native-progress-circle';
import Api from '../../services/Api';
import { useIsFocused } from '@react-navigation/native';

const Dashboard = () => {
    const focus = useIsFocused();
    const [percent, setPercent] = useState(0);

    const calcularPercent = async () => {
        try {
            const response = await Api.get("tarefas");
            const tasks = response.data;
            const tasksOk = tasks.filter((task) => {
                return task.concluido;
            });
            setPercent((tasksOk.length / tasks.length) * 100);
        } catch (err) {
            console.warn("Erro ao recuperar tarefas");
        }
    }

    useEffect(() => {
        if (focus) {
            calcularPercent();
        }
    }, [focus]);

    return (
        <>
        <StyledHeader>
                <Img source={LogoImg}/>
            <Button>
                <BtnText>
                    <MaterialCommunityIcons 
                        name="exit-to-app"
                        size={28}
                    />
                </BtnText>
            </Button>
        </StyledHeader>
        <Container>
            <ProgressCircle
                percent={percent}
                radius={100}
                borderWidth={30}
                color="#18db83"
                shadowColor="#999"
                bgColor="#dae3dc" >
                <Text style={{ fontSize: 30, color: "#555" }}>{`${percent.toFixed(2)}%`}</Text>
            </ProgressCircle>
        </Container>
        </>
    );
}

export default Dashboard;