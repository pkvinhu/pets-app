const express = require('express');
const app = express();
const {db, seed, Owner, Pet} = require('./db/index')
const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(process.cwd(), './public')));


app.get('/owner/', function (req, res, next )  {

	// if(req.params.ownerid===undefined){
	  Owner.findAll()
	  .then((owners)=>{res.send(owners)});
	// }
	// else {
	//   Owner.findById(req.params.ownerid)
	//   .then((owner)=>{res.send(owner)})
	// }
});

app.get('/pets', function(req, res, next){
  
  // if(req.params.id===undefined) {
    Pet.findAll()
    .then((pets)=>{res.send(pets)})
 //  }
 //  else{
	// Pet.findById(req.params.id, {
	//   include: [ Owner ]
	// })
	// .then((pet)=>{res.send(pet)})
 //  }
});

app.listen(port, ()=>{
	console.log(`I am listening on port, ${port}`);
});

const init = async() => {
	await db.sync({force:true})
	await seed()
}

init ()

module.exports = app;
