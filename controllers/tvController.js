//let array = [10,20,30,40];
const mongoose = require('mongoose');
const TVShow = mongoose.model('TVShow');
const obj={};

//const todos =(callback)=>{//usando callback
const todos =(tvshows)=>{    
    /*TVShow.find((err,tvshows)=>{
        if(err){
            return callback({error: err},null);
        }
        callback(null,tvshows)
    });*/
    
    //suando promesa dentro de promesa
    /*return new Promise((resolve, reject)=>{
       TVShow.find()
        .then(tvshows=>resolve(tvshows) )
        .catch(err => reject({error: err}))
       }) ;*/
    
    //el find devuelve todos (es una promesa)
    //return TVShow.find();
    
    
    return new Promise((resolve, reject)=>{
       if(tvshows.length<0){
           return reject('No hay datos');
       }
        return resolve({data: tvshows.length});
       }) ;
    
    
};

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
    
    //uso de callbacks
    //desventajas tenemos que anidarlas
    /*TVShow.find((err, tvshows)=>{
        if(err){
            res.send({errr: err});
        }
        console.log(tvshows);
        res.send(tvshows);
    });*/
    
    /*todos((error,result)=>{
          if(error){
        return res.send({error: error});
    }
    res.send(result);
          }
         );*/
    
    //uso de promesas
    //es un callback pero nos puede anidar mas promesas dentro de ellas
    /*TVShow.find()
    .then(tvshows=> res.send(tvshows))
    .catch(err => res.send({error: err}))*/
    
    /*todos()
    .then(tvshows=> res.send(tvshows))
    .catch(err => res.send({error: err}));*/
    
    TVShow.find()
    .then(tvshows => { 
        if(tvshows.length >0 ){
            return Promise.reject('arreglo mayor a 0');
        }
        return todos(tvshows) } )
    .then(resultado => res.send(resultado))
    .catch(err => res.send({error: err}));
    
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
    /*let tvFind = TVShow.findById(req.params.id, (err, tvshow)=>{
        if(err){
            return res.send({error: err});
        }
        res.send(tvshow);
    });*/
    
    //usando promesas
    TVShow.findById(req.params.id)
    .then(resuslt => res.send(resuslt))
    .catch(err => res.send({error: err}));
    
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
    /*let findAndRemoveTv = TVShow.findByIdAndRemove(req.params.id, (err, result)=>{
        if(err){
            return res.send({error: err});
        }
        res.send(result);
    });   */
    
    //usando promesas
    TVShow.findByIdAndRemove(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.send({error: err}));
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


obj.updateTvShow = (req, res, next)=>{
    /*TVShow.findByIdAndUpdate(req.params.id,req.body, (err, result)=>{
        if(err){
           return res.send(err);
           }
        res.send(result);
    });*/
    
    //usando promesas
    TVShow.findByIdAndUpdate(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.send({error: err}));
}

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