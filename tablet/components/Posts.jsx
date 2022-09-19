import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import styled from 'styled-components/native';

import Header from "./Header";
import Post from "./Post";

const PostsContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 37px;
    flex-wrap: wrap;
    width: 89%;
`;

function Posts() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts').then(posts => posts.json()),
            fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json()),
            fetch('https://jsonplaceholder.typicode.com/photos').then(photos => photos.json())
        ]).then(([posts, users, photos]) => {
            setPhotos(photos);
            setUsers(users);
            setPosts(posts);
        })
    }, []);

    return (
        <>
            <Header auth={true} />
            <ScrollView>
                <PostsContainer>
                    {
                        posts.map((post) => {
                            return (
                                <Post
                                    post={post}
                                    user={users.find(x => x.id === post.userId)}
                                    photo={photos.find(x => x.albumId === post.userId)}
                                    key={post.id}
                                />
                            )
                        })
                    }
                </PostsContainer>
            </ScrollView>
        </>
    )
}

export default Posts;