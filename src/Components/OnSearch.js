import React from 'react'
import Searchbar from './Searchbar';
import VideoList from './VideoList';
const OnSearch = ({onTermSubmit,term,videos,onVideoSelect}) => {
    return (
        <div className="ui container">
           <Searchbar onFormSubmit={onTermSubmit}/>
           Results:{videos.length} for {term}
            <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
        </div>
    )
}

export default OnSearch;
