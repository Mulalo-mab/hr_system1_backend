import mysql from 'mysql2/promise'
import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'

config()

const app = express();
app.use(cors())
app.use(express.json());


const PORT = process.env.PORT || 4000















// PATCH - Update Contact Only
// PATCH - Update Contact Only




  
// Delete




// PAYROLL








//Post payroll




// Delete payroll




// Patch payroll






// ATTENDENCE 
// get all attendence



// get single attendence


 

// post attendence



// delete 



// patch 







// leave_requests
// get all leave requests

app.get('/leave', async (req,res)=>{
    res.json({leave: await getLeaves()})
})

const getLeaves = async () => {
    let [data] = await pool.query('SELECT * FROM leave_requests')
    return data
}

// get single leave request
app.get('/leave/:employee_id', async (req,res) => {
    res.json({leave: await getSingleLeave(req.params.employee_id)})
})

const getSingleLeave = async (employee_id) => {
    let [data] = await pool.query('SELECT * FROM leave_requests WHERE employee_id = ?', [employee_id])
    return data
}

// post 
app.post('/leave', async (req,res)=>{
    let {employee_id, date, reason, status} = req.body
    console.log(req.body)
    res.json({leave: await insertLeave(employee_id, date, reason, status)})
})

const insertLeave = async (employee_id, date, reason, status) =>{
    await pool.query('INSERT INTO `hr_systems1`.`leave_requests` (`employee_id`, `date`, `reason`, `status`) VALUES (?, ?, ?, ?)', 
        [employee_id, date, reason, status])
        return await getLeaves();
}

// delete 
app.delete('/leave/:employee_id', async (req,res) =>{
    res.json({leave: await deleteLeave(req.params.employee_id)})
})

const deleteLeave = async (employee_id) =>{
    await pool.query('DELETE FROM leave_requests WHERE employee_id = ?', [employee_id])
    return await getLeaves();
}

// patch 


app.patch('/leave/:employee_id', async (req,res) => {
    let {date, employee_id} = req.body
    console.log(req.body)
    res.json({leave: await updateLeave(date,employee_id)})
})

const updateLeave = async (date,employee_id) => {
    await pool.query('UPDATE leave_requests SET date = ? WHERE employee_id = ?', [date, employee_id])
    return await getLeaves();
}


app.listen(PORT, ()=>{
    console.log('http://localhost:'+PORT)
})