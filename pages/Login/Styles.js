import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #dae3dc;
    flex: 1;
    justify-content: center;
    padding: 30px 10px;
`;

export const BorderedContainer = styled.View`
    flex: 1;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 15px;
`;

export const Img = styled.Image`
    width: 100%;
    margin-bottom: 20px;
`;

export const Input = styled.TextInput`
    border: 1px solid #18db83;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    padding: 0 20px;
    margin: 10px auto;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #18db83;
    border-radius: 5px;
    margin: 10px 0;
    align-items: center;
    justify-content: center;
`;

export const BtnText = styled.Text`
    font-size: 18px;
    color: #fff;
`;