const pool=require('./db');

exports.createEmployee= async(req,res)=>{
    try {
        const {name,age,id}=req.body;
        const employeeData= await pool.query("INSERT INTO EMPLOYEE(name,age,id) VALUES($1,$2,$3) returning *",
                    [name,age,id])
        res.json(employeeData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createDepartment=async(req,res)=>{
    try {
        const {dept_name,id}=req.body;
        const DepartmentData= await pool.query("INSERT INTO TEAM(dept_name,id) VALUES($1,$2,$3) returning *",
                    [dept_name,id])
        res.json(departmentData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createEmployeeAssignment= async(req,res)=>{
    try {
        const {employee_id,team_id}=req.body;
        const employeeAssignmentData= await pool.query("INSERT INTO EMPLOYEE_ASSIGNMENT(employee_id,team_id) VALUES($1,$2) returning *",
                    [employee_id,team_id])
        res.json(employeeAssignmentData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}