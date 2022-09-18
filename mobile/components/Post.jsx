import React from 'react';
import styled from 'styled-components/native';

const PostItem = styled.View`
    height: 200px;
    margin: 10px 14px;
    border: 5px solid #27569C;
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    shadow-color: #000;
    background-color: #fff;
    elevation: 10;
    display: flex;
    text-align: left;
    flex-direction: column;
`;

const Author = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    color: #000;
    padding: 0;
    margin: 12px 17px 17px;
`;

const Company = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #000;
    text-align: left;
    padding: 0;
    margin: 12px 17px 17px;
`;

const Title = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #000;
    text-align: left;
    padding: 0;
    margin: 12px 17px 17px;
`;

function Post({ user, post }) {
    return (
        <PostItem>
            <Author>{user.name}</Author>
            <Company>{user.company.name}</Company>
            <Title numberOfLines={4} ellipsizeMode='tail'>{post.title}</Title>
        </PostItem>
    )
}

export default Post;