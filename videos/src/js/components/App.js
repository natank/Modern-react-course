import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const KEY = 'AIzaSyDtGVSk0ETLO7HdxYwFker-92V_oTIh7J0';

class App extends Component {
  state = { videos: [], selectedVideo: null };
  constructor() {
    super();

  }

  componentDidMount() {
    this.onTermSubmit("chocolate")
  }
  onTermSubmit = async term => {
    try {
      let response = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          key: KEY
        }
      });
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
    } catch (err) {
      console.log(err);
    }
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }
  render() {
    return pug`
    .ui.container  
      div
          SearchBar(onFormSubmit=this.onTermSubmit)
          .ui.grid
            .ui.row
              .eleven.wide.column
                VideoDetail(video= this.state.selectedVideo)
              .five.wide.column
                VideoList(onVideoSelect = this.onVideoSelect videos = this.state.videos)
    `
  }
}

export default App;

