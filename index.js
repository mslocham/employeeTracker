const inquirer = require('inquirer')
const db = require('./db/connection');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'list',
        name: 'chosenOption',
        message: 'What would you like to do?',
        choices: [ 'view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const chosenOption = answers.chosenOption
    if(chosenOption === 'view all departments') {
      const sql = `SELECT * FROM department`;
      const showResult = db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });
        console.log(showResult);
    } else if( chosenOption === 'view all roles'){
      console.log('Super nice!');
    } else if(chosenOption === 'add a department') {
        inquirer.prompt([
                {
                        type: 'input', 
                        message: 'Please input the name of the department',
                        name: 'departmentName',
                }
        ]).then(answer => { 
                const dept = answer.departmentName;
                console.log(dept);
        })
    }


  })



/* GIVEN a command-line application that accepts user input
 XXXXXXX WHEN I start the application

     presented with the following options:
        - view all departments,
        - view all roles, 
        - view all employees,
        - add a department,
        - add a role,
        - add an employee,
        - and update an employee role


WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee???s first name, last name, role, and manager and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database



*/
