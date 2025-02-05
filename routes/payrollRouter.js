import express from 'express'
import {getPayrollCon,getSinglePayrollCon,postPayrollCon,deletePayrollCon,patchPayrollCon} from '../controller/payrollController.js'


const router = express.Router()




router.get('/', getPayrollCon)


router.get('/:employee_id', getSinglePayrollCon)


router.post('/', postPayrollCon)


router.delete('/:employee_id', deletePayrollCon)

    
router.patch('/:employee_id', patchPayrollCon)

    export default router;