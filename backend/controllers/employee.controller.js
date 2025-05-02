const EmployeeService = require('../services/employee.service');
const Employee = require('../models/employee.model');

exports.createEmployee = async (req, res) => {
  try {
    const data = req.body;
    const files = req.files;

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'dob', 'gender', 'skills', 'department', 'address'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return res.status(400).json({ success: false, message: `Missing field: ${field}` });
      }
    }

    const employeeData = {
      ...data,
      isActive: data.isActive === 'true',
      resume: files?.resume?.[0]?.path,
      profileImage: files?.profileImage?.[0]?.path,
    };

    await EmployeeService.createEmployee(employeeData);
    res.status(201).json({ success: true, message: "Profile created successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};