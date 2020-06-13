import React from "react";

class VideoDetail extends React.Component {
  render() {
    console.log(this.props.VideoInfo, "inside video detail");
    if (this.props.VideoInfo) {
      return (
        <div className="ui segment">
          <div className="ui embed">
            <iframe
              title="video player"
              src={
                "https://www.youtube.com/embed/" +
                this.props.VideoInfo.id.videoId
              }
            />
          </div>
          <div className="ui header">
            <h4>{this.props.VideoInfo.snippet.title}</h4>
            <p style={{ fontWeight: "50px", fontSize: "10px" }}>
              {this.props.VideoInfo.snippet.description}
            </p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default VideoDetail;
