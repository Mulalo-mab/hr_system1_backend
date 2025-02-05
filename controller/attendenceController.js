import {getAttendence,getSingleAttendence,insertAttendence,deleteAttendence,updateAttendence} from '../model/attendenceDb.js'

const getAttendenceCon = async (req,res) => {
    res.json({attendence: await getAttendence()})
}

const getSingleAttendenceCon = async (req,res)=> {
    res.json({attendence: await getSingleAttendence(req.params.employment_id)})
}

const postAttendenceCon = async (req,res)=>{
    let {employment_id, date, status} = req.body
    console.log(req.body)
    res.json({attendence: await insertAttendence(employment_id, date, status)})
}

const deleteAttendenceCon = async (req,res) =>{
    res.json({attendence: await deleteAttendence(req.params.employment_id)})
}


const patchAttendenceCon = async (req,res) => {
    let {status, employment_id} = req.body
    console.log(req.body)
    res.json({attendence: await updateAttendence(status, employment_id)})
}

export {getAttendenceCon, getSingleAttendenceCon, postAttendenceCon, deleteAttendenceCon, patchAttendenceCon}