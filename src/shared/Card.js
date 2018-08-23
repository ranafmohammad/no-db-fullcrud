import React from "react";
import Button from "./Button";
import axios from "axios";

const Card = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
      // newMovies: []
    };
  }

  onChangeInput = e => {
    this.setState({ text: e.target.value });
  };

  updateText = (id, text) => {
    this.props.editText();
    axios.put(`/api/movies/${id}`, { text }).then(response => {
      this.props.changeParentSt(response.data);
    });
  };

  render() {
    const { props } = this;

    console.log(props.editing);
    return (
      <div className="card">
        <div className="image-container">
          <img
            className="card-image"
            src={`http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`}
          />
        </div>
        <div className="description">
          {console.log("PROPS", props.editing)}
          {props.editing ? (
            <input onChange={this.onChangeInput} />
          ) : (
            props.movie.overview
          )}
        </div>
        <div className="card-button">
          <button
            onClick={() => this.updateText(props.movie.id, this.state.text)}
          >
            submit edit
          </button>
          <button onClick={props.editText}>Edit</button>
          <Button onSubmit={() => props.onSubmit}> {props.text} </Button>
        </div>
      </div>
    );
  }
};

export default Card;
