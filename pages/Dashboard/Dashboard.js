import React from 'react';
import { View, Text } from 'react-native';
import { StyledHeader, Container, Img, Button, BtnText } from './Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogoImg from '../../assets/logo.png';

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
            <Text>Dashboard</Text>
        </Container>
        </>
    );
}

export default Dashboard;