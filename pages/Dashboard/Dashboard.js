import React from 'react';
import { View, Text } from 'react-native';
import { StyledHeader, Container, Img, Button, BtnText } from './Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LogoImg from '../../assets/logo.png';

const Dashboard = () => {
    return (
        <View>
            <StyledHeader>
                    <Img source={LogoImg}/>
                <Button>
                    <BtnText>
                        <MaterialCommunityIcons 
                            name="exit-to-app"
                            size={20}
                        /> Sair
                    </BtnText>
                </Button>
            </StyledHeader>
            <Container>
                <Text>Dashboard</Text>
            </Container>
        </View>
    );
}

export default Dashboard;