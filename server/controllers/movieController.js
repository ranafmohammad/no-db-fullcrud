let favArr = [];
const axios = require("axios");
const { key } = require("./../../apiKey");

const getMovies = (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
    )
    .then(response => {
      res.send(response.data.results);
    })
    .catch(e => {
      console.log(e.message);
    });
};
const addToFav = (req, res) => {
  const { movie } = req.body;
  favArr.push(movie);
  res.sendStatus(201);
};
const getFav = (req, res) => {
  res.send(favArr);
};
const deleteFromFav = (req, res) => {
  const { id } = req.params;
  const indexOfFavArr = favArr.findIndex(myFav => {
    return myFav.id === Number(id);
  });
  console.log(indexOfFavArr);
  if (indexOfFavArr > -1) {
    favArr.splice(indexOfFavArr, 1);
  }
  res.status(200).send(favArr);
};

// const updateMovies = (req, res) => {
//   const { text } = req.body;
//   const updateId = req.params.id;

//   let indexOfFav = favArr.findIndex(fav => fav.id == updateId);

//   favArr[indexOfFavArr] = {
//     id: updateId,

//   }

//   res.status(200).send(favArr);
// };
const updateMovies = (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  let indexOfFav = favArr.findIndex(fav => fav.id == id);
  favArr[indexOfFav].text = text;

  res.status(200).send(favArr);
};

module.exports = {
  getMovies,
  addToFav,
  deleteFromFav,
  getFav,
  updateMovies
};
