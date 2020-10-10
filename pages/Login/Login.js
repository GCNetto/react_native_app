import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { Button, BtnText, Container, BorderedContainer, Input, Img } from './Styles';
import LogoImg from '../../assets/logo.png';

const Login = () => {
    return (
        <Container>
            <BorderedContainer>
                <Img source={LogoImg}/>
                <Input placeholder='Email'/>
                <Input placeholder='Senha' secureTextEntry={true}/>
                <Button>
                    <BtnText>Acessar</BtnText>
                </Button>
                <Text style={{textAlign: "center", color: "#18db83"}}>
                    <MaterialCommunityIcons
                        name="copyright"
                        size={20}
                        color="#18db83"
                    /> Copyright 2020 - All Rights Reserved
                </Text>
            </BorderedContainer>
        </Container>
    );
}

export default Login;