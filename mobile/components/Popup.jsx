import { View } from 'react-native';
import styled from 'styled-components/native';

const PopupClose = styled.View`
    visibility: hidden;
    opacity: 0;
`;

const PopupOpen = styled.View`
    visibility: visible;
    opacity: 1;
    margin: 14px auto 0;
`;

const PopupContainer = styled.View`
    background-color: #F5F5F5;
    max-width: 250px;
    border-radius: 5px;
    border: 1px solid #DCDCDC;
`;

const PopupText = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    margin: 20px;
    padding: 0;
`;

function Popup({ isOpen }) {
    return (
        <View>
            {
                isOpen ?
                    <PopupOpen>
                        <PopupContainer>
                            <PopupText>Неверный логин или пароль!</PopupText>
                        </PopupContainer>
                    </PopupOpen>
                    :
                    <PopupClose />
            }
        </View>
    )
}

export default Popup;