import React, { useState, useContext } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { Button, BtnText, Container, BorderedContainer, Input, Img } from './Styles';
import LogoImg from '../../assets/logo.png';
import { UsuarioContext } from '../../contexts/user';

const Login = () => {
    const { signIn, signUp } = useContext(UsuarioContext);

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleAcesso = async () => {
        try {
            await signIn(email, password);
        } catch (err) {
            console.warn(err);
        }
    }

    const handleCadastro = async () => {
        try {
            await signUp(email, password);
        } catch (err) {
            console.warn(err);
        }
    }

    return (
        <Container>
            <BorderedContainer>
                <Img source={LogoImg}/>
                <Input 
                    placeholder='Email'
                    onChangeText={letras => { setEmail(letras) }}
                />
                <Input 
                    placeholder='Senha' 
                    secureTextEntry={true}
                    onChangeText={letras => { setPassword(letras) }}
                />
                <Button onPress={() => { handleAcesso(); }}>
                    <BtnText>Acessar</BtnText>
                </Button>
                <Button onPress={() => { handleCadastro(); }}>
                    <BtnText>Cadastre-se</BtnText>
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