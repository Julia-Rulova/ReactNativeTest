import styled from 'styled-components/native';

import { LOGIN, PASSWORD } from '../constants/utils';

const Form = styled.View`
    width: 480px;
    margin: 284px auto 0;
    border: 5px solid #27569C;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    shadow-color: #000;
    background-color: #fff;
    elevation: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-style: normal;
    font-weight: 800;
    line-height: 29px;
    font-size: 24px;
    color: #27569C;
    text-align: center;
    padding: 25px 0;
    margin: 25px auto;
`;

const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin: 0 25px 25px;
    width: 92%;
`;

const InputText = styled.Text`
    width: 145px;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    height: 45px;
    padding: 5px 0;
    margin: 0;
`;

const Input = styled.TextInput`
    width: 295px;
    height: 45px;
    background: #D9D9D9;
    border: 4px solid #27569C;
    border-radius: 10px;
    margin-bottom: 13px;
    padding: 5px;
`;

const SubmitBtn = styled.TouchableOpacity`
    height: 43px;
    width: 213px;
    background: #E4B062;
    border-radius: 10px;
    margin: 10px 43px 34px 32px;
    text-align: center;
`;

const SubmitBtnText = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    padding: 7px 0;
    margin: 0;
`;

function Authorization() {
    return (
        <Form>
            <Title>Autorization</Title>
            <InputContainer>
                <InputText>login</InputText>
                <Input />
            </InputContainer>
            <InputContainer>
                <InputText>password</InputText>
                <Input />
            </InputContainer>
            <SubmitBtn>
                <SubmitBtnText>Submit</SubmitBtnText>
            </SubmitBtn>
        </Form>
    )
}

export default Authorization;