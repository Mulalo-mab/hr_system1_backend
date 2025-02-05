import {pool} from '../config/config.js'


const getLeaves = async () => {
    let [data] = await pool.query('SELECT * FROM leave_requests')
    return data
}

const getSingleLeave = async (employee_id) => {
    let [data] = await pool.query('SELECT * FROM leave_requests WHERE employee_id = ?', [employee_id])
    return data
}


const insertLeave = async (employee_id, date, reason, status) =>{
    await pool.query('INSERT INTO `hr_systems1`.`leave_requests` (`employee_id`, `date`, `reason`, `status`) VALUES (?, ?, ?, ?)', 
        [employee_id, date, reason, status])
        return await getLeaves();
}

const deleteLeave = async (employee_id) =>{
    await pool.query('DELETE FROM leave_requests WHERE employee_id = ?', [employee_id])
    return await getLeaves();
}


const updateLeave = async (date,employee_id) => {
    await pool.query('UPDATE leave_requests SET date = ? WHERE employee_id = ?', [date, employee_id])
    return await getLeaves();
}

export {getLeaves, getSingleLeave, insertLeave, deleteLeave, updateLeave}