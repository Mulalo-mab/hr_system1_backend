import express from 'express'
import {getLeavesCon,getSingleLeaveCon,postLeavesCon, deleteLeavesCon, patchLeavesCon} from '../controller/leaveController.js'



const router = express.Router()


router.get('/', getLeavesCon)

router.get('/:employee_id', getSingleLeaveCon)


router.post('/', postLeavesCon)


router.delete('/:employee_id', deleteLeavesCon)

router.patch('/:employee_id', patchLeavesCon)

export default router;