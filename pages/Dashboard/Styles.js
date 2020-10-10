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
    justify-content: center;
`;