const pool = require('../model/db');

    const register = (request, response) => {
        
        const { name, email , password,created_date=new Date(),modified_date=new Date() } = request.body
      
        pool.query('INSERT INTO users(name,email,password,created_date,modified_date) VALUES ($1, $2, $3,$4,$5)', [name,email, password,created_date,modified_date], (error, results) => {
            if (error) {
                throw error
              }
          response.status(201).send(`User added with ID: ${results.insertId}`)
        })
      }
      
    const allusers=(req,res)=>{
        pool.query("SELECT * FROM users",(err,result)=>{
            if(err){throw err}
            res.status(200).json(result.rows);
         })
    }
      module.exports ={register,allusers};