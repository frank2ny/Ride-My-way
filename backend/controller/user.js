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
    const modify=(request, response) => {
      const id = parseInt(request.params.id)
      const { name, email,password,modified_date=new Date() } = request.body
    
      pool.query(
        'UPDATE users SET name = $1, email = $2 ,password=$3 ,modified_date=$4 WHERE id = $5',
        [name, email,password,modified_date, id],
        (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`User modified with ID: ${id}`)
        }
      )
    }
      module.exports ={register,allusers,modify};