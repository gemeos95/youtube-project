import React from "react";

class VideoList extends React.Component {
  passVideo = () => {
    //passar o videoId para a App (através da SelectVideo callback)
    console.log();
    this.props.SelectedVideo(this.props.AllInfo);
  };

  render() {
    return (
      <div
        className="card mb-3"
        style={{ maxWidth: "540px", cursor: "pointer" }}
        onClick={this.passVideo}
      >
        <div className="row no-gutters">
          <div className="col-md-4 video-item">
            <img
              src={this.props.image}
              className="card-img "
              alt="..."
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ padding: "0px !important" }}>
              <h5 className="card-title">{this.props.title}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoList;
