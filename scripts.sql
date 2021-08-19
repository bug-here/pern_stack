create table employee(
	id integer NOT NULL DEFAULT  nextval ('employee_seq'),
	name varchar(100)NOT NULL,
	age varchar(100)NOT NULL,
	constraint emp_cons PRIMARY KEY(id)
	);
	create table department(
	dept_id integer NOT NULL DEFAULT nextval('department_seq'),
	dept_name varchar(100)NOT NULL,
	constraint dept_cons PRIMARY KEY(id)
	);
	
	create table emp_table(
		id integer NOT NULL DEFAULT nextval('emp_table_seq'),
		name varchar(100)NOT NULL,
		dept_name varchar(100)NOT NULL
constraint fk_emp_table FOREIGN KEY(employee_id)REFERENCES employee(id),		
		constraint fk_department FOREIGN KEY(department_id)REFERENCES department(id)