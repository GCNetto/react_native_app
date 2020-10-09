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
                <Text style={{textAlign: "center"}}>
                    <MaterialCommunityIcons
                        name="copyright"
                        size={20}
                        color="black"
                    /> Copyright 2020 - All Rights Reserved
                </Text>
            </BorderedContainer>
        </Container>
    );
}

export default Login;