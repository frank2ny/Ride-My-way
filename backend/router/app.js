const express = require('express');
// const router = express.Router();
const app = express();
const data = [
  {id:1,driver: "Juma" ,vehicle:"lancer",from: "mwenge", to:"AIR Port", cost:14000, createdOn: new Date()},
  {id:2,driver: "henry" ,vehicle:"subaru",from: "mbagala", to:"AIR Port", cost:14000, createdOn: new Date()},
  {id:3,driver: "Jackson" ,vehicle:"collora",from: "sinza", to:"AIR Port", cost:14000, createdOn: new Date()},
  {id:4,driver: "Adam" ,vehicle:"collora",from: "mbagala", to:"AIR Port", cost:14000, createdOn: new Date()}
    ];
//get all rides
app.get('/', function (req, res) {
    res.status(200).json(data);
    
});
//get single rides
app.get('/:id', function (req, res) {
    let found = data.find(function (ride) {
        return ride.id === parseInt(req.params.id);
    });

    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

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