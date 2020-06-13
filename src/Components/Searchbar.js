import React from "react";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    //this.setState({ search: "" });
  }

  onInputChange = (event) => {
    this.setState({ search: event.target.value });
    console.log(this.state.search);
  };

  onClick = () => {
    this.props.onSearchSubmit(this.state.search);
  };

  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      //console.log("do validate");
      this.props.onSearchSubmit(this.state.search);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control noshadow"
              placeholder="Pesquisar"
              aria-label="Pesquisar"
              aria-describedby="button-addon2"
              value={this.state.search}
              onChange={this.onInputChange}
              onKeyDown={this._handleKeyDown}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={this.onClick}
              >
                <img
                  src={require("./Images/search.png")}
                  alt="something"
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;
