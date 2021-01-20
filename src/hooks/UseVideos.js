import {useState} from 'react';
import youtube from '../apis/youtube';

const UseVideos =()=>{
    const [videos,setVideos]=useState([]);
    const [term,setTerm]=useState('');

    const search= async(term)=>{
        const {data}= await youtube.get('/search',{
            params:{
                q:term
            }
        });

    const videoList=data.items;
    setVideos(videoList);
    setTerm(term);
}
return[videos,search,term];
}

export default UseVideos;