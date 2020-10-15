import styled from 'styled-components/native';

export const StyledHeader = styled.View`
    height: 50px;
    padding: 0 15px
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

export const Img = styled.Image`
    width: 90px;
    height: 30px;
    border-radius: 5px;
`;

export const Container = styled.ScrollView`
    padding: 2px;
    background-color: #dae3dc;
    flex: 1;
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

export const ProjectContainer = styled.View`
    padding: 5px;
    align-items: center;
    flex-direction: column;    
`;

export const Projects = styled.View`
    max-width: 100%;
    height: 60px;
    background-color: #fff;
    border: 1px solid #18db83;
    border-radius: 5px;
    align-items: center;
    flex-direction: row;
    padding: 0 10px;
`;

export const ProjectDescription = styled.Text`
    font-size: 20px;
    flex: 6;
`;

export const ProjectActions = styled.Text`
    align-items: center;
    flex: 2;
`;

export const TaskContainer = styled.View`
    flex-direction: column;
`;

export const Tasks = styled.View`
    width: 97%;
    height: 60px;
    background-color: #fff;
    border: 1px solid #18db83;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    margin: 5px;
`;

export const TaskDescription = styled.Text`
    font-size: 20px;
    flex: 7;
`;

export const TaskActions = styled.Text`
    align-items: center;
    flex: 1;
`;