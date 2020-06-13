import React from "react";
import Searchbar from "./Components/Searchbar";
import VideoDetail from "./Components/VideoDetail";
import VideoList from "./Components/VideoList";
import searchYouTube from "youtube-api-search";
const API_KEY = "AIzaSyBs9xfMgn_AM7hzDnekIQwoPuWjstVAKuU";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "", videos: [], sellectedVideo: "" };

    //this.setState({ search: "" });
  }

  //E se a página der refresh? Á pois! Solução
  componentDidMount() {
    let Last_Search = localStorage.getItem("Last_Search");
    //console.log(Last_Search, "lastsearch");
    this.onSearchSubmit(Last_Search);
  }

  //Chamado quando se dá submit da search box
  onSearchSubmit = (data) => {
    searchYouTube({ key: API_KEY, term: data, maxResults: 10 }, (videos) => {
      this.setState({ videos, sellectedVideo: videos[0] });
      this.setState({ search: data }); //tring to render on componentdidmount
      localStorage.setItem("Last_Search", data);
    });
  };

  //Chamado quando se clica no video
  SelectedVideo = (SelectedVideoInfo) => {
    this.setState({ sellectedVideo: SelectedVideoInfo });
    console.log(this.state.sellectedVideo, "na App");
  };

  render() {
    console.log(this.state.videos, "videos");
    return (
      <div>
        <Searchbar
          onSearchSubmit={
            this.onSearchSubmit /*one is the prop other the funct*/
          }
        />

        <div className="container">
          <div className="row">
            <div className="col-8">
              <VideoDetail VideoInfo={this.state.sellectedVideo} />
            </div>
            <div className="col-4">
              {this.state.videos.map((video) => {
                console.log(video);
                return (
                  <VideoList
                    AllInfo={video}
                    title={video.snippet.title}
                    image={video.snippet.thumbnails.medium.url}
                    Key={video.id.videoId}
                    SelectedVideo={
                      this
                        .SelectedVideo /*to return the specific Video id to put inside the play*/
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
