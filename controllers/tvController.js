//let array = [10,20,30,40];
const mongoose = require('mongoose');
const TVShow = mongoose.model('TVShow');
const obj={};
/*const tvShows=[    
    {
    id: 1,
    titulo: 'SHOW 1',
        pais:'GT'
},
      {
          id:2,
        titulo: 'SHOW 2',
        pais: 'SV'
      }     

] */


obj.getArray=(req, res, next)=>{
    //res.send(tvShows);
    TVShow.find((err, tvshows)=>{
        if(err){
            res.send({errr: err});
        }
        console.log(tvshows);
        res.send(tvshows);
    });
}
/*
obj.postArray = (req, res, next)=>{
    array.push(req.body.number);
        res.send(array);
    }*/

obj.postArray = (req, res, next)=>{
    //tvShows.push(req.body);
       // res.send(tvShows);
        let newTVShow = new TVShow({
            titulo: req.body.titulo,
            anio: req.body.anio,
            pais: req.body.pais
        });
        
        newTVShow.save((err, result)=>{
            if(err){
                return res.send({error: err});
            }
                   res.send(result) ;
                    });
    
    };


obj.getById = (req, res, next)=>{
    let tvFind = TVShow.findById(req.params.id, (err, tvshow)=>{
        if(err){
            return res.send({error: err});
        }
        res.send(tvshow);
    });
    
}
/*
obj.getById = (req, res, next)=>{
    let tvFind = tvShows.find((tvShow)=> tvShow.Id == Number.parseInt(req.params.id));
    if(!tvFind){
        return res.send({error: 'Show:' + req.params.id +', no encontrado'});
    }
    res.send(tvFind);
}*/

obj.deleteTvShow = (req, res, next)=>{
    let findAndRemoveTv = TVShow.findByIdAndRemove(req.params.id, (err, result)=>{
        if(err){
            return res.send({error: err});
        }
        res.send(result);
    });    
}

/*
obj.deleteTvShow = (req, res, next)=>{
    let indexTvShow = tvShows.findIndex((tvShow)=> tvShow.Id==Number.parseInt(req.params.id));
    if(indexTvShow<0){
        return res.send({error: 'Id:' + req.params.id +', no encontrado'});
    }

    //let result = tvShows.splice(indexTvShow,1);

    res.send(tvShows.splice(indexTvShow,1));
}
*/

/*
obj.updateTvShow = (req, res, next)=>{
let indexTvShow = tvShows.findIndex((tvShow)=> tvShow.Id==Number.parseInt(req.params.id));
if(indexTvShow<0){
return res.send({error: 'Id:' + req.params.id +', no encontrado'});
}*/

module.exports=obj;
/*
module.exports={
    getArray: (req, res, next)=>{
    res.send(array);
},
    postArray: (req, res, next)=>{
    array.push(req.body.number);
        res.send(array);
}
} */