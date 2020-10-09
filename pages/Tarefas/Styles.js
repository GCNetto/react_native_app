import styled from 'styled-components/native';

export const StyledHeader = styled.View`
    height: 50px;
    padding: 0 15px
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Img = styled.Image`
    width: 90px;
    height: 30px;
    border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
    width: 80px;
    height: 40px;
    background-color: #dc3545;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const BtnText = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const Container = styled.View`
    background-color: #dae3dc;
    flex: 1;
    align-items: center;
`;

export const Form = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    border:1px solid #18db83;
    height:60px;
    flex:1;
    border-radius:5px;
    padding:0 20px;
    margin: 5px;
`;

export const BtnForm = styled.TouchableOpacity`
    width: 25%;
    height: 60px;
    background-color: #18db83;
    border-radius: 5px;
    margin: 5px
    align-items: center;
    justify-content: center;
`;

export const TaskContainer = styled.View`
    width: 100%;
    padding: 5px
    flex: 1;
`;

export const Tasks = styled.View`
    width: 100%;
    height: 60px;
    background-color: #fff;
    border: 1px solid #18db83;
    border-radius: 5px;
    align-items: center;
    flex-direction: row;
    padding: 0 15px;
    margin: 5px 0;
`;

export const TaskDescription = styled.Text`
    font-size: 20px;
`;

export const TaskActions = styled.Text`
    flex: 1;
    align-items: center;
`;