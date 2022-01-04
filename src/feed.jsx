import React, { useEffect, useState } from 'react';
// import FeedData from './components/data/post.jsx';
// import { Link, Route, Routes } from 'react-router-dom';
import Nav from './nav';
import PostInput from './components/post';
import Card from './components/Card';

function Feed(props) {
    const [data, setData] = useState(props.feedData)
    function handleLike(i) {
        console.log(i);
        //     console.log(data.map((element,index)=>{if(index==i){
        //         // element.liked= !element.liked
        //         console.log(element.liked)
        //     }
        //     return element
        // }));
        setData(data.map((element) => {
            if (element.id == i) {
                element.liked = !element.liked
            }
            return element
        }))
    }
    useEffect(() => {
        window.localStorage.setItem("data", JSON.stringify(data))
        console.log(data);
    }, [data])

    return (
        <>
            <Nav />
            <div className='feed-bg'>
                <PostInput />
                {data.map((feeds) => {
                    return <Card key={feeds.id} id={feeds.id} userName={feeds.userName} post={feeds.post} likes={feeds.likes} liked={feeds.liked} handleLike={handleLike}/>
                })}
            </div>
        </>
    );
}

export default Feed;