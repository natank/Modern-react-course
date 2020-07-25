import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyDtGVSk0ETLO7HdxYwFker-92V_oTIh7J0';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("chocolate")
  }, []);

  async function onTermSubmit(term) {

    try {
      let response = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          key: KEY
        }
      });

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);

    } catch (err) {
      console.log(err);
    }

  }

  function onVideoSelect(video) {
    return () => {
      setSelectedVideo(video)
    }
  }

  return pug`
    .ui.container  
      div
          SearchBar(onFormSubmit= onTermSubmit)
          .ui.grid
            .ui.row
              .eleven.wide.column
                VideoDetail(video= ${selectedVideo})
              .five.wide.column
                VideoList(onVideoSelect = ${onVideoSelect} videos = ${videos})
    `
}

export default App;

