import React from 'react';
import { Text } from 'react-native';
import { StyledHeader, Container, Img, Button, BtnText } from './Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogoImg from '../../assets/logo.png';
import ProgressCircle from 'react-native-progress-circle';

const Dashboard = () => {
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
                percent={60}
                radius={100}
                borderWidth={30}
                color="#18db83"
                shadowColor="#999"
                bgColor="#dae3dc" >
                <Text style={{ fontSize: 35, color: "#555" }}>{'60%'}</Text>
            </ProgressCircle>
        </Container>
        </>
    );
}

export default Dashboard;