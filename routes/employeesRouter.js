import express from 'express'
import {getEmployeesCon,getSingleEmployeesCon,postEmployeesCon,patchEmployeesCon,deleteEmployeesCon} from  '../controller/employeesController.js'
const router = express.Router()



router.get('/', getEmployeesCon)


router.get('/:employee_id', getSingleEmployeesCon)


router.post('/', postEmployeesCon)


router.patch('/:employee_id', patchEmployeesCon);


router.delete('/:employee_id', deleteEmployeesCon)

export default router