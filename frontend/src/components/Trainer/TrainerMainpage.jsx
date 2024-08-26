import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../Auth/userProvider";

const TrainerMainpage = () => {
  const { id } = useParams();
  const { details, setdetails } = useUser();

  const startAttendance = () => {
    axios.put('https://attendance-9sen.onrender.com/start-attendance', details)
      .then((res) => { console.log(res.data) });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl p-6">
        <Link to={`Displaystudent/${details.Technology}`} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-4">
            <img src="https://attendance-9sen.onrender.com/images/studprofile.png" alt="Student Avatar" className="object-cover w-full h-full" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Student List</h2>
          </div>
        </Link>
        <Link to={`Trainerpage/${details.Technology}`} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out" onClick={startAttendance}>
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-4">
            <img src="https://attendance-9sen.onrender.com/images/studprofile.png" alt="Student Avatar" className="object-cover w-full h-full" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Take Attendance</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TrainerMainpage;
