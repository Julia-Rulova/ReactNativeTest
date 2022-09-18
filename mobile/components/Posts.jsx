import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text } from "react-native";

import Header from "./Header";
import Post from "./Post";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({ data }) => {
                setPosts(data);
            });
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                setUsers(data);
            });
    }, []);

    console.warn(users[0]);

    return (
        <>
            <Header auth={true} />
            <ScrollView>
                {
                    posts.map((post) => {
                        return (
                            <Post post={post} user={users[post.userId - 1]} key={post.id} />
                        )
                    })
                }
            </ScrollView>
        </>
    )
}

export default Posts;