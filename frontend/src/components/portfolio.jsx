// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Chart } from "react-google-charts";
// import Calendar from "react-calendar";
// import { useUser } from "../Auth/userProvider";
// import axios from "axios";

// const Stuportfolio = () => {
//   const { id } = useParams();
//   const { details, fetchUserDetails } = useUser();
//   const [markedAttendance, setMarkedAttendance] = useState(false);
//   const [attendanceHistory, setAttendanceHistory] = useState([]);

//   useEffect(() => {
//     // Fetch attendance history for the student
//     const fetchAttendanceHistory = async () => {
//       try {
//         const response = await axios.get(`http://your-api-url/attendanceHistory/${id}`);
//         setAttendanceHistory(response.data.history);
//       } catch (error) {
//         console.error("Error fetching attendance history:", error);
//       }
//     };

//     fetchAttendanceHistory();
//   }, [id]);

//   const markAttendance = async () => {
//     try {
//       await axios.post(`http://your-api-url/markAttendance/${id}`);
//       setMarkedAttendance(true);
//       fetchUserDetails();
//     } catch (error) {
//       console.error("Error marking attendance:", error);
//     }
//   };

//   const data = [
//     ["Attendance", "Till Now"],
//     ["Present", details.percentage],
//     ["Absent", 100 - details.percentage],
//   ];

//   const options = {
//     title: "Attendance percentage",
//     width: "100%",
//     height: "500px",
//   };

//   return (
//     <>
//       {details.percentage < 70 && (
//         <div className="mt-5 p-4 text-center bg-blue-100 text-blue-700 rounded-md" role="alert">
//           Your attendance is below 70%. Please make sure to attend classes regularly.
//         </div>
//       )}

//       <div className="container mx-auto mt-5">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full md:w-1/3 px-4">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <img
//                 src="http://localhost:7000/images/studprofile.png"
//                 alt="Student Avatar"
//                 className="rounded-full mx-auto mb-4"
//               />
//               <div>
//                 <h2 className="text-2xl font-semibold text-center mb-4">
//                   {details.name} {details.lname}
//                 </h2>
//                 <div className="text-gray-700">
//                   <p><strong>Roll Number:</strong> {details.rollno}</p>
//                   <p><strong>Phone Number:</strong> {details.phno}</p>
//                   <p><strong>Email:</strong> {details.email}</p>
//                   <p><strong>Course:</strong> {details.course}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-full md:w-2/3 px-4">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h1 className="text-2xl font-semibold text-center mb-4">Attendance Report</h1>
//               <div className="flex justify-center items-center">
//                 <div className="w-1/2 p-2">
//                   <div className="text-center">
//                     <Chart
//                       chartType="PieChart"
//                       data={data}
//                       options={options}
//                       width={"100%"}
//                       height={"100%"}
//                     />
//                   </div>
//                 </div>
//                 <div className="w-1/2 p-2">
//                   <div>
//                     <h2 className="text-xl font-semibold mb-4">Student Data</h2>
//                     <p><strong>No of Days Present:</strong> {details.presentDays}</p>
//                     <p><strong>Total Working Days:</strong> {details.TotalDays}</p>
//                     <p>
//                       <strong>Status:</strong>{" "}
//                       <span className={`inline-block px-2 py-1 rounded-full text-white ${details.attendence ? 'bg-green-500' : 'bg-red-500'}`}>
//                         {details.attendence ? "Present" : "Absent"}
//                       </span>
//                     </p>
//                     <p><strong>Percentage:</strong> {details.percentage}%</p>
//                   </div>
//                 </div>
//               </div>
//               {/* Mark Attendance Button */}
//               <div className="text-center mt-4">
//                 <button
//                   className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
//                   onClick={markAttendance}
//                   disabled={markedAttendance}
//                 >
//                   {markedAttendance ? "Attendance Marked" : "Mark Attendance"}
//                 </button>
//               </div>
//             </div>

//             {/* Calendar Component for Attendance */}
//             <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
//               <h2 className="text-2xl font-semibold text-center mb-4">Attendance Calendar</h2>
//               <Calendar
//                 tileClassName={({ date, view }) =>
//                   attendanceHistory.some(attendanceDate => attendanceDate === date.toISOString().split("T")[0])
//                     ? "bg-green-200"
//                     : ""
//                 }
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Stuportfolio;


//mark2
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Chart } from "react-google-charts";
// import Calendar from "react-calendar";
// import { useUser } from "../Auth/userProvider";
// import axios from "axios";
// import "react-calendar/dist/Calendar.css";
// import CommentsSection from "./CommentsSection";

// const Stuportfolio = () => {
//   const { id } = useParams();
//   const { details, fetchUserDetails } = useUser();
//   const [markedAttendance, setMarkedAttendance] = useState(false);
//   const [attendanceHistory, setAttendanceHistory] = useState([]);
//   useEffect(() => {
//     // Fetch attendance history for the student
//     const fetchAttendanceHistory = async () => {
//       try {
//         const response = await axios.get(`http://your-api-url/attendanceHistory/${id}`);
//         setAttendanceHistory(response.data.history);
//       } catch (error) {
//         console.error("Error fetching attendance history:", error);
//       }
//     };

//     fetchAttendanceHistory();
//   }, [id]);

//   const markAttendance = async () => {
//     try {
//       await axios.post(`http://your-api-url/markAttendance/${id}`);
//       setMarkedAttendance(true);
//       fetchUserDetails();
//     } catch (error) {
//       console.error("Error marking attendance:", error);
//     }
//   };

//   const data = [
//     ["Attendance", "Percentage"],
//     ["Present", details.percentage],
//     ["Absent", 100 - details.percentage],
//   ];

//   const options = {
//     title: "Attendance percentage",
//     pieHole: 0.4,  // Makes it a donut chart
//     colors: ["#4caf50", "#f44336"],  // Custom colors for present and absent
//     width: "100%",
//     height: "500px",
//     is3D: true,
//     backgroundColor: 'transparent',
//     legend: { position: 'bottom' },
//     chartArea: { width: '90%', height: '75%' },
//   };

//   return (
//     <>
//       {details.percentage < 70 && (
//         <div className="mt-5 p-4 text-center bg-red-100 text-red-700 rounded-md" role="alert">
//           Your attendance is below 70%. Please make sure to attend classes regularly.
//         </div>
//       )}

//       <div className="container mx-auto mt-5">
//         <div className="flex flex-wrap -mx-4">
//           {/* Profile Section */}
//           <div className="w-full md:w-1/3 px-4">
//             <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
//               <img
//                 src="http://localhost:7000/images/studprofile.png"
//                 alt="Student Avatar"
//                 className="rounded-full mx-auto mb-4"
//               />
//               <div>
//                 <h2 className="text-2xl font-semibold text-center mb-4">
//                   {details.name} {details.lname}
//                 </h2>
//                 <div className="text-gray-700">
//                   <p><strong>Roll Number:</strong> {details.rollno}</p>
//                   <p><strong>Phone Number:</strong> {details.phno}</p>
//                   <p><strong>Email:</strong> {details.email}</p>
//                   <p><strong>Course:</strong> {details.course}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Attendance Report Section */}
//           <div className="w-full md:w-2/3 px-4">
//             <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
//               <h1 className="text-2xl font-semibold text-center mb-4">Attendance Report</h1>
//               <div className="flex justify-center items-center">
//                 <div className="w-1/2 p-2">
//                   <div className="text-center">
//                     <Chart
//                       chartType="PieChart"
//                       data={data}
//                       options={options}
//                       width={"100%"}
//                       height={"100%"}
//                     />
//                   </div>
//                 </div>
//                 <div className="w-1/2 p-2">
//                   <div>
//                     <h2 className="text-xl font-semibold mb-4">Student Data</h2>
//                     <p><strong>No of Days Present:</strong> {details.presentDays}</p>
//                     <p><strong>Total Working Days:</strong> {details.TotalDays}</p>
//                     <p>
//                       <strong>Status:</strong>{" "}
//                       <span className={`inline-block px-2 py-1 rounded-full text-white ${details.attendance ? 'bg-green-500' : 'bg-red-500'}`}>
//                         {details.attendance ? "Present" : "Absent"}
//                       </span>
//                     </p>
//                     <p><strong>Percentage:</strong> {details.percentage}%</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Mark Attendance Button */}
//               <div className="text-center mt-4">
//                 <button
//                   className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
//                   onClick={markAttendance}
//                   disabled={markedAttendance}
//                 >
//                   {markedAttendance ? "Attendance Marked" : "Mark Attendance"}
//                 </button>
//               </div>
//             </div>

//             {/* Attendance Calendar Section */}
//             <div className="bg-white rounded-lg shadow-lg p-6 mt-6 card-hover">
//               <h2 className="text-2xl font-semibold text-center mb-4">Attendance Calendar</h2>
//               <Calendar
//                 tileClassName={({ date, view }) =>
//                   attendanceHistory.some(attendanceDate => attendanceDate === date.toISOString().split("T")[0])
//                     ? "highlight-attendance"
//                     : ""
//                 }
//               />
//             </div>
//           </div>
//         </div>
//         <CommentsSection id={id} />
//       </div>
//     </>
//   );
// }

// export default Stuportfolio;

// mark3

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Chart } from "react-google-charts";
// import Calendar from "react-calendar";
// import { useUser } from "../Auth/userProvider";
// import axios from "axios";
// import "react-calendar/dist/Calendar.css";
// import CommentsSection from "./CommentsSection";

// const Stuportfolio = () => {
//   const { id } = useParams();
//   const { details, fetchUserDetails } = useUser();
//   const [markedAttendance, setMarkedAttendance] = useState(false);
//   const [attendanceHistory, setAttendanceHistory] = useState([]);

//   useEffect(() => {
//     const fetchAttendanceHistory = async () => {
//       try {
//         const response = await axios.get(`http://your-api-url/attendanceHistory/${id}`);
//         setAttendanceHistory(response.data.history);
//       } catch (error) {
//         console.error("Error fetching attendance history:", error);
//       }
//     };

//     fetchAttendanceHistory();
//   }, [id]);

//   const markAttendance = async () => {
//     try {
//       await axios.post(`http://your-api-url/markAttendance/${id}`);
//       setMarkedAttendance(true);
//       fetchUserDetails();
//     } catch (error) {
//       console.error("Error marking attendance:", error);
//     }
//   };

//   const data = [
//     ["Attendance", "Percentage"],
//     ["Present", details.percentage],
//     ["Absent", 100 - details.percentage],
//   ];

//   const options = {
//     title: "Attendance percentage",
//     pieHole: 0.4, // Makes it a donut chart
//     colors: ["#4caf50", "#f44336"], // Custom colors for present and absent
//     width: "100%",
//     height: "500px",
//     is3D: true,
//     backgroundColor: "transparent",
//     legend: { position: "bottom" },
//     chartArea: { width: "90%", height: "75%" },
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Profile Section */}
//         <div className="col-span-1 bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
//           <img
//             src="http://localhost:7000/images/studprofile.png"
//             alt="Student Avatar"
//             className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
//           />
//           <div className="text-center">
//             <h2 className="text-2xl font-semibold mb-2">{details.name} {details.lname}</h2>
//             <p className="text-gray-500 mb-4">{details.course}</p>
//             <div className="text-left space-y-2">
//               <p><strong>Roll Number:</strong> {details.rollno}</p>
//               <p><strong>Phone Number:</strong> {details.phno}</p>
//               <p><strong>Email:</strong> {details.email}</p>
//             </div>
//           </div>
//         </div>

//         {/* Attendance Report Section */}
//         <div className="col-span-2 bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
//           <h1 className="text-2xl font-semibold text-center mb-4">Attendance Report</h1>
//           <div className="flex justify-around items-center">
//             <div className="w-1/2 p-4">
//               <Chart
//                 chartType="PieChart"
//                 data={data}
//                 options={options}
//                 width={"100%"}
//                 height={"100%"}
//               />
//             </div>
//             <div className="w-1/2 p-4 text-left">
//               <h2 className="text-xl font-semibold mb-4">Attendance Summary</h2>
//               <p><strong>No of Days Present:</strong> {details.presentDays}</p>
//               <p><strong>Total Working Days:</strong> {details.TotalDays}</p>
//               <p>
//                 <strong>Status:</strong>{" "}
//                 <span className={`inline-block px-3 py-1 rounded-full text-white ${details.attendance ? "bg-green-500" : "bg-red-500"}`}>
//                   {details.attendance ? "Present" : "Absent"}
//                 </span>
//               </p>
//               <p><strong>Percentage:</strong> {details.percentage}%</p>
//             </div>
//           </div>

//           {/* Mark Attendance Button */}
//           <div className="text-center mt-6">
//             <button
//               className={`py-2 px-6 rounded-md font-semibold text-white ${markedAttendance ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"} focus:outline-none`}
//               onClick={markAttendance}
//               disabled={markedAttendance}
//             >
//               {markedAttendance ? "Attendance Marked" : "Mark Attendance"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Attendance Calendar Section */}
//       <div className="bg-white rounded-lg shadow-lg p-6 mt-6 transform transition duration-500 hover:scale-105">
//         <h2 className="text-2xl font-semibold text-center mb-4">Attendance Calendar</h2>
//         <Calendar
//           tileClassName={({ date, view }) =>
//             attendanceHistory.some(attendanceDate => attendanceDate === date.toISOString().split("T")[0])
//               ? "highlight-attendance"
//               : ""
//           }
//           className="w-full mx-auto"
//         />
//       </div>

//       {/* Comments Section */}
//       <div className="bg-white rounded-lg shadow-lg p-6 mt-6 transform transition duration-500 hover:scale-105">
//         <CommentsSection id={id} />
//       </div>
//     </div>
//   );
// };

// export default Stuportfolio;

//mark4

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Chart } from "react-google-charts";
// import Calendar from "react-calendar";
// import { useUser } from "../Auth/userProvider";
// import axios from "axios";
// import "react-calendar/dist/Calendar.css";
// import CommentsSection from "./CommentsSection";
// import './studentcard.css'


// const Stuportfolio = () => {
//   const { id } = useParams();
//   const { details, fetchUserDetails } = useUser();
//   const [markedAttendance, setMarkedAttendance] = useState(false);
//   const [attendanceHistory, setAttendanceHistory] = useState([]);

//   useEffect(() => {
//     const fetchAttendanceHistory = async () => {
//       try {
//         const response = await axios.get(`http://your-api-url/attendanceHistory/${id}`);
//         setAttendanceHistory(response.data.history);
//       } catch (error) {
//         console.error("Error fetching attendance history:", error);
//       }
//     };

//     fetchAttendanceHistory();
//   }, [id]);

//   const markAttendance = async () => {
//     try {
//       await axios.post(`http://your-api-url/markAttendance/${id}`);
//       setMarkedAttendance(true);
//       fetchUserDetails();
//     } catch (error) {
//       console.error("Error marking attendance:", error);
//     }
//   };

//   const data = [
//     ["Attendance", "Percentage"],
//     ["Present", details.percentage],
//     ["Absent", 100 - details.percentage],
//   ];

//   const options = {
//     title: "Attendance percentage",
//     pieHole: 0.4,
//     colors: ["#34d399", "#f87171"], // Custom colors for present and absent
//     width: "100%",
//     height: "500px",
//     is3D: true,
//     backgroundColor: "transparent",
//     legend: { position: "bottom" },
//     chartArea: { width: "90%", height: "75%" },
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Profile Section */}
//         <div className="col-span-1 bg-gradient-to-r from-[#375180] via-[#203A43] to-[#2C5364] text-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
//           <img
//             src="http://localhost:7000/images/studprofile.png"
//             alt="Student Avatar"
//             className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-white"
//           />
//           <div className="text-center">
//             <h2 className="text-2xl font-semibold mb-2">{details.name} {details.lname}</h2>
//             <p className="text-indigo-100 mb-4">{details.course}</p>
//             <div className="text-center space-y-2">
//               <p><strong>Roll Number:</strong> {details.rollno}</p>
//               <p><strong>Phone Number:</strong> {details.phno}</p>
//               <p><strong>Email:</strong> {details.email}</p>
//             </div>
//           </div>
//         </div>

//        {/* Attendance Report Section */}
// <div className="col-span-1 bg-gradient-to-r from-[#375180] via-[#243B55] to-[#2C5364] text-white rounded-lg shadow-xl p-8 transform transition-all duration-500 hover:scale-105">
//   <h1 className="text-xl font-bold text-center text-white mb-6">Attendance Report</h1>
//   <div className="flex flex-col md:flex-row justify-around items-center">
//     <div className="w-full md:w-1/2 p-4 text-white">
//       <Chart
//         chartType="PieChart"
//         data={data}
//         options={options}
//         width={"100%"}
//         height={"300px"}
//       />
//     </div>
//     <div className="w-full md:w-1/2 p-4 text-left">
//       <h2 className="text-2xl font-semibold text-white mb-6">Attendance Summary</h2>
//       <p className="mb-4"><strong>No of Days Present:</strong> {details.presentDays}</p>
//       <p className="mb-4"><strong>Total Working Days:</strong> {details.TotalDays}</p>
//       <p className="mb-4">
//         <strong>Status:</strong>{" "}
//         <span className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${details.attendance ? "bg-green-500" : "bg-red-500"}`}>
//           {details.attendance ? "Present" : "Absent"}
//         </span>
//       </p>
//       <p><strong>Percentage:</strong> {details.percentage}%</p>
//     </div>
//   </div>

//   {/* Mark Attendance Button */}
//   <div className="text-center mt-8">
//     <button
//       className={`py-3 px-8 rounded-full font-bold text-white shadow-lg ${markedAttendance ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} focus:outline-none`}
//       onClick={markAttendance}
//       disabled={markedAttendance}
//     >
//       {markedAttendance ? "Attendance Marked" : "Mark Attendance"}
//     </button>
//   </div>
// </div>

//       </div>

//       {/* Attendance Calendar Section */}
//       <div className="bg-white text-gray-800 rounded-lg shadow-lg  mt-6 transform transition duration-500 hover:scale-105">
//         <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-4">Attendance Calendar</h2>
//         <Calendar
//           tileClassName={({ date, view }) =>
//             attendanceHistory.some(attendanceDate => attendanceDate === date.toISOString().split("T")[0])
//               ? "highlight-attendance"
//               : ""
//           }
//           className="w-full mx-auto"
//         />
//       </div>

//       {/* Comments Section */}
//       <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mt-6 transform transition duration-500 hover:scale-105">
//         <CommentsSection id={id} />
//       </div>
//     </div>
//   );
// };

// export default Stuportfolio;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chart } from "react-google-charts";
import Calendar from "react-calendar";
import { useUser } from "../Auth/userProvider";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import CommentsSection from "./CommentsSection";
import './studentcard.css'

const Stuportfolio = () => {
  const { id } = useParams();
  const { details, fetchUserDetails } = useUser();
  const [markedAttendance, setMarkedAttendance] = useState(false);
  const [attendanceHistory, setAttendanceHistory] = useState([]);

  useEffect(() => {
    const fetchAttendanceHistory = async () => {
      try {
        const response = await axios.get(`http://your-api-url/attendanceHistory/${id}`);
        setAttendanceHistory(response.data.history);
      } catch (error) {
        console.error("Error fetching attendance history:", error);
      }
    };

    fetchAttendanceHistory();
  }, [id]);

  const markAttendance = async () => {
    try {
      await axios.post(`http://your-api-url/markAttendance/${id}`);
      setMarkedAttendance(true);
      fetchUserDetails();
    } catch (error) {
      console.error("Error marking attendance:", error);
    }
  };

  const data = [
    ["Attendance", "Percentage"],
    ["Present", details.percentage],
    ["Absent", 100 - details.percentage],
  ];

  const options = {
    title: "Attendance percentage",
    pieHole: 0.4,
    colors: ["#34d399", "#f87171"], // Custom colors for present and absent
    width: "100%",
    height: "500px",
    is3D: true,
    backgroundColor: "transparent",
    legend: { position: "bottom" },
    chartArea: { width: "90%", height: "75%" },
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Profile Section */}
        <div className="col-span-1 bg-gray-900 text-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
          <img
            src="http://localhost:7000/images/studprofile.png"
            alt="Student Avatar"
            className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-white"
          />
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">{details.name} {details.lname}</h2>
            <p className="text-indigo-100 mb-4">{details.course}</p>
            <div className="text-center space-y-2">
              <p><strong>Roll Number:</strong> {details.rollno}</p>
              <p><strong>Phone Number:</strong> {details.phno}</p>
              <p><strong>Email:</strong> {details.email}</p>
            </div>
          </div>
        </div>

        {/* Attendance Report Section */}
        <div className="col-span-1 bg-gray-900 text-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-xl font-bold text-center text-white mb-6">Attendance Report</h1>
          <div className="flex flex-col justify-around items-center">
            {/* <div className="w-full p-4 text-white">
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"300px"}
              />
            </div> */}
            <div className="w-full p-4 text-left">
              <h2 className="text-2xl font-semibold text-white mb-6">Attendance Summary</h2>
              <p className="mb-4"><strong>No of Days Present:</strong> {details.presentDays}</p>
              <p className="mb-4"><strong>Total Working Days:</strong> {details.TotalDays}</p>
              <p className="mb-4">
                <strong>Status:</strong>{" "}
                <span className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${details.attendance ? "bg-green-500" : "bg-red-500"}`}>
                  {details.attendance ? "Present" : "Absent"}
                </span>
              </p>
              <p><strong>Percentage:</strong> 0 {details.percentage}%</p>
            </div>
          </div>

          {/* Mark Attendance Button */}
          {/* <div className="text-center mt-8">
            <button
              className={`py-3 px-8 rounded-full font-bold text-white shadow-lg ${markedAttendance ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} focus:outline-none`}
              onClick={markAttendance}
              disabled={markedAttendance}
            >
              {markedAttendance ? "Attendance Marked" : "Mark Attendance"}
            </button>
          </div> */}
        </div>

        {/* Attendance Calendar Section */}
        <div className="col-span-1 bg-gray-900 text-black rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
          <h2 className="text-xl font-bold text-center text-white mb-4">Attendance Calendar</h2>
          <Calendar
            tileClassName={({ date, view }) =>
              attendanceHistory.some(attendanceDate => attendanceDate === date.toISOString().split("T")[0])
                ? "highlight-attendance"
                : ""
            }
            className="w-full mx-auto bg-zinc-800 text-white no-underline"
          />
        </div>

      </div>

      {/* Comments Section */}
      <div className="bg-gray-900 text-black rounded-lg shadow-lg p-6 mt-6 transform transition duration-500 hover:scale-100">
        <CommentsSection id={id} />
      </div>
    </div>
  );
};

export default Stuportfolio;
