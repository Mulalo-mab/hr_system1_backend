import {getEmployees,getSingleEmployees,insertEmployees,updateEmployees,deleteEmployees} from '../model/employeesDb.js'


const getEmployeesCon = async (req,res)=>{
    res.json({employees: await getEmployees()})
}


const getSingleEmployeesCon = async (req,res) => {
    res.json({employees: await getSingleEmployees(req.params.employee_id)})
}


const postEmployeesCon = async (req,res) => {
    let {employee_id, name, position, department, salary, employment_history, contact} = req.body
    console.log(req.body);
    res.json({
        employees: await insertEmployees(employee_id, name, position, department, salary, employment_history, contact)
    })
}

const patchEmployeesCon = async (req, res) => {
    const { contact } = req.body;                 // Extracting contact from the request body
    const { employee_id } = req.params;           // Getting employee_id from URL params
    console.log(req.body);                        // Debug log
    if (!contact) {
        return res.status(400).json({ error: 'Contact information is required.' });
    }
    res.json({ employees: await updateEmployees(contact, employee_id) });
}


const deleteEmployeesCon =  async (req,res) => {
    res.json({employees: await deleteEmployees(req.params.employee_id)})
}

export {getEmployeesCon,getSingleEmployeesCon,postEmployeesCon,patchEmployeesCon,deleteEmployeesCon}