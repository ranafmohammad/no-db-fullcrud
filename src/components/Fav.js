import React, { Component } from "react";
import Card from "../shared/Card";
import axios from "axios";
class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    axios.get("/api/movie/fav").then(response => {
      this.setState({
        movies: response.data
      });
    });
  }
  deleteFromFav(movie) {
    axios.delete(`/api/movie/fav/${movie.id}`).then(response => {
      this.setState({
        movies: response.data
      });
    });
  }

  render() {
    return (
      <div className="fav">
        {this.state.movies.map(movie => (
          <div className="fav-cards">
            <Card
              movie={movie}
              key={movie.id}
              text="Delete from fav"
              onSubmit={() => this.deleteFromFav(movie)}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default Fav;
