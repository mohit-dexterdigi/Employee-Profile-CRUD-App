const Employee = require('../models/employee.model');

exports.createEmployee = async (employeeData) => {
  const employee = new Employee(employeeData);
  return await employee.save();
};
