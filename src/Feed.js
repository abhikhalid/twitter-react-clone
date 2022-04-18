import React, { useEffect, useState } from 'react';

import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';

import db from './firebase';

import FlipMove from 'react-flip-move';

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //code
        db.collection('posts').onSnapshot(snapshot => (

            setPosts(snapshot.docs.map(doc => doc.data()))
        ));


    }, [])

    // console.log(posts);





    return (
        <div className="feed">
            {/* Header */}

            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}

            <TweetBox />

            {/* Post */}

            <FlipMove>
                {
                    posts.map(post => (
                        <Post
                            key={post.text + Math.random() * 100}
                            displayName={post.displayName}
                            username={post.username}
                            verified={post.verified}
                            text={post.text}
                            avatar={post.avatar}
                            image={post.image}
                        />
                    ))
                }
            </FlipMove>





        </div>
    );
};

export default Feed;