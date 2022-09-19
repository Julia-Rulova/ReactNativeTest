import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import Header from "./Header";
import Post from "./Post";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts').then(posts => posts.json()),
            fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json())
        ]).then(([posts, users]) => {
            setUsers(users);
            setPosts(posts);
        })
    }, []);

    return (
        <>
            <Header auth={true} />
            <ScrollView>
                {
                    posts.map((post) => {
                        return (
                            <Post
                                post={post}
                                user={users.find(x => x.id === post.userId)}
                                key={post.id} />
                        )
                    })
                }
            </ScrollView>
        </>
    )
}

export default Posts;