import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import skillsData from '../data/skills.json';
import departmentsData from '../data/departments.json';
import gendersData from '../data/genders.json';

const EmployeeProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    skills: '',
    department: '',
    address: '',
    isActive: false,
    resume: null,
    profileImage: null
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'phone', 'dob', 'gender', 'skills', 'department', 'resume', 'profileImage', 'address'];
    for (let field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Please fill in the ${field}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/api/employees', data)
      Swal.fire('Success!', res.data.message, 'success');
      setSubmitted(true);
    } catch (err) {
      Swal.fire('Error', err.response?.data?.message || 'Something went wrong', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-green-100 text-center rounded-xl">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Profile Created!</h2>
        <p className="text-green-700">Thank you for submitting the employee profile.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-800">Employee Profile Form</h2>
      <ToastContainer />
      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={formData.name}
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500d"
          onChange={handleChange}
          value={formData.email}
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Phone Number
        </label>
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500d"
          onChange={handleChange}
          value={formData.phone}
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500d"
          onChange={handleChange}
          value={formData.dob}
        />
      </div>


      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Gender
        </label>
        <div className="flex gap-4">
          {gendersData.map(g => (
            <label key={g} className="capitalize flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value={g}
                checked={formData.gender === g} 
                onChange={handleChange}
                className="accent-blue-500"
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Skills
        </label>
        <select
          name="skills"
          value={formData.skills} 
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Skill</option>
          {skillsData.map(skill => (
            <option key={skill} value={skill}>{skill}</option>
          ))}
        </select>
      </div>


      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Department
        </label>
        <select
          name="department"
          value={formData.department} 
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Department</option>
          {departmentsData.map(dep => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Resume (PDF)
        </label>
        <input
          type="file"
          name="resume"
          accept=".pdf"
          onChange={handleChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Profile Image
        </label>
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          onChange={handleChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        />
      </div>

      <div className="flex items-center gap-4">
        <label className="text-gray-700 font-medium">
          Is Active
        </label>
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive} 
          onChange={handleChange}
          className="w-5 h-5 accent-blue-600"
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Address
        </label>
        <textarea
          name="address"
          rows="4"
          value={formData.address} 
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default EmployeeProfileForm;
