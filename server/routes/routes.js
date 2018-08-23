const {
  getMovies,
  addToFav,
  deleteFromFav,
  getFav,
  updateMovies
} = require("./../controllers/movieController");
const routes = app => {
  app.get("/healthcheck", (req, res) => {
    res.send({
      message: "Ok"
    });
  });
  app.get("/api/movies", getMovies);
  app.get("/api/movie/fav", getFav);
  app.post("/api/movie/fav", addToFav);
  app.delete("/api/movie/fav/:id", deleteFromFav);
  app.put("/api/movie/fav/:id", updateMovies);
};

module.exports = routes;
