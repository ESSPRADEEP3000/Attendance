// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Services = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <section id="services" className="services py-12 bg-gray-100">
//       <div className="container mx-auto px-4" data-aos="fade-up">
//         <header className="text-center mb-12">
//           <p className="text-3xl font-semibold text-gray-800">Efficiently manage attendance with our advanced system</p>
//         </header>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           <div className="service-box bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-50" data-aos="fade-up" data-aos-delay="200">
//             <i className="ri-discuss-line text-3xl text-blue-600"></i>
//             <h3 className="text-2xl font-bold mt-4 text-gray-700">Real-time Tracking</h3>
//             <p className="mt-2 text-gray-600">Track attendance in real-time, ensuring accurate and up-to-date records. Our system provides instant insights into attendance patterns.</p>
//           </div>

//           <div className="service-box bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-orange-50" data-aos="fade-up" data-aos-delay="300">
//             <i className="ri-discuss-line text-3xl text-orange-600"></i>
//             <h3 className="text-2xl font-bold mt-4 text-gray-700">Automated Notifications</h3>
//             <p className="mt-2 text-gray-600">Receive automated notifications for absentees and late entries, ensuring timely awareness and intervention in attendance matters.</p>
//           </div>

//           <div className="service-box bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-green-50" data-aos="fade-up" data-aos-delay="400">
//             <i className="ri-discuss-line text-3xl text-green-600"></i>
//             <h3 className="text-2xl font-bold mt-4 text-gray-700">Comprehensive Reporting</h3>
//             <p className="mt-2 text-gray-600">Generate detailed attendance reports with just a few clicks. Analyze trends, identify patterns, and make informed decisions based on attendance data.</p>
//           </div>

//           <div className="service-box bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-red-50" data-aos="fade-up" data-aos-delay="500">
//             <i className="ri-discuss-line text-3xl text-red-600"></i>
//             <h3 className="text-2xl font-bold mt-4 text-gray-700">User-Friendly Interface</h3>
//             <p className="mt-2 text-gray-600">Enjoy a user-friendly interface that simplifies attendance management. Easily mark attendance, view reports, and manage user profiles seamlessly.</p>
//           </div>

//           <div className="service-box bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-purple-50" data-aos="fade-up" data-aos-delay="600">
//             <i className="ri-discuss-line text-3xl text-purple-600"></i>
//             <h3 className="text-2xl font-bold mt-4 text-gray-700">Secure Data Storage</h3>
//             <p className="mt-2 text-gray-600">Rest assured with secure data storage for attendance records. Our system prioritizes data privacy and confidentiality.</p>
//           </div>

//           <div className="service-box bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-pink-50" data-aos="fade-up" data-aos-delay="700">
//             <i className="ri-discuss-line text-3xl text-pink-600"></i>
//             <h3 className="text-2xl font-bold mt-4 text-gray-700">Attendance Analytics</h3>
//             <p className="mt-2 text-gray-600">Utilize powerful analytics tools to gain insights into attendance patterns, helping optimize scheduling and resource allocation.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;


// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Services = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <section id="services" className="services py-12 bg-black">
//       <div className="container mx-auto px-4 ">
//         <header className="text-center mb-12">
//           <p className="text-3xl font-semibold text-white">Transform Your Attendance Management Experience</p>
//         </header>

//         {/* Services Grid */}
//         <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 bg-gray-500 ">
//           {/* Service 1 */}
//           <div className="service-box bg-slate-400 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-500" data-aos="fade-up" data-aos-delay="200">
//             <i className="ri-eye-line text-3xl text-blue-600"></i>
//             <h3 className="text-2xl font-bold mt-4 text-gray-700">Advanced Analytics</h3>
//             <p className="mt-2 text-gray-600">Gain insights into attendance trends with advanced analytics tools, making data-driven decisions easier.</p>
//           </div>

//           {/* Service 2 */}
//           <div className="service-box bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-orange-400" data-aos="fade-up" data-aos-delay="300">
//             <i className="ri-mail-send-line text-3xl text-orange-600"></i>
//             <h3 className="text-2xl font-bold mt-4 text-gray-700">Instant Alerts</h3>
//             <p className="mt-2 text-gray-600">Get real-time alerts for absences and tardiness, ensuring prompt attention to attendance discrepancies.</p>
//           </div>

//           {/* Service 3 */}
//           <div className="service-box bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-green-500" data-aos="fade-up" data-aos-delay="400">
//             <i className="ri-file-shield-line text-3xl text-green-600"></i>
//             <h3 className="text-2xl font-bold mt-4 text-gray-700">Data Security</h3>
//             <p className="mt-2 text-gray-600">Your attendance data is securely stored, with robust measures in place to protect against unauthorized access.</p>
//           </div>

//           {/* Service 4 */}
//           <div className="service-box bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-100 hover:bg-red-500" data-aos="fade-up" data-aos-delay="500">
//             <i className="ri-user-star-line text-3xl text-red-600"></i>
//             <h3 className="text-2xl font-bold mt-4 text-gray-700">User-Friendly Interface</h3>
//             <p className="mt-2 text-gray-600">Our system is designed with an intuitive interface, making attendance management simple and straightforward.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="services" className="services py-16 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <p className="text-4xl font-bold">Transform Your Attendance Management Experience</p>
        </header>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {/* Service 1 */}
          <div
            className="service-box bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-zinc-900"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i className="ri-eye-line text-4xl text-indigo-300"></i>
            <h3 className="text-2xl font-bold mt-6 text-white">Advanced Analytics</h3>
            <p className="mt-4 text-gray-300">
              Gain insights into attendance trends with advanced analytics tools, making data-driven decisions easier.
            </p>
          </div>

          {/* Service 2 */}
          <div
            className="service-box bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-zinc-900"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <i className="ri-mail-send-line text-4xl text-yellow-300"></i>
            <h3 className="text-2xl font-bold mt-6 text-white">Instant Alerts</h3>
            <p className="mt-4 text-gray-300">
              Get real-time alerts for absences and tardiness, ensuring prompt attention to attendance discrepancies.
            </p>
          </div>

          {/* Service 3 */}
          <div
            className="service-box bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-zinc-900"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i className="ri-file-shield-line text-4xl text-green-300"></i>
            <h3 className="text-2xl font-bold mt-6 text-white">Data Security</h3>
            <p className="mt-4 text-gray-300">
              Your attendance data is securely stored, with robust measures in place to protect against unauthorized access.
            </p>
          </div>

          {/* Service 4 */}
          <div
            className="service-box bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-zinc-900"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <i className="ri-user-star-line text-4xl text-pink-300"></i>
            <h3 className="text-2xl font-bold mt-6 text-white">User-Friendly Interface</h3>
            <p className="mt-4 text-gray-300">
              Our system is designed with an intuitive interface, making attendance management simple and straightforward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
