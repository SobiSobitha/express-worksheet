const express = require('express');
const router = express.Router();


const employees = [
  { id: 1, name: 'John', course: 'Technology', roll_no: '001' },
  { id: 2, name: 'Kamal', course: 'Engineering', roll_no: '002' },
  { id: 3, name: 'Sarah', course: 'Maths', roll_no: '003'},
];


router.use(express.urlencoded({ extended: true }));
router.use(express.json());


router.get('/', (req, res) => {
    res.json(employees);
    });
 
router.get('/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) return res.status(404).send('Employee not found');
    res.json(employee);
    });
  
router.post('/', (req, res) => {
    const { name, course, roll_no } = req.body;
    const newEmployee = {
    id: employees.length + 1,
    name,
    course,
    roll_no
    };
    employees.push(newEmployee);
    res.status(201).send('Employee added successfully');
    });

router.put('/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) return res.status(404).send('Employee not found');
    const { name, course, roll_no } = req.body;
    employee.name = name;
    employee.course = course;
    employee.roll_no = roll_no;
    res.status(201).send('Employee updated successfully');
    });
   
router.patch('/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) return res.status(404).send('Employee not found');
    const { name, course, roll_no } = req.body;
    if (name) employee.name = name;
    if (course) employee.course = course;
    if (roll_no) employee.roll_no = roll_no;
    res.status(201).send('Employee updated successfully');
    });
   
router.delete('/:id', (req, res) => {
    const employeeIndex = employees.findIndex(emp => emp.id === parseInt(req.params.id));
    if (employeeIndex === -1) return res.status(404).send('Employee not found');
    employees.splice(employeeIndex, 1);
    res.status(204).send();
    });
module.exports = router;
