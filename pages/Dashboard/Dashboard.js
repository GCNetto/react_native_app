import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { StyledHeader, Container, Img, Button, BtnText } from './Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogoImg from '../../assets/logo.png';
import firebase from 'firebase';
import 'firebase/firestore'
import ProgressCircle from 'react-native-progress-circle';
// import { useIsFocused } from '@react-navigation/native';

const Dashboard = () => {
    // const focus = useIsFocused();
    const [percent, setPercent] = useState(0);

    const listenDashboard = (tasks) => {
        try {
            const tarefas = tasks.docs;
            const tarefasOk = tarefas.filter((task) => {
                return task.data().concluido;
            });
            setPercent((tarefasOk.length / tarefas.length) * 100);
        } catch (err) {
            console.warn("Erro ao recuperar tarefas");
        }
    }

    useEffect(() => {
        const listener = firebase.firestore().collection('tarefas').onSnapshot(listenDashboard);
        return () => listener();
    }, []);

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