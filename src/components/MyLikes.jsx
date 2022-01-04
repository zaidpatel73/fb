import React, { useState ,useEffect} from 'react';
import Nav from '../nav';
import Card from './Card';
export default function MyLikes(props) {
// const LocalStore =JSON.parse(window.localStorage.getItem('Local')); 
// const LocalS = JSON.parse(LocalStore);
// console.log(LocalStore);
const [data,setData]=useState(props.feedData)
function handleLike(i){
    setData(data.map((element)=>{if(element.id==i){
        element.liked=!element.liked
    }
    return element
}))
}
useEffect(()=>{
    window.localStorage.setItem("data",JSON.stringify(data))},[data])

    return (

        
        <>
            <Nav />
            <div className='feed-bg'>
                {data.filter(({liked})=>liked==true).map((feeds)=>{
                                          return <Card key={feeds.id} id={feeds.id} userName={feeds.userName} post={feeds.post} likes={feeds.likes} liked={feeds.liked} handleLike={handleLike} />

                })}
            </div>
        </>
    );
}

