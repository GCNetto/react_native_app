import React from 'react';
import { Text } from 'react-native';
import { Button, Container, BorderedContainer, Input, Img } from './Styles';
import LogoImg from '../../assets/logo.png';

const Login = () => {
    return (
        <Container>
            <BorderedContainer>
                <Img source={LogoImg}/>
                <Input placeholder='Email'/>
                <Input placeholder='Senha' secureTextEntry={true}/>
                <Button>
                    <Text>Acessar</Text>
                </Button>
            </BorderedContainer>
        </Container>
    );
}

export default Login;