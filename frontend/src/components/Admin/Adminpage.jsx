// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { useUser } from "../../Auth/userProvider";
// import { Chart } from "react-google-charts";

// const Admin = () => {
//   const { id } = useParams();
//   const { details } = useUser();

//   // Sample data for charts
//   const studentData = [
//     ["Status", "Number"],
//     ["Present", 120],
//     ["Absent", 30],
//   ];

//   const trainerData = [
//     ["Trainer", "Number of Students"],
//     ["Trainer A", 40],
//     ["Trainer B", 30],
//     ["Trainer C", 20],
//   ];

//   const pieOptions = {
//     title: "Student Attendance Overview",
//     pieHole: 0.4,
//     is3D: false,
//   };

//   const barOptions = {
//     chart: {
//       title: "Trainer Performance",
//       subtitle: "Number of Students per Trainer",
//     },
//   };

//   return (
//     <div className="mt-5 container mx-auto px-4">
//       {/* Overview Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {/* Student List Card */}
//         <Link to={`Displayall`} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//           <div className="flex items-center">
//             <img src="http://localhost:7000/images/studprofile.png" alt="Student Avatar" className="w-16 h-16 rounded-full mr-4" />
//             <div>
//               <h2 className="text-xl font-semibold">Student List</h2>
//               <p className="text-gray-600">View all students</p>
//             </div>
//           </div>
//         </Link>

//         {/* Add Trainer Card */}
//         <Link to={`AddTrainer`} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//           <div className="flex items-center">
//             <img src="http://localhost:7000/images/studprofile.png" alt="Add Trainer" className="w-16 h-16 rounded-full mr-4" />
//             <div>
//               <h2 className="text-xl font-semibold">Add Trainer</h2>
//               <p className="text-gray-600">Add a new trainer</p>
//             </div>
//           </div>
//         </Link>

//         {/* Trainer List Card */}
//         <Link to={`Trainerlist`} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//           <div className="flex items-center">
//             <img src="http://localhost:7000/images/studprofile.png" alt="Trainer List" className="w-16 h-16 rounded-full mr-4" />
//             <div>
//               <h2 className="text-xl font-semibold">Trainer List</h2>
//               <p className="text-gray-600">View all trainers</p>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Admin;


//mark2

import React from "react";
import { Link } from "react-router-dom";


const Admin = () => {

  return (
    <div className="mt-5 container mx-auto  px-4 w-[80vw]  ">
      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Student List Card */}
        <Link to={`Displayall`} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
          <div className="flex items-center">
            <img src="http://localhost:7000/images/studprofile.png" alt="Student Avatar" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Student List</h2>
              <p className="text-gray-600">View all students</p>
            </div>
          </div>
        </Link>

        {/* Add Trainer Card */}
        <Link to={`AddTrainer`} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
          <div className="flex items-center">
            <img src="http://localhost:7000/images/studprofile.png" alt="Add Trainer" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Add Trainer</h2>
              <p className="text-gray-600">Add a new trainer</p>
            </div>
          </div>
        </Link>

        {/* Trainer List Card */}
        <Link to={`Trainerlist`} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
          <div className="flex items-center">
            <img src="http://localhost:7000/images/studprofile.png" alt="Trainer List" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Trainer List</h2>
              <p className="text-gray-600">View all trainers</p>
            </div>
          </div>
        </Link>

        {/* Attendance Reports Card */}
        <Link to={`AttendanceReports`} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
          <div className="flex items-center">
            <div>
              <h2 className="text-xl font-semibold">Attendance Reports</h2>
              <p className="text-gray-600">View detailed attendance reports</p>
            </div>
          </div>
        </Link>

        {/* Class Scheduling Card */}
        <Link to={`ClassScheduling`} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
          <div className="flex items-center">
            <div>
              <h2 className="text-xl font-semibold">Class Scheduling</h2>
              <p className="text-gray-600">Schedule and manage classes</p>
            </div>
          </div>
        </Link>

        {/* Notifications Card */}
        <Link to={`Notifications`} className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
          <div className="flex items-center"> 
            <div>
              <h2 className="text-xl font-semibold">Notifications</h2>
              <p className="text-gray-600">Manage system notifications</p>
            </div>
          </div>
        </Link>
      </div>

    </div>
  );
};
export default Admin;
