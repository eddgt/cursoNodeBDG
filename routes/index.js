var express = require('express');
var router = express.Router();
//const tvController = require('../controllers/tvController');
const controllers = require('../controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Curso BDG !' });
});

var array=[1,2,3];

router.get('/test/', controllers.tvController.getArray);

/*
router.get('/test/:id', function(req, res, next) {
array[req.param.id]=req.body.number;
  res.send({array:array[req.params.id]});
});*/

router.post('/test/',controllers.tvController.postArray);

router.put('/test/:id',controllers.tvController.updateTvShow);

router.get('/hm/',controllers.holaMundoController.hola);

router.get('/test/:id',controllers.tvController.getById);

router.delete('/test/:id',controllers.tvController.deleteTvShow);


/*router.post('/test', function(req, res, next) {
console.log(req.body);
array.push(req.body.number);
  res.send({array: array});
});*/
/*
router.put('/test/:id', function(req, res, next) {
array[req.param.id]=req.body.number;
  res.send({array:array[req.params.id]});
});
*/
module.exports = router;
