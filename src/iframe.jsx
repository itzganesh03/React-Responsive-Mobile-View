import React from "react";
class iframe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: true
    };
  }
  componentDidMount() {
    const { change } = this.state;
    this.setState({ change: change });
    console.log("Ifram", this.state.change);
  }
  iframeRow(e) {
    console.log("Iframe", e);
    if (e === true) {
      this.setState({ change: false });
    } else {
      this.setState({ change: true });
    }
  }
  render() {
    return (
      <div className="iframe">
        <button onClick={(e) => this.iframeRow(this.state.change)}>
          Click Here!
        </button>
        {this.state.change ? (
          <h1></h1>
        ) : (
          <iframe width="332" height="315" src="https://www.youtube.com/embed/5Eqb_-j3FDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          // <iframe
          //   src="https://www.youtube.com/"
          //   frameborder="0"
          //   allow="autoplay; encrypted-media"
          //   allowfullscreen
          //   title="video"
          //   // width="540"
          //   // height="450"
          // ></iframe>
        )}
      </div>
    );
  }
}

export default iframe;