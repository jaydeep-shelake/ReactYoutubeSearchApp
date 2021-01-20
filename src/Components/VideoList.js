import React from 'react'
import VideoItem from './VideoItem';
const VideoList = ({videos,onVideoSelect}) => {
     const Videos= videos.map((video,index)=>{
        return <VideoItem key={index} video={video} onVideoSelect={onVideoSelect}/>
      })
    return (
        <div className="ui relaxed divided list ">
           {Videos}
        </div>
    )
}

export default VideoList;
