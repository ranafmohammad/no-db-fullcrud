import React, { Component } from "react";
import Card from "../shared/Card";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      editing: false
    };
  }
  componentDidMount() {
    axios
      .get("/api/movies")
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(e => console.log(e.message));
  }
  addToFav(movie) {
    axios.post("/api/movie/fav", { movie }).catch(e => console.log(e.message));
  }

  changeParentState = resp => {
    this.setState({ movies: resp });
  };

  //EDITED
  onEditHandler = () => {
    this.setState({ editing: !this.state.editing });
  };
  render() {
    return (
      <div className="main">
        {this.state.movies.map(movie => (
          <div className="main-cards">
            <Card
              movie={movie}
              key={movie.id}
              text="Add To Fav"
              onSubmit={this.addToFav(movie)}
              editText={this.onEditHandler}
              editOne="awesome"
              editing={this.state.editing}
              newMovies={this.state.movies}
              changeParentSt={this.changeParentState}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default Main;
