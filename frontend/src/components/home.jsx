// import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const Home = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <>
//       <section id="hero" className="flex items-center min-h-screen bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col-reverse lg:flex-row items-center">
//             <div className="lg:w-1/2 flex flex-col justify-center">
//               <h1 data-aos="fade-up" className="text-4xl font-bold mb-4">
//                 Attendance Management System
//               </h1>
//               <h2
//                 data-aos="fade-up"
//                 data-aos-delay="400"
//                 className="text-2xl mb-4"
//               >
//                 Tracking attendance of students efficiently.
//               </h2>
//               <p
//                 data-aos="fade-up"
//                 data-aos-delay="600"
//                 className="text-lg text-gray-700 mb-6"
//               >
//                 We have designed a comprehensive Attendance Management System to
//                 track the attendance of students in an efficient manner.
//                 Different logins are provided for students, trainers, and an
//                 admin with complete access to all the data.
//               </p>
//               <div data-aos="fade-up" data-aos-delay="800">
//                 <div className="text-center lg:text-left">
//                   <Link
//                     to="about"
//                     className="bg-blue-600 text-white py-3 px-6 rounded-lg inline-flex items-center"
//                   >
//                     <span>Learn More</span>
//                     <i className="ml-2 bi bi-arrow-right"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="lg:w-1/2 flex justify-center mb-8 lg:mb-0"
//               data-aos="zoom-out"
//               data-aos-delay="200"
//             >
//               <img
//                 src="http://localhost:7000/images/hero-img.png"
//                 className="w-full max-w-md"
//                 alt="Attendance Management System"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="about" className="py-16 bg-white">
//         <div className="container mx-auto px-4" data-aos="fade-up">
//           <div className="flex flex-col lg:flex-row items-center">
//             <div
//               className="lg:w-1/2 flex flex-col justify-center"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <div className="content mb-8 lg:mb-0">
//                 <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
//                 <h2 className="text-3xl font-bold mb-4">
//                   Streamlined Attendance Tracking for Effortless Management
//                 </h2>
//                 <p className="text-lg text-gray-700 mb-6">
//                   Our Attendance Management System offers a comprehensive
//                   solution for efficient tracking of student attendance. With
//                   user-specific logins for students, trainers, and an admin, you
//                   can easily manage and monitor attendance records. The system
//                   provides real-time insights, making attendance management a
//                   breeze.
//                 </p>
//                 <div className="text-center lg:text-left">
//                   <Link
//                     to="#read-more"
//                     className="bg-green-600 text-white py-3 px-6 rounded-lg inline-flex items-center"
//                   >
//                     <span>Read More</span>
//                     <i className="ml-2 bi bi-arrow-right"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="lg:w-1/2 flex justify-center"
//               data-aos="zoom-out"
//               data-aos-delay="200"
//             >
//               <img
//                 src="http://localhost:7000/images/hero-img2.png"
//                 className="w-full max-w-md"
//                 alt="Streamlined Attendance Tracking"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

// mark 2
// import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const Home = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <>
//       <section
//         id="hero"
//         className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8"
//       >
//         <div className="lg:w-1/2">
//           <h1
//             data-aos="fade-down"
//             className="text-5xl font-extrabold leading-tight mb-4"
//           >
//             Smart Attendance Management System
//           </h1>
//           <p
//             data-aos="fade-right"
//             data-aos-delay="300"
//             className="text-lg mb-8"
//           >
//             Experience a seamless and efficient way to manage student attendance
//             with our smart and user-friendly system.
//           </p>
//           <Link
//             to="about"
//             className="bg-white text-blue-600 py-3 px-6 rounded-lg inline-flex items-center hover:bg-gray-200"
//             data-aos="fade-up"
//             data-aos-delay="500"
//           >
//             <span>Learn More</span>
//             <i className="ml-2 bi bi-arrow-right"></i>
//           </Link>
//         </div>
//         <div
//           className="lg:w-1/2 mt-8 lg:mt-0"
//           data-aos="zoom-in"
//           data-aos-delay="400"
//         >
//           <img
//             src="http://localhost:7000/images/hero-img.png"
//             className="w-full mx-auto max-w-lg rounded-xl "
//             alt="Attendance Management System"
//           />
//         </div>
//       </section>

//       <section id="features" className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2
//             data-aos="fade-down"
//             className="text-3xl font-bold text-center text-gray-800 mb-12"
//           >
//             Key Features
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div
//               className="p-8 bg-gray-100 rounded-lg shadow-lg"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Admin Dashboard
//               </h3>
//               <p className="text-gray-600">
//                 Manage all aspects of the attendance system including adding and
//                 removing users, tracking attendance records, and generating
//                 reports.
//               </p>
//             </div>
//             <div
//               className="p-8 bg-gray-100 rounded-lg shadow-lg"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Trainer Portal
//               </h3>
//               <p className="text-gray-600">
//                 Trainers can easily mark attendance for their students and view
//                 detailed records for their classes.
//               </p>
//             </div>
//             <div
//               className="p-8 bg-gray-100 rounded-lg shadow-lg"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Student Access
//               </h3>
//               <p className="text-gray-600">
//                 Students can view their attendance history and receive
//                 notifications about their attendance status in real-time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="cta" className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
//             Ready to Get Started?
//           </h2>
//           <p data-aos="fade-up" data-aos-delay="200" className="mb-8 text-lg">
//             Start managing attendance efficiently with our modern and
//             user-friendly system.
//           </p>
//           <Link
//             to="signup"
//             className="bg-white text-indigo-600 py-3 px-6 rounded-lg inline-flex items-center hover:bg-gray-200"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             <span>Sign Up Now</span>
//             <i className="ml-2 bi bi-arrow-right"></i>
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;

//mark3
// import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const Home = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section
//         id="hero"
//         className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-green-500 to-orange-600 text-slate-100 p-8"
//       >
//         <div className="lg:w-1/2">
//           <h1
//             data-aos="fade-down"
//             className="text-5xl font-extrabold leading-tight mb-4"
//           >
//             Smart Attendance Management System
//           </h1>
//           <p
//             data-aos="fade-right"
//             data-aos-delay="300"
//             className="text-lg mb-8"
//           >
//             Experience a seamless and efficient way to manage student attendance
//             with our smart and user-friendly system.
//           </p>
//           <Link
//             to="about"
//             className="bg-white text-blue-600 py-3 px-6 rounded-lg inline-flex items-center font-bold hover:bg-blue-500 hover:text-white hover:font-bold"
//             data-aos="fade-up"
//             data-aos-delay="500"
//           >
//             <span>Learn More</span>
//             <i className="ml-2 bi bi-arrow-right"></i>
//           </Link>
//         </div>
//         <div
//           className="lg:w-1/2 mt-8 lg:mt-0"
//           data-aos="zoom-in"
//           data-aos-delay="400"
//         >
//           <img
//             src="http://localhost:7000/images/hero-img.png"
//             className="w-full mx-auto max-w-lg rounded-xl"
//             alt="Attendance Management System"
//           />
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 bg-gradient-to-r from-green-500 to-orange-600">
//         <div className="container mx-auto px-6">
//           <h2
//             data-aos="fade-down"
//             className="text-3xl font-bold text-center text-gray-800 mb-12"
//           >
//             Key Features
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div
//               className="p-8 bg-gray-100 rounded-lg shadow-lg"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Admin Dashboard
//               </h3>
//               <p className="text-gray-600">
//                 Manage all aspects of the attendance system including adding and
//                 removing users, tracking attendance records, and generating
//                 reports.
//               </p>
//             </div>
//             <div
//               className="p-8 bg-gray-100 rounded-lg shadow-lg"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Trainer Portal
//               </h3>
//               <p className="text-gray-600">
//                 Trainers can easily mark attendance for their students and view
//                 detailed records for their classes.
//               </p>
//             </div>
//             <div
//               className="p-8 bg-gray-100 rounded-lg shadow-lg"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Student Access
//               </h3>
//               <p className="text-gray-600">
//                 Students can view their attendance history and receive
//                 notifications about their attendance status in real-time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call-to-Action Section */}
//       <section
//         id="cta"
//         className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
//       >
//         <div className="container mx-auto px-6 text-center">
//           <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
//             Ready to Get Started?
//           </h2>
//           <p data-aos="fade-up" data-aos-delay="200" className="mb-8 text-lg">
//             Start managing attendance efficiently with our modern and
//             user-friendly system.
//           </p>
//           {/* <Link
//             to="signup"
//             className="bg-white text-indigo-600 py-3 px-6 rounded-lg inline-flex items-center hover:bg-gray-200"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             <span>Sign Up Now</span>
//             <i className="ml-2 bi bi-arrow-right"></i>
//           </Link> */}
//          <button className="bg-white text-indigo-600 py-3 px-6 rounded-lg inline-flex items-center hover:bg-gray-200"
//           data-aos="fade-up">Sign Up Now</button>
//         </div>
//         <div className="bg-gradient-to-r from-indigo-600 to-purple-600">
//          </div>
//       </section>
//     </>
//   );
// };

// export default Home;

// import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const Home = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section
//         id="hero"
//         className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-green-500 to-orange-600 text-slate-100 p-8"
//       >
//         <div className="lg:w-1/2">
//           <h1
//             data-aos="fade-down"
//             className="text-5xl font-extrabold leading-tight mb-4"
//           >
//             Smart Attendance Management System
//           </h1>
//           <p
//             data-aos="fade-right"
//             data-aos-delay="300"
//             className="text-lg mb-8"
//           >
//             Experience a seamless and efficient way to manage student attendance
//             with our smart and user-friendly system.
//           </p>
//           <Link
//             to="about"
//             className="bg-white text-blue-600 py-3 px-6 rounded-lg inline-flex items-center font-bold hover:bg-blue-500 hover:text-white hover:font-bold"
//             data-aos="fade-up"
//             data-aos-delay="500"
//           >
//             <span>Learn More</span>
//             <i className="ml-2 bi bi-arrow-right"></i>
//           </Link>
//         </div>
//         <div
//           className="lg:w-1/2 mt-8 lg:mt-0"
//           data-aos="zoom-in"
//           data-aos-delay="400"
//         >
//           <img
//             src="http://localhost:7000/images/hero-img.png"
//             className="w-full mx-auto max-w-lg rounded-xl"
//             alt="Attendance Management System"
//           />
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 bg-gradient-to-r from-green-500 to-orange-600">
//         <div className="container mx-auto px-6">
//           <h2
//             data-aos="fade-down"
//             className="text-3xl font-bold text-center text-gray-800 mb-12"
//           >
//             Key Features
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div
//               className="p-8 bg-gray-100 rounded-lg shadow-lg"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Admin Dashboard
//               </h3>
//               <p className="text-gray-600">
//                 Manage all aspects of the attendance system including adding and
//                 removing users, tracking attendance records, and generating
//                 reports.
//               </p>
//             </div>
//             <div
//               className="p-8 bg-gray-100 rounded-lg shadow-lg"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Trainer Portal
//               </h3>
//               <p className="text-gray-600">
//                 Trainers can easily mark attendance for their students and view
//                 detailed records for their classes.
//               </p>
//             </div>
//             <div
//               className="p-8 bg-gray-100 rounded-lg shadow-lg"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Student Access
//               </h3>
//               <p className="text-gray-600">
//                 Students can view their attendance history and receive
//                 notifications about their attendance status in real-time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call-to-Action Section */}
//       <section
//         id="cta"
//         className="py-16 bg-gradient-to-r from-green-500 to-orange-600 text-white"
//       >
//         <div className="container mx-auto px-6 text-center">
//           <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
//             Ready to Get Started?
//           </h2>
//           <p data-aos="fade-up" data-aos-delay="200" className="mb-8 text-lg">
//             Start managing attendance efficiently with our modern and
//             user-friendly system.
//           </p>
//           <button className="bg-white text-indigo-600 py-3 px-6 rounded-lg inline-flex items-center hover:bg-gray-200"
//           data-aos="fade-up">Sign Up Now</button>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-gradient-to-r from-violet-500 to-violet-600 text-gray-100 py-8">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col lg:flex-row justify-between">
//             <div className="lg:w-1/3 mb-6 lg:mb-0">
//               <h3 className="text-lg font-bold mb-2">Attendance Management System</h3>
//               <p className="text-white">
//                 A comprehensive solution to manage student attendance, offering features for admin, trainers, and students.
//               </p>
//             </div>
//             <div className="lg:w-1/3 mb-6 lg:mb-0">
//               <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
//               <ul>
//                 <li>
//                   <Link to="about" className="hover:cursor-pointer">About Us</Link>
//                 </li>
//                 <li>
//                   <Link to="services" className="hover:cursor-pointer">Services</Link>
//                 </li>
//                 <li>
//                   <Link to="contact" className="hover:cursor-pointer">Contact Us</Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="lg:w-1/3">
//               <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
//               <p>
//                 Email: <a href="mailto:info@attendance.com" className="hover:underline">info@attendance.com</a>
//               </p>
//               <p>Phone: +1 234 567 890</p>
//               <div className="mt-4">
//                 <a href="https://www.facebook.com" className="text-gray-400 hover:text-white mr-4">
//                   <i className="bi bi-facebook"></i>
//                 </a>
//                 <a href="https://www.twitter.com" className="text-gray-400 hover:text-white mr-4">
//                   <i className="bi bi-twitter"></i>
//                 </a>
//                 <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
//                   <i className="bi bi-linkedin"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="text-center text-white mt-8">
//             &copy; {new Date().getFullYear()} Attendance Management System. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col lg:flex-row items-center justify-between min-h-screen  text-white p-8"
      >
        <div className="lg:w-1/2">
          <h1
            data-aos="fade-down"
            className="text-5xl font-extrabold leading-tight mb-4"
          >
            Smart Attendance Management System
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-lg mb-8"
          >
            Experience a seamless and efficient way to manage student attendance
            with our smart and user-friendly system.
          </p>
          <Link
            to="about"
            className="bg-zinc-800 text-white py-3 px-6 rounded-lg inline-flex items-center font-bold hover:bg-gray-800 hover:scale-105 hover:text-white hover:font-bold"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span>Learn More</span>
            <i className="ml-2 bi bi-arrow-right"></i>
          </Link>
        </div>
        <div
          className="lg:w-1/2 mt-8 lg:mt-0"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            src="https://attendance-9sen.onrender.com/images/hero-img.png"
            className="w-full mx-auto max-w-lg rounded-xl"
            alt="Attendance Management System"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16  text-white ">
        <div className="container mx-auto px-6">
          <h2
            data-aos="fade-down"
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-8 bg-gray-900 rounded-lg shadow-lg hover:scale-125"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Admin Dashboard
              </h3>
              <p className="text-white">
                Manage all aspects of the attendance system including adding and
                removing users, tracking attendance records, and generating
                reports.
              </p>
            </div>
            <div
              className="p-8 bg-gray-900 rounded-lg shadow-lg hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Trainer Portal
              </h3>
              <p className="text-white">
                Trainers can easily mark attendance for their students and view
                detailed records for their classes.
              </p>
            </div>
            <div
              className="p-8 bg-gray-900 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Student Access
              </h3>
              <p className="text-white">
                Students can view their attendance history and receive
                notifications about their attendance status in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        id="cta"
        className="py-16 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="mb-8 text-lg">
            Start managing attendance efficiently with our modern and
            user-friendly system.
          </p>
          <button
            className="bg-gray-900 text-white py-3 px-6 rounded-lg inline-flex items-center hover:bg-gray-800"
            data-aos="fade-up"
          >
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
    <footer className="bg-gray-900 text-gray-100 py-8 hidden lg:block">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-lg font-bold mb-2">Attendance Management System</h3>
            <p className="text-gray-300">
              A comprehensive solution to manage student attendance, offering features for admin, trainers, and students.
            </p>
          </div>
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>
                <Link to="/about" className="hover:cursor-pointer">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:cursor-pointer ">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:cursor-pointer">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
            <p>
              Email: <Link to="mailto:info@attendance.com" className="hover:underline">info@attendance.com</Link>
            </p>
            <p>Phone: +1 234 567 890</p>
            <div className="mt-4">
              <Link to="https://www.facebook.com" className="text-gray-400 hover:text-white mr-4">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="https://www.twitter.com" className="text-gray-400 hover:text-white mr-4">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link to="https://www.linkedin.com" className="text-gray-400 hover:text-white">
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-300 mt-8">
          &copy; {new Date().getFullYear()} Attendance Management System. All rights reserved.
        </div>
      </div>
    </footer>


    </>
  );
};

export default Home;
