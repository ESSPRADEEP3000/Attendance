import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from './userProvider';

function Signup() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [cnfpasswd, setCnfPass] = useState('');
  const [formdata, setFormdata] = useState({
    name: '',
    lname: '',
    email: '',
    phno: '',
    rollno: '',
    course: '',
    passwd: '',
  });

  function clear() {
    setFormdata({
      name: '',
      lname: '',
      email: '',
      phno: '',
      rollno: '',
      course: '',
      passwd: '',
    });
    setCnfPass('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:7000/adduser', formdata);
      alert(result.data.msg);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
    clear();
  };

  return (
    <div className="container mx-auto p-6 my-5">
      {user ? (
        <div className="text-center">
          <h1 className="text-xl font-bold">You have already logged in...</h1>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center">
          {/* <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="http://localhost:7000/images/login.png"
              className="w-full h-auto"
              alt="Phone image"
            />
          </div> */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formdata.name}
                    autoComplete="true"
                    onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lname" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="lname"
                    name="lname"
                    type="text"
                    value={formdata.lname}
                    autoComplete="true"
                    onChange={(e) => setFormdata({ ...formdata, lname: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formdata.email}
                    autoComplete="true"
                    onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phno" className="block text-sm font-medium text-gray-700">
                    Phone No
                  </label>
                  <input
                    id="phno"
                    name="phno"
                    type="text"
                    value={formdata.phno}
                    autoComplete="true"
                    onChange={(e) => setFormdata({ ...formdata, phno: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="rollno" className="block text-sm font-medium text-gray-700">
                    Roll No
                  </label>
                  <input
                    id="rollno"
                    name="rollno"
                    type="text"
                    value={formdata.rollno}
                    autoComplete="true"
                    onChange={(e) => setFormdata({ ...formdata, rollno: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                    Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formdata.course}
                    onChange={(e) => setFormdata({ ...formdata, course: e.target.value })}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">----------------------Select course-------------</option>
                    <option value="FSD">FSD</option>
                    <option value="AWS">AWS</option>
                    <option value="Flutter">Flutter</option>
                    <option value="Google">Google</option>
                    <option value="Azure">Azure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="passwd" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="passwd"
                    name="passwd"
                    type="password"
                    value={formdata.passwd}
                    onChange={(e) => setFormdata({ ...formdata, passwd: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="conpasswd" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    id="conpasswd"
                    name="conpasswd"
                    type="password"
                    value={cnfpasswd}
                    onChange={(e) => setCnfPass(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {formdata.passwd === cnfpasswd && cnfpasswd !== '' ? (
                    <div className="text-green-500 mt-2">Password matched</div>
                  ) : cnfpasswd === '' ? (
                    <></>
                  ) : (
                    <div className="text-red-500 mt-2">Password not matched</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
