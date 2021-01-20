import React from 'react'
import Searchbar from './Searchbar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const OnVideoClick = ({onTermSubmit,term,videos,onVideoSelect,selectedVideo}) => {
    return (
        <div className="ui container">
            <Searchbar onFormSubmit={onTermSubmit}/>
                  Results:{videos.length} for {term}
                  <div className="ui grid ">
                      <div className="ui row">
                        <div className="eleven wide column">
                           <VideoDetail video={selectedVideo}/>
                        </div>
                        <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={onVideoSelect}/>  
                        </div>
                  </div>
                  </div>
        </div>
    )
}

export default OnVideoClick
