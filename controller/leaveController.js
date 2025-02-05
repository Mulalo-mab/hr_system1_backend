import {getLeaves, getSingleLeave, insertLeave, deleteLeave, updateLeave} from '../model/leaveDb.js'


const getLeavesCon = async (req,res)=>{
    res.json({leave: await getLeaves()})
}


const getSingleLeaveCon = async (req,res) => {
    res.json({leave: await getSingleLeave(req.params.employee_id)})
}

const postLeavesCon = async (req,res)=>{
    let {employee_id, date, reason, status} = req.body
    console.log(req.body)
    res.json({leave: await insertLeave(employee_id, date, reason, status)})
}

const deleteLeavesCon =  async (req,res) =>{
    res.json({leave: await deleteLeave(req.params.employee_id)})
}

const patchLeavesCon =  async (req,res) => {
    let {date, employee_id} = req.body
    console.log(req.body)
    res.json({leave: await updateLeave(date,employee_id)})
}

export {getLeavesCon,getSingleLeaveCon,postLeavesCon, deleteLeavesCon, patchLeavesCon}