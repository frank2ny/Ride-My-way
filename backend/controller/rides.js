const pool = require('../model/db');
const getallrides=(req,res)=>{
        pool.query("SELECT * FROM rides",(err,result)=>{
            if(err){throw err}
            res.status(200).json(result.rows);
         })
    }
const singleride=(req,res)=>{
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM rides WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      
      res.status(200).json(results.rows)
    })

}

const offeride=(req,res)=>{
     const {driver,vehicle,fromlocation,tolocation,cost,createdon=new Date()} = req.body

  pool.query('INSERT INTO rides (driver, vehicle,fromlocation,tolocation,cost,createdon) VALUES($1, $2,$3,$4,$5,$6)',[driver,vehicle,fromlocation,tolocation,cost,createdon], (error, result) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

const acceptride=(req,res)=>{

}
module.exports = {getallrides,singleride,offeride,acceptride};