const express = require('express');
//const { response } = require('../app');
const Movies = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



router.get('/movies', (req, res) => {
Movies.find()
.then((movies) => {

console.log(movies, "estas son las peliculas");
 res.render("movies.hbs", { movies });

})
.catch((err)=>{
    console.log(err)
});


router.get("/details/:id",(req, res) => {
const id = req.params.id

Movies.findById(id)
  .then((movie) => {
      console.log(movie)
    res.render("details.hbs",  movie );
  })

  .catch((err) => {
    console.log(err);
  });




})


});






module.exports = router;
