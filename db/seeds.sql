INSERT INTO department (name)
VALUES
('Engineering'),
('Sales'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 70000, 2),
('Salesperson', 75000, 2),
('Accountant', 80000, 3),
('Lawyer', 85000, 4),
('Legal Team Lead', 95000, 4),
('Software engineer', 95000, 1),
('Lead Engineer', 100000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, 3),
('Mike', 'Chan', 2, 1),
('Ashley', 'Rodriguez', 7, NULL),
('Kevin', 'Tupik', 6, 3),
('Malia', 'Brown', 3, NULL),
('Sarah', 'Lourd', 5, NULL),
('Ton', 'Allen', 4, 6),
('Tanner', 'Galal', 6, 4);

