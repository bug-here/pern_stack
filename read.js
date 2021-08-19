const pool=require('./db');

exports.getAllEmployees=async(req,res)=>{
    try {
        const employeeData=await pool.query("SELECT * FROM EMPLOYEE");
        res.json(employeeData.rows);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getAllTeams=async(req,res)=>{
    try {
        const departmentData=await pool.query("SELECT * FROM TEAM");
        res.json(departmentData.rows);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getEmployee=async(req,res)=>{
    try {
        const{id}=req.params;
        let data={};
        const employeeData=await pool.query("SELECT * FROM EMPLOYEE WHERE id =$1",[id]);
        const department = await pool.query("SELECT * FROM TEAM WHERE ID IN (SELECT team_id  from  EMPLOYEE_ASSIGNMENT where EMPLOYEE_ID=$1)",[id]);
        data=employeeData.rows[0];
        if(data){
            data.department=department.rows
        }else{
            data={
                info:"No employee data found for this id"
            }
        }
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getDepartment=async(req,res)=>{
    try {
        const{id}=req.params;
        let data={};
        const departmentData=await pool.query("SELECT * FROM TEAM WHERE id =$1",[id]);
        const employees = await pool.query("SELECT * FROM EMPLOYEE WHERE ID IN (SELECT team_id  from  EMPLOYEE_ASSIGNMENT where TEAM_ID=$1)",[id]);
        data=departmentData.rows[0];
        if(data){
            data.employees=employees.rows
        }else{
            data={
                info:"No team data found for this id"
            }
        }
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}