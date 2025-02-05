import {pool} from '../config/config.js'

const getAttendence = async () => {
    let [data] = await pool.query('SELECT * FROM attendance')
    return data;
}


const getSingleAttendence = async (employment_id) =>{
    let [data] = await pool.query('SELECT * FROM attendance WHERE employment_id = ?', [employment_id])
    return data
}

const insertAttendence = async (employment_id, date, status) => {
    await pool.query('INSERT INTO `hr_systems1`.`attendance` (`employment_id`, `date`, `status`) VALUES (?, ?, ?)', 
        [employment_id, date, status])
        return await getAttendence();
}

const deleteAttendence = async (employment_id) =>{
    await pool.query('DELETE FROM `hr_systems1`.`attendance` WHERE employment_id = ?', [employment_id])
    return await getAttendence()
}

const updateAttendence = async (status, employment_id) => {
    await pool.query('UPDATE `hr_systems1`.`attendance` SET `status` = ? WHERE (`employment_id` = ?)', [status, employment_id])
    return await  getAttendence();
}

export {getAttendence,getSingleAttendence,insertAttendence,deleteAttendence,updateAttendence}