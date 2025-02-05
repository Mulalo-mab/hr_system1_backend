import express from 'express'
import {getAttendenceCon, getSingleAttendenceCon, postAttendenceCon, deleteAttendenceCon, patchAttendenceCon} from '../controller/attendenceController.js'


const router = express.Router()

router.get('/', getAttendenceCon)


router.get('/:employment_id', getSingleAttendenceCon)

router.post('/', postAttendenceCon)

router.delete('/:employment_id', deleteAttendenceCon)

router.patch('/:employment_id', patchAttendenceCon)

export default router;