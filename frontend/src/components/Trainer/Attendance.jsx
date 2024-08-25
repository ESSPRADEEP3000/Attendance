import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useUser } from '../../Auth/userProvider';

function Attendance() {
  const { tech } = useParams();
  const { details } = useUser();
  const [attendanceValue, setVal] = useState(null);
  const [msg, setMsg] = useState('');
  const [formdata, setFormdata] = useState({
    rollno: '',
    technology: tech,
    attendence: false
  });

  const check = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, attendence: true });
    console.log(formdata);

    axios.put('http://localhost:7000/check-attendence', formdata)
      .then((result) => {
        setVal(result.data.value);
        setMsg(result.data.msg);
        console.log(result.data);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-lg p-8">
        {/* Left Side: Image */}
        <div className="flex-1 mb-6 md:mb-0 md:mr-8">
          <img 
            src="http://localhost:7000/images/login.png" 
            className="w-full h-auto rounded-lg shadow-md" 
            alt="Phone illustration" 
          />
        </div>

        {/* Right Side: Form */}
        <div className="flex-1">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Take Attendance</h2>
            <p className="text-gray-500 mt-2">Enter your details to mark attendance</p>
          </div>

          <form onSubmit={check} className="space-y-6">
            {/* Roll Number Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Roll Number</label>
              <input
                id="rollno"
                name="rollno"
                type="text"
                value={formdata.rollno}
                onChange={(e) => setFormdata({ ...formdata, rollno: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your roll number"
                required
              />
            </div>

            {/* Feedback Message */}
            <div className="mb-3 text-center">
              {attendanceValue !== null && (
                <span className={`text-lg font-medium ${attendanceValue ? 'text-green-600' : 'text-red-600'}`}>
                  {msg}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
