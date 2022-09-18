import styled from 'styled-components/native';

const HeaderContainer = styled.View`
    width: 100%;
    height: 118px;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #E4B062;
    position: relative;
`;

const Logo = styled.Image`
    width: 70px;
    height: 63px;
    position: absolute;
    top: 28px;
    left: 15px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
`;

const ExitSquare = styled.Image`
    width: 51px;
    height: 55px;
    position: absolute;
    top: 31px;
    right: 25.5px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
`;

const ExitArrow = styled.Image`
    width: 36px;
    height: 26px;
    position: absolute;
    top: 46px;
    right: 14px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
`;

function Header({ auth }) {
    return (
        <HeaderContainer>
            <Logo source={require('../assets/logo.png')} />
            {auth ?
                <>
                    <ExitSquare source={require('../assets/square.png')} />
                    <ExitArrow source={require('../assets/arrow.png')} />
                </>
                :
                ''
            }
        </HeaderContainer>
    )
}

export default Header;