import {pool} from '../config/config.js'



// get all the payroll
const getPayroll = async () => {
    let [data] = await pool.query('SELECT * FROM pay_roll')
    return data 
}

// get single payroll
const getSinglePayroll = async (employee_id) => {
    let [data] = await pool.query('SELECT * FROM pay_roll WHERE employee_id = ?', [employee_id])
    return data
}

const insertPayroll = async (employee_id, hours_worked, leave_deductions, final_salary) => {
    await pool.query('INSERT INTO `hr_systems1`.`pay_roll` (`employee_id`, `hours_worked`, `leave_deductions`, `final_salary`) VALUES (?, ?, ?, ?)',
         [employee_id, hours_worked, leave_deductions, final_salary])
         return await getPayroll()
}


const deletePayroll = async (employee_id) => {
    await pool.query('DELETE FROM `hr_systems1`.`pay_roll` WHERE employee_id = ?', [employee_id])
    return await getPayroll()
}


const updatePayroll = async (final_salary, employee_id) => {
    await pool.query('UPDATE `hr_systems1`.`pay_roll` SET `final_salary` = ? WHERE (`employee_id` = ?)', [final_salary, employee_id])
    return await getPayroll()
}


export {getPayroll, getSinglePayroll,insertPayroll,deletePayroll,updatePayroll}