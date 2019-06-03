const express = require('express');
const pool =require('../controller/rides');
var bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get all rides
app.get('/',pool.getallrides);
// get single rides
app.get('/:id',pool.singleride);
// offer ride
app.post('/offer',pool.offeride);

//offer ride
// //edit ride
// app.put('/:id', function (req, res) {
//   let found = data.find(function (ride) {
//     return ride.id === parseInt(req.params.id);
//   });

//   if (found) {
//     let updated = {
//       id: found.id,
//       from: req.body.from,
//       to:req.body.to,
//       cost: req.body.cost,
//     };

//     let targetIndex = data.indexOf(found);

//     data.splice(targetIndex, 1, updated);

//     res.sendStatus(204);
//   } else {
//     res.sendStatus(404);
//   }
// });
// //delete rides
// app.delete('/:id', function (req, res) {
//   let found = data.find(function (ride) {
//     return ride.id === parseInt(req.params.id);
//   });

//   if (found) {
//     let targetIndex = data.indexOf(found);

//     data.splice(targetIndex, 1);
//   }

//   res.sendStatus(204);
// });

// //make request to join ride
// app.post('/offer/ride',(req,res)=>{

// })
// app.post('/v1/join/:id',(req,res)=>{

// })

module.exports = app;