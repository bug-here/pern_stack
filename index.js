const express=require('express');
const cors=require('cors')
const app=express();
const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');
const {createEmployee,createDepartment,createEmployeeAssignment}=require('./create')
const {getAllEmployees,getAllTeams,getEmployee,getTeam}=require('./read')
const {updateEmployee,updateTeam}=require('./update')
const {deleteEmployee,deleteTeam,deleteEmployeeAssignment, deleteDepartment}=require('./delete')

const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Employee Management API',
            version:'1.0.0',
            description:'Employe Api for employee management',
            contact:{
                name:'priya',
                url:'https://whizpath.com',
                email:'priya@whizpath.com'
            },
            servers:["http://localhost:3000"]
        }
    },
    apis:["index.js"]
}
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));


const {}=require('./update')
var corsOptions={
    origin:'http://example.com',
    optionSuccessStatus:200
}

app.use(express.json());
/**
 * @swagger
 * definitions:
 *  Employee:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the employee
 *     example: 'priya'
 *     age:
 *   
 *
 *     type: string
 *     description: age of the employee
 *     example: '20'
 *    id:
 *     type: string
 *     description: id of the employee
 *     example: '123'
 *    
 *  Department:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the department
 *     example: 'javscript'
 *    eid:
 *     type: string
 *     description: id of the department
 *     example: '123'
 
 *  Employee_Assignment:
 *   type: object
 *   properties:
 *    employee_id:
 *     type: integer
 *     description: id of the employee
 *     example: 2
 *    department_id:
 *     type: integer
 *     description: id of the department
 *     example: 2
 */


 /**
  * @swagger
  * /employee:
  *  post:
  *   summary: create employee
  *   description: create employee for the organisation
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Employee'
  *   responses:
  *    200:
  *     description: employee created succesfully
  *    500:
  *     description: failure in creating employee
  */
app.post("/employee", createEmployee);
/**
 * @swagger
 * /team:
 *  post:
 *   summary: create department
 *   description: create department
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: body of department
 *      schema:
 *       $ref: '#/definitions/Department'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Department'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description : error
 */
app.post("/team", createDepartment);
/**
 * @swagger
 * /employeeassignment:
 *  post:
 *   summary: create employee assignment
 *   description: create employee assignment
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: employee assignment of the team
 *      schema:
 *       $ref: '#/definitions/Employee_Assignment'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Employee_Assignment'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.post("/employeeassignment",createEmployeeAssignment);

/**
 * @swagger
 * /employees:
 *  get:
 *   summary: get all employees
 *   description: get all employees
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/employees',cors(), getAllEmployees)
/**
 * @swagger
 * /department:
 *  get:
 *   summary: get all department
 *   description: get all department
 *   responses:
 *    200:
 *     description: success
 */
app.get('/teams',cors(), getAllDepartment)
/**
 * @swagger
 * /employee/{employee_id}:
 *  get:
 *   summary: get employee
 *   description: get employee
 *   parameters:
 *    - in: path
 *      name: employee_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.get('/employee/:id',cors(), getEmployee)
/**
 * @swagger
 * /team/{dept_id}:
 *  get:
 *   summary: create department
 *   description: create department
 *   parameters:
 *    - in: path
 *      name: team_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the department
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.get('/team/:id',cors(), getDepartment)

/**
 * @swagger
 * /employee/{id}:
 *  put:
 *   summary: update employee
 *   description: update employee
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 2
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/Employee'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Employee'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Team'
 */
app.put("/employee/:id",cors(corsOptions),updateEmployee)


/**
 * @swagger
 * /department/{id}:
 *  put:
 *   summary: update department
 *   description: update department
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the department
 *      example: 2
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/department'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/department'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Team'
 */
app.put("/team/:id",cors(corsOptions),updateDepartment)

/**
 * @swagger
 * /employee/{employee_id}:
 *  delete:
 *   summary: delete employee
 *   description: delete employee
 *   parameters:
 *    - in: path
 *      name: employee_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/employee/:id",deleteEmployee)


/**
 * @swagger
 * /department/{dept_id}:
 *  delete:
 *   summary: delete department
 *   description: delete department
 *   parameters:
 *    - in: path
 *      name: dept_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the department
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/department/:id",deleteDepartment)
/**
 * @swagger
 * /employeeassign/{employee_id}/{team_id}:
 *  delete:
 *   summary: delete employee assignment
 *   description: delete employee assignment
 *   parameters:
 *    - in: path
 *      name: employee_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 12
 *    - in: path
 *      name: team_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the department
 *      example: 12
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/employeeassign/:employee_id/:team_id",deleteEmployeeAssignment)


app.listen(3000,()=>{
    console.log("server listening in port 3000");
})