import {pool} from '../config/config.js'



//Employees
// Get all the employees
const getEmployees = async () => {
    let [data] = await pool.query('SELECT * FROM employees')
    return data 
}

// Get single employee
const getSingleEmployees = async (employee_id) => {
    let [data] = await pool.query('SELECT * FROM employees WHERE employee_id = ?', [employee_id])
    return data
}


// post 
const insertEmployees = async (employee_id, name, position, department, salary, employment_history, contact) =>{
    await pool.query('INSERT INTO `hr_systems1`.`employees` (`employee_id`, `name`, `position`, `department`,  `salary`,`employement_history`, `contact`) VALUES (?, ?, ?, ?, ?, ?, ?)', 
        [employee_id, name, position, department, salary, employment_history, contact])
        return await getEmployees()
}


// Function to Update Contact
const updateEmployees = async (contact, employee_id) => {
    await pool.query(
        'UPDATE `hr_systems1`.`employees` SET contact = ? WHERE employee_id = ?', 
        [contact, employee_id]);
    return await getEmployees();
};


const deleteEmployees = async (employee_id) => {
    await pool.query('DELETE FROM `hr_systems1`.`employees` WHERE (`employee_id` = ?)', [employee_id])
    return await getEmployees();
}


export {getEmployees,getSingleEmployees,insertEmployees,updateEmployees,deleteEmployees}