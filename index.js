import employeesRouter from './routes/employeesRouter.js'
import payrollRouter from './routes/payrollRouter.js'
import attendenceRouter from  './routes/attendenceRouter.js'
import leaveRouter from './routes/leaveRouter.js'
import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'

config()

const app = express();
app.use(cors())
app.use(express.json());


app.use('/employee',employeesRouter)
app.use('/payroll',payrollRouter)
app.use('/attendence', attendenceRouter)
app.use('/leave', leaveRouter)

const PORT = process.env.PORT || 4000


app.listen(PORT, ()=>{
    console.log('http://localhost:'+PORT)
})