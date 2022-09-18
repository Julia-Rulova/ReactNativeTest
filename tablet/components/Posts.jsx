import styled from 'styled-components/native';

const PostsContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 37px;
    flex-wrap: wrap;
    width: 89%;
`;

const Post = styled.View`
    width: 48.5%;
    border: 5px solid #27569C;
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    shadow-color: #000;
    background-color: #fff;
    elevation: 10;
    display: flex;
    text-align: left;
    flex-direction: column;
    margin: 0 0 25px;
    padding: 25px 20px 41px 25px;
`;

const Author = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    color: #000;
    padding: 0;
    margin: 0 0 8px;
`;

const Company = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #000;
    text-align: left;
    padding: 0;
    margin: 0 0 8px;
`;

const Title = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #000;
    text-align: left;
    padding: 0;
    margin: 0 0 8px;
`;

const Content = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #000;
    text-align: left;
    padding: 0;
    margin: 0;
`;


const PostImage = styled.Image`
    width: 150px;
    height: 150px;
    background-color: #000;
    object-fit: cover;
    margin-bottom: 22px;
`;

function Posts() {

    return (
        <PostsContainer>
            <Post>
                <PostImage source={require('../assets/logo.png')} />
                <Author>Autor: Leanne Graham</Author>
                <Company>Company: Romaguera-Crona</Company>
                <Title>Title:sunt aut facere repellat provident occaecati excepturi optio reprehenderit</Title>
                <Content numberOfLines={5} ellipsizeMode='tail'>est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis</Content>
            </Post>
            <Post>
                <PostImage source={require('../assets/logo.png')} />
                <Author>Autor: Leanne Graham</Author>
                <Company>Company: Romaguera-Crona</Company>
                <Title>Title:sunt aut facere repellat provident occaecati excepturi optio reprehenderit</Title>
                <Content numberOfLines={5} ellipsizeMode='tail'>est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis</Content>
            </Post>
            <Post>
                <PostImage source={require('../assets/logo.png')} />
                <Author>Autor: Leanne Graham</Author>
                <Company>Company: Romaguera-Crona</Company>
                <Title>Title:sunt aut facere repellat provident occaecati excepturi optio reprehenderit</Title>
                <Content numberOfLines={5} ellipsizeMode='tail'>est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis</Content>
            </Post>
        </PostsContainer >
    )
}

export default Posts;