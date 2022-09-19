const db = require('../database/models');
module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
            .then((movies)=>{
                return res.render('moviesList',{
                    movies
                })
            })
            .catch((err)=>console.log(err))
    },
    detail:(req,res)=>{
        db.Movie.findByPk(req.params.id)
        .then((movie)=>{
            return res.render('moviesDetail',{
                movie
            })
        })
        .catch((err)=>console.log(err))
    },
    new:(req,res)=>{
        db.Movie.findAll({
            order:[
                ['release_date','DESC']
            ]
        }).then((movies) =>{
        return res.render('newestMovies',{
            movies
        })
    })
    .catch((err)=>console.log(err))
   },
   recommended:(req,res)=>{
    db.Movie.findAll({
        order:[
            ['rating','DESC']
        ],
        limit:5
    }).then((movies)=>{
        return res.render('recommendedMovies',{
            movies

        })
    })

   }
}