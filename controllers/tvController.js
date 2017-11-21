let array = [10,20,30,40];
const obj={};
const tvShows=[    
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

]

obj.getArray=(req, res, next)=>{
    res.send(tvShows);
}
/*
obj.postArray = (req, res, next)=>{
    array.push(req.body.number);
        res.send(array);
    }*/

obj.postArray = (req, res, next)=>{
    tvShows.push(req.body);
        res.send(tvShows);
    }

obj.getById = (req, res, next)=>{
    let tvFind = tvShows.find((tvShow)=> tvShow.Id == Number.parseInt(req.params.id));
    if(!tvFind){
        return res.send({error: 'Show:' + req.params.id +', no encontrado'});
    }
    res.send(tvFind);
}

obj.deleteTvShow = (req, res, next)=>{
    let indexTvShow = tvShows.findIndex((tvShow)=> tvShow.Id==Number.parseInt(req.params.id));
    if(indexTvShow<0){
        return res.send({error: 'Id:' + req.params.id +', no encontrado'});
    }

    //let result = tvShows.splice(indexTvShow,1);

    res.send(tvShows.splice(indexTvShow,1));
}

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