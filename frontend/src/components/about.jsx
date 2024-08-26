// import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
// import './about.css'; // Tailwind will handle most of the styling, but you can still use this file for custom styles if needed

// const About = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <section id="about" className="py-16 bg-slate-500">
//       <div className="container mx-auto px-4" data-aos="fade-up">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div
//             className="flex flex-col justify-center"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="text-center md:text-left">
//               <h3 className="text-3xl font-bold mb-4">Attendance Management System</h3>
//               <h2 className="text-2xl mb-4">
//                 Attendance Management System is our application developed for
//                 tracking the attendance of students efficiently.
//               </h2>
//               <p className="mb-4">
//                 In our system, we have implemented different logins tailored
//                 for various users, each serving a specific purpose:
//               </p>
//               <ul className="list-disc list-inside space-y-4">
//                 <li>
//                   <strong className="font-semibold">Student Login:</strong> Students can access their
//                   attendance records, view class schedules, and receive
//                   notifications about their attendance status. This login
//                   provides students with a user-friendly interface for managing
//                   their attendance.
//                 </li>
//                 <li>
//                   <strong className="font-semibold">Trainer Login:</strong> Trainers have access to
//                   attendance data for the classes they are responsible for.
//                   Features include the ability to mark attendance, generate
//                   reports, and communicate with students regarding attendance
//                   issues. This login streamlines the tracking process for
//                   trainers and enhances overall class management.
//                 </li>
//                 <li>
//                   <strong className="font-semibold">Admin Login:</strong> The admin login provides
//                   complete access to all the data in our attendance management
//                   system. Admins can manage user accounts, customize system
//                   settings, and generate comprehensive reports. This login is
//                   designed for system administrators to ensure smooth
//                   functionality and data integrity.
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div
//             className="flex items-center justify-center"
//             data-aos="zoom-out"
//             data-aos-delay="200"
//           >
//             <img src="http://localhost:7000/images/about.jpg" className="w-full h-auto rounded-lg" alt="Features" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


//mark2
// import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
// import './about.css'; // Custom styles for additional styling if needed

// const About = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <section id="about" className="py-16 bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]  text-white">
//       <div className="container mx-auto px-4" data-aos="fade-up">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div
//             className="flex flex-col justify-center"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="text-center md:text-left">
//               <h3 className="text-4xl font-bold mb-4">Attendance Management System</h3>
//               <h2 className="text-3xl mb-4 font-light">
//                 Track student attendance efficiently with our system.
//               </h2>
//               <p className="mb-4 text-lg">
//                 Our system offers tailored logins for various users, each serving a specific purpose to ensure smooth and efficient attendance management.
//               </p>
//               <ul className="list-disc list-inside space-y-6">
//                 <li className="hover:bg-white hover:text-black transition-colors duration-300 p-3 rounded-md">
//                   <strong className="font-semibold text-xl">Student Login:</strong>
//                   <p className="text-base mt-2">
//                     Access attendance records, view schedules, and receive notifications. A user-friendly interface designed for students.
//                   </p>
//                 </li>
//                 <li className="hover:bg-white hover:text-black transition-colors duration-300 p-3 rounded-md">
//                   <strong className="font-semibold text-xl">Trainer Login:</strong>
//                   <p className="text-base mt-2">
//                     Mark attendance, generate reports, and communicate with students. Simplifies class management for trainers.
//                   </p>
//                 </li>
//                 <li className="hover:bg-white hover:text-black transition-colors duration-300 p-3 rounded-md">
//                   <strong className="font-semibold text-xl">Admin Login:</strong>
//                   <p className="text-base mt-2">
//                     Full access to manage user accounts, customize settings, and generate comprehensive reports.
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div
//             className="flex items-center justify-center"
//             data-aos="zoom-out"
//             data-aos-delay="300"
//           >
//             <img 
//               src="http://localhost:7000/images/about.jpg"
//               className="w-full h-auto rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out"
//               alt="Features"
//             />
//           </div>
//         </div>
//         <div className="mt-12 text-center">
//           <Link 
//             to="/contact"
//             className="bg-white text-blue-600 hover:text-white hover:bg-blue-800 font-bold py-3 px-8 rounded-full transition duration-300"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             Get in Touch
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
// import './about.css'; // Custom styles for additional styling if needed

// const About = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <section id="about" className="py-16 bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white">
//       <div className="container mx-auto px-4">

//         {/* Student Login */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
//           <div
//             className="flex flex-col justify-center order-1 md:order-1"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="text-center md:text-left">
//               <h3 className="text-4xl font-bold mb-4">Attendance Management System</h3>
//               <h2 className="text-3xl mb-4 font-light">
//                 Track student attendance efficiently with our system.
//               </h2>
//               <p className="mb-4 text-lg">
//                 Our system offers tailored logins for various users, each serving a specific purpose to ensure smooth and efficient attendance management.
//               </p>
//               <div className="hover:bg-white hover:text-black transition-colors duration-300 p-3 rounded-md">
//                 <strong className="font-semibold text-xl">Student Login:</strong>
//                 <p className="text-base mt-2">
//                   Access attendance records, view schedules, and receive notifications. A user-friendly interface designed for students.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div
//             className="flex items-center justify-center order-2 md:order-2"
//             data-aos="zoom-out"
//             data-aos-delay="300"
//           >
//             <img
//               src="http://localhost:7000/images/student.png"
//               className="w-80 h-fit rounded-3xl shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out"
//               alt="Student Features"
//             />
//              <img
//               src="http://localhost:7000/images/studentlg.png"
//               className="w-132 h-64 rounded-3xl shadow-sm transform transition-transform hover:scale-105 duration-500 ease-in-out"
//               alt="Student Features"
//             />
//           </div>
//         </div>

//         {/* Trainer Login */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16" data-aos="fade-up">
//           <div
//             className="flex items-center justify-center order-2 md:order-1"
//             data-aos="zoom-out"
//             data-aos-delay="300"
//           >
//             <img
//               src="http://localhost:7000/images/trainer.png"
//               className="w-80 h-132 rounded-3xl shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out"
//               alt="Trainer Features"
//             />
//           </div>
//           <div
//             className="flex flex-col justify-center order-1 md:order-2"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="text-center md:text-left">
//               <div className="hover:bg-white hover:text-black transition-colors duration-300 p-3 rounded-md">
//                 <strong className="font-semibold text-xl">Trainer Login:</strong>
//                 <p className="text-base mt-2">
//                   Mark attendance, generate reports, and communicate with students. Simplifies class management for trainers.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Admin Login */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16" data-aos="fade-up">
//           <div
//             className="flex flex-col justify-center order-1 md:order-1"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="text-center md:text-left">
//               <div className="hover:bg-white hover:text-black transition-colors duration-300 p-3 rounded-md">
//                 <strong className="font-semibold text-xl">Admin Login:</strong>
//                 <p className="text-base mt-2">
//                   Full access to manage user accounts, customize settings, and generate comprehensive reports.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div
//             className="flex items-center justify-center order-2 md:order-2"
//             data-aos="zoom-out"
//             data-aos-delay="300"
//           >
//             <img
//               src="http://localhost:7000/images/admin.png"
//               className="w-80 h-fit rounded-3xl shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out"
//               alt="Admin Features"
//             />
//           </div>
//         </div>

//         {/* Contact Button */}
//         <div className="mt-12 text-center">
//           <Link
//             to="/contact"
//             className="bg-white text-blue-600 hover:text-white hover:bg-blue-800 font-bold py-3 px-8 rounded-full transition duration-300"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             Get in Touch
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
// import './about.css'; // Custom styles for additional styling if needed

// const About = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <section id="about" className="py-16  text-white">
//       <div className="container mx-auto px-4">

//         {/* Student Login */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
//           <div
//             className="flex flex-col justify-center order-1 md:order-1"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="text-center md:text-left">
//               <h3 className="text-4xl font-bold mb-4">Attendance Management System</h3>
//               <h2 className="text-3xl mb-4 font-light">
//                 Track student attendance efficiently with our system.
//               </h2>
//               <p className="mb-4 text-lg">
//                 Our system offers tailored logins for various users, each serving a specific purpose to ensure smooth and efficient attendance management.
//               </p>
//               <div className=" transition-colors duration-300 p-3 rounded-md">
//                 <strong className="font-semibold text-xl">Student Login:</strong>
//                 <p className="text-base mt-2">
//                   Access attendance records, view schedules, and receive notifications. A user-friendly interface designed for students.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div
//             className="flex items-center justify-center order-2 md:order-2 relative space-x-4"
//             data-aos="zoom-out"
//             data-aos-delay="300"
//           >
//             <div className="relative top-48">
              
//               <img
//                 src="http://localhost:7000/images/studentlg.png"
//                 className="relative h-32 left-8 w-96  rounded-md shadow-sm transform transition-transform hover:scale-125 duration-500 ease-in-out"
//                 alt="Student Features Large"
//               />
//               <img
//                 src="http://localhost:7000/images/student.png"
//                 className=" relative w-64 h-64 bottom-7   rounded-3xl shadow-lg transform transition-transform hover:scale-125 duration-500 ease-in-out"
//                 alt="Student Features"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Trainer Login */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16" data-aos="fade-up">
//           <div
//             className=" relative flex items-center justify-center order-2 md:order-1"
//             data-aos="zoom-out"
//             data-aos-delay="300"
//           >
//             <img
//               src="http://localhost:7000/images/trainer.png"
//               className="relative top-48 w-80 h-132 rounded-3xl shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out"
//               alt="Trainer Features"
//             />
//           </div>
//           <div
//             className="flex flex-col justify-center order-1 md:order-2"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="text-center md:text-left">
//               <div className="hover:bg-white hover:text-black transition-colors duration-300 p-3 rounded-md">
//                 <strong className="font-semibold text-xl">Trainer Login:</strong>
//                 <p className="text-base mt-2">
//                   Mark attendance, generate reports, and communicate with students. Simplifies class management for trainers.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Admin Login */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16" data-aos="fade-up">
//           <div
//             className="flex flex-col justify-center order-1 md:order-1"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="text-center md:text-left">
//               <div className="hover:bg-white hover:text-black transition-colors duration-300 p-3 rounded-md">
//                 <strong className="font-semibold text-xl">Admin Login:</strong>
//                 <p className="text-base mt-2">
//                   Full access to manage user accounts, customize settings, and generate comprehensive reports.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div
//             className="flex items-center justify-center order-2 md:order-2"
//             data-aos="zoom-out"
//             data-aos-delay="300"
//           >
//             <img
//               src="http://localhost:7000/images/admin.png"
//               className="w-80 h-fit rounded-3xl shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out"
//               alt="Admin Features"
//             />
//           </div>
//         </div>

//         {/* Contact Button */}
//         <div className="mt-12 text-center">
//           <Link
//             to="/contact"
//             className="bg-white text-blue-600 hover:text-white hover:bg-blue-800 font-bold py-3 px-8 rounded-full transition duration-300"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             Get in Touch
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
// import './about.css'; // Custom styles for additional styling if needed

// const About = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <section id="about" className="py-16 text-white">
//       <div className="container mx-auto px-4 lg:px-20">

//         {/* Student Login */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16" data-aos="fade-up">
//           <div
//             className="flex flex-col justify-center order-1 md:order-1"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="text-center md:text-left">
//               <h3 className="text-4xl font-bold mb-6 lg:mb-8">Attendance Management System</h3>
//               <h2 className="text-3xl mb-4 lg:mb-6 font-light">
//                 Track student attendance efficiently with our system.
//               </h2>
//               <p className="mb-4 lg:mb-8 text-lg">
//                 Our system offers tailored logins for various users, each serving a specific purpose to ensure smooth and efficient attendance management.
//               </p>
//               <div className="transition-colors duration-300 p-3 rounded-md">
//                 <strong className="font-bold text-2xl">Student Login:</strong>
//                 <p className="text-base mt-2">
//                   Access attendance records, view schedules, and receive notifications. A user-friendly interface designed for students.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div
//             className="flex items-center justify-center order-2 md:order-2 relative space-x-4"
//             data-aos="zoom-out"
//             data-aos-delay="300"
//           >
//             <div className="relative ">
//               <img
//                 src="http://localhost:7000/images/studentlg.png"
//                 className="relative h-24 md:h-32 lg:h-40 w-64 md:w-96 lg:w-[30rem]  left-4 md:left-8 rounded-md shadow-sm transform transition-transform hover:scale-125 duration-500 ease-in-out"
//                 alt="Student Features Large"
//               />
//               <img
//                 src="http://localhost:7000/images/student.png"
//                 className="relative w-40 h-40 md:w-64 md:h-64 lg:w-72 lg:h-72 bottom-4 md:bottom-7 rounded-3xl shadow-lg transform transition-transform hover:scale-125 duration-500 ease-in-out"
//                 alt="Student Features"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Trainer Login */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16" data-aos="fade-up">
//           <div
//             className="relative flex items-center justify-center order-2 md:order-1"
//             data-aos="zoom-out"
//             data-aos-delay="300"
//           >
//             <img
//               src="http://localhost:7000/images/trainer.png"
//               className="w-40 h-64 md:w-80 md:h-[20rem] lg:w-[24rem] lg:h-[36rem] top-12 md:top-48 rounded-3xl shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out"
//               alt="Trainer Features"
//             />
//           </div>
//           <div
//             className="flex flex-col justify-center order-1 md:order-2"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="text-center md:text-left">
//               <div className=" transition-colors duration-300 p-3 rounded-md">
//                 <strong className="font-bold text-2xl">Trainer Login:</strong>
//                 <p className="text-base mt-2">
//                   Mark attendance, generate reports, and communicate with students. Simplifies class management for trainers.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Admin Login */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16" data-aos="fade-up">
//           <div
//             className="flex flex-col justify-center order-1 md:order-1"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="text-center md:text-left">
//               <div className=" transition-colors duration-300 p-3 rounded-md">
//                 <strong className="font-bold text-2xl">Admin Login:</strong>
//                 <p className="text-base mt-2">
//                   Full access to manage user accounts, customize settings, and generate comprehensive reports.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div
//             className="flex items-center justify-center order-2 md:order-2"
//             data-aos="zoom-out"
//             data-aos-delay="300"
//           >
//             <img
//               src="http://localhost:7000/images/admin.png"
//               className="w-64 h-64  md:w-80 md:h-fit rounded-3xl shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out"
//               alt="Admin Features"
//             />
//           </div>
//         </div>

//         {/* Contact Button */}
//         <div className="mt-12 text-center">
//           <Link
//             to="/contact"
//             className="bg-white text-blue-600 hover:text-white hover:bg-blue-800 font-bold py-3 px-8 rounded-full transition duration-300"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             Get in Touch
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './about.css'; // Custom styles for additional styling if needed

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="py-16 text-white">
      <div className="container mx-auto px-4 lg:px-20">
      <h3 className="text-4xl font-bold mb-6 lg:mb-8 text-center">Attendance Management System</h3>
        {/* Student Login */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16" data-aos="fade-up">
          <div
            className="flex flex-col justify-center order-1 md:order-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-center md:text-left">
              {/* <h3 className="text-4xl font-bold mb-6 lg:mb-8">Attendance Management System</h3>
              <h2 className="text-3xl mb-4 lg:mb-6 font-light">
                Track student attendance efficiently with our system.
              </h2>
              <p className="mb-4 lg:mb-8 text-lg">
                Our system offers tailored logins for various users, each serving a specific purpose to ensure smooth and efficient attendance management.
              </p> */}
              <div className="transition-colors duration-300 p-3 rounded-md">
                <strong className="font-bold text-2xl">Student Login:</strong>
                <p className="text-base mt-2">
                  Access attendance records, view schedules, and receive notifications. A user-friendly interface designed for students.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center order-2 md:order-2 relative space-x-4"
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <div className="relative ">
              <img
                src="https://attendance-9sen.onrender.com/images/studentlg.png"
                className="relative h-24 md:h-32 lg:h-40 w-64 md:w-96 lg:w-[30rem]  left-4 md:left-8 rounded-md shadow-sm transform transition-transform hover:scale-125 duration-500 ease-in-out"
                alt="Student Features Large"
              />
              <img
                src="https://attendance-9sen.onrender.com/images/student.png"
                className="relative w-40 h-40 md:w-64 md:h-64 lg:w-72 lg:h-72 bottom-4 md:bottom-7 rounded-3xl shadow-lg transform transition-transform hover:scale-125 duration-500 ease-in-out"
                alt="Student Features"
              />
            </div>
          </div>
        </div>

        {/* Trainer Login */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16" data-aos="fade-up">
          <div
            className="relative flex items-center justify-center order-2 md:order-1"
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <img
              src="https://attendance-9sen.onrender.com/images/trainer.png"
              className="w-40 h-64 md:w-80 md:h-[20rem] lg:w-[24rem] lg:h-[36rem] top-12 md:top-48 rounded-3xl shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out"
              alt="Trainer Features"
            />
          </div>
          <div
            className="flex flex-col justify-center order-1 md:order-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-center md:text-left">
              <div className=" transition-colors duration-300 p-3 rounded-md">
                <strong className="font-bold text-2xl">Trainer Login:</strong>
                <p className="text-base mt-2">
                  Mark attendance, generate reports, and communicate with students. Simplifies class management for trainers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Login */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16" data-aos="fade-up">
          <div
            className="flex flex-col justify-center order-1 md:order-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-center md:text-left">
              <div className=" transition-colors duration-300 p-3 rounded-md">
                <strong className="font-bold text-2xl">Admin Login:</strong>
                <p className="text-base mt-2">
                  Full access to manage user accounts, customize settings, and generate comprehensive reports.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center order-2 md:order-2"
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <img
              src="https://attendance-9sen.onrender.com/images/admin.png"
              className="w-64 h-64  md:w-80 md:h-fit rounded-3xl shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out"
              alt="Admin Features"
            />
          </div>
        </div>

        {/* Contact Button */}
        {/* <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="bg-green text-orange-300 hover:text-white hover:bg-blue-800 font-bold py-3 px-8 rounded-full transition duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Get in Touch
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default About;
