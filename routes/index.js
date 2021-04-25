const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allTheMoviesFromDB => {
     res.render('movies', { movies: allTheMoviesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
       next(error);
    });
});

router.get('/:movieId', (req, res) => {
//   const { movieId } = req.params;
 
  Movie.findOne({ _id: req.params.id })
    .then(theMovie => res.render('movie', { movie: theMovie }))
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
      next(error);
    });
});




// router.get('/movies/movie/:movieid', (req, res, next) => { //error 404
//   Movie.find(req.params.id)
//     .then(movieDetails => {
//      res.render('movie', { movie: movieDetails });
//     })
//     .catch(error => {
//       console.log('Error while getting the movie from the DB: ', error);
//        next(error);
//     });
// });




module.exports = router;


