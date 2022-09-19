import styled from 'styled-components/native';

const PostItem = styled.View`
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

function Post({ user, post, photo }) {
    return (
        <PostItem>
            <PostImage source={{ uri: photo.url }} alt={photo.title} />
            <Author>{user.name}</Author>
            <Company>{user.company.name}</Company>
            <Title numberOfLines={4} ellipsizeMode='tail'>{post.title}</Title>
            <Content numberOfLines={5} ellipsizeMode='tail'>{post.body}</Content>
        </PostItem>
    )
}

export default Post;