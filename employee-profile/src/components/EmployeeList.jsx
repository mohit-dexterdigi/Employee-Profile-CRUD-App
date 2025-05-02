import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/employees')
      .then(res => {
        console.log('Employee Data : res.data');
        setEmployees(res.data);
      })
      .catch(err => {
        console.error('Error fetching employees:', err);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Employee Profiles</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {employees.map((emp) => (
          <div key={emp._id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={`http://localhost:5000/uploads/${emp.profileImage}`}
                alt={emp.name}
                className="w-16 h-16 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{emp.name}</h3>
                <p className="text-sm text-gray-600">{emp.email}</p>
              </div>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p><span className="font-medium">Department:</span> {emp.department}</p>
              <p><span className="font-medium">Skills:</span> {emp.skills}</p>
              <p>
                <span className="font-medium">Status:</span>
                <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full 
                  ${emp.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {emp.isActive ? 'Active' : 'Inactive'}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;