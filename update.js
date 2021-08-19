const pool=require('./db');

exports.updateEmployee=async (req,res)=>{
    try {
        const {id}=req.params;
        const {name,age,id}=req.body;
        const employeeData=await pool.query("UPDATE EMPLOYEE SET name=$1, age=$2, where id= $3 returning *",
            [name,age,id])
        res.json(employeeData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updateDepartment=async (req,res)=>{
    try {
        const {id}=req.params;
        const {name,id}=req.body;
        const updateData=await pool.query("UPDATE DEPARTMENT SET name=$1 where id= $2 returning *",
            [name,id])
        res.json(departmentData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}