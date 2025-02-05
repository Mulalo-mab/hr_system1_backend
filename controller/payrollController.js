import {getPayroll, getSinglePayroll,insertPayroll,deletePayroll,updatePayroll} from '../model/payrollDb.js'


const getPayrollCon = async (req,res)=>{
    res.json({employees: await getPayroll()})
}

const getSinglePayrollCon =  async (req,res) => {
    res.json({employees: await getSinglePayroll(req.params.employee_id)})
}

const postPayrollCon = async (req,res) => {
    let {employee_id, hours_worked, leave_deductions, final_salary} = req.body
    console.log(req.body)
    res.json({payroll: await insertPayroll(employee_id, hours_worked, leave_deductions, final_salary)})
    }

    const deletePayrollCon = async (req,res) => {
        res.json({payroll: await deletePayroll(req.params.employee_id)})
    }

    const patchPayrollCon = async (req,res) => {
        let {final_salary, employee_id} = req.body
        console.log(req.body)
        res.json({payroll: await updatePayroll(final_salary, employee_id)})
    }

    export {getPayrollCon,getSinglePayrollCon,postPayrollCon,deletePayrollCon,patchPayrollCon}
