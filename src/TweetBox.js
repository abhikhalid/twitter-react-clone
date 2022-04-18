import React, { useState } from 'react';

import { Avatar, Button } from '@mui/material';

import './TweetBox.css';

import db from './firebase';

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {

        e.preventDefault();

        db.collection('posts').add({
            avatar: "https://hips.hearstapps.com/esq.h-cdn.co/assets/16/28/1468416014-rami-mr-robot.JPG",
            displayName: "KhalidMahmud",
            image: tweetImage,
            text: tweetMessage,
            username: "khalid.mahmud1010",
            verified: true,
        });

        setTweetMessage("");
        setTweetImage("");



    }


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/28/1468416014-rami-mr-robot.JPG" />
                    <input value={tweetMessage} onChange={e => setTweetMessage(e.target.value)} placeholder="What's happening?" type="text" />

                </div>
                <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" />

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>


            </form>

        </div>
    );
};

export default TweetBox;