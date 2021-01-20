import React, {useState} from 'react';
import OnVideoClick from './Components/OnVideoClick';
import UseVideos from './hooks/UseVideos';
import OnSearch from './Components/OnSearch';
const App=()=>{

   const [selectedVideo,setSelectedVideo]=useState(null);
   const [videos,search,term]=UseVideos();
  return(
       <>
        { selectedVideo===null?<OnSearch onTermSubmit={search} term={term} videos={videos} onVideoSelect={(video)=>setSelectedVideo(video)}/>:
        <OnVideoClick onTermSubmit={search} term={term} videos={videos} onVideoSelect={(video)=>setSelectedVideo(video)} selectedVideo={selectedVideo}/>
        }
        </>
        
   )
}


export default  App;
