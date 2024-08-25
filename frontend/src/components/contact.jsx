// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../index.css'

// const Contact = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <section id="contact" className="contact py-12 bg-zinc-900">
//       <div className="container mx-auto px-4" data-aos="fade-up">
//         <header className="text-center mb-12">
//           <p className="text-3xl font-semibold text-gray-800">Contact Us</p>
//         </header>

//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
//             <div className="flex flex-wrap -mx-4">
//               <div className="w-full md:w-1/2 px-4 mb-6">
//                 <div className="info-box p-6 bg-white rounded-lg shadow-md flex items-center space-x-4 hover:bg-blue-50 transition-colors duration-300">
//                   <i className="bi bi-geo-alt text-3xl text-blue-500"></i>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-700">Address</h3>
//                     <p className="text-gray-600">A108 Adam Street,<br />New York, NY 535022</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 px-4 mb-6">
//                 <div className="info-box p-6 bg-white rounded-lg shadow-md flex items-center space-x-4 hover:bg-green-50 transition-colors duration-300">
//                   <i className="bi bi-telephone text-3xl text-green-500"></i>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-700">Call Us</h3>
//                     <p className="text-gray-600">+1 5589 55488 55<br />+1 6678 254445 41</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 px-4 mb-6">
//                 <div className="info-box p-6 bg-white rounded-lg shadow-md flex items-center space-x-4 hover:bg-orange-50 transition-colors duration-300">
//                   <i className="bi bi-envelope text-3xl text-orange-500"></i>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-700">Email Us</h3>
//                     <p className="text-gray-600">info@example.com<br />contact@example.com</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 px-4 mb-6">
//                 <div className="info-box p-6 bg-white rounded-lg shadow-md flex items-center space-x-4 hover:bg-red-50 transition-colors duration-300">
//                   <i className="bi bi-clock text-3xl text-red-500"></i>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-700">Open Hours</h3>
//                     <p className="text-gray-600">Monday - Friday<br />9:00AM - 05:00PM</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2 px-4">
//             <form className="bg-white p-8 rounded-lg shadow-md">
//               <div className="flex flex-wrap -mx-4 mb-4">
//                 <div className="w-full md:w-1/2 px-4 mb-4">
//                   <input type="text" name="name" className="form-control w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your Name" required />
//                 </div>

//                 <div className="w-full md:w-1/2 px-4 mb-4">
//                   <input type="email" name="email" className="form-control w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your Email" required />
//                 </div>

//                 <div className="w-full px-4 mb-4">
//                   <input type="text" name="subject" className="form-control w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Subject" required />
//                 </div>

//                 <div className="w-full px-4 mb-4">
//                   <textarea name="message" className="form-control w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" rows="6" placeholder="Message" required></textarea>
//                 </div>

//                 <div className="w-full px-4 text-center">
//                   <div className="loading mb-2 text-gray-600">Loading...</div>
//                   <div className="error-message mb-2 text-red-500"></div>
//                   <div className="sent-message mb-2 text-green-500">Your message has been sent. Thank you!</div>
//                   <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">Send Message</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
  return (
    <section id="contact" className="py-16  text-white">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <header className="text-center mb-12">
          <p className="text-4xl font-bold text-white">Get in Touch</p>
          <p className="text-white mt-2">We'd love to hear from you! Reach out to us anytime.</p>
        </header>

        <div className="flex flex-wrap -mx-4 justify-between">
          {/* Contact Information */}
          <div className="w-full lg:w-5/12 px-4 mb-8 lg:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex items-center hover:bg-gray-800 transition-colors duration-300">
                <i className="bi bi-geo-alt text-4xl text-blue-500"></i>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Address</h3>
                  <p className="text-white">A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex items-center hover:bg-gray-800 transition-colors duration-300">
                <i className="bi bi-telephone text-4xl text-white"></i>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Call Us</h3>
                  <p className="text-white">+1 5589 55488 55<br />+1 6678 254445 41</p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex items-center hover:bg-gray-800 transition-colors duration-300">
                <i className="bi bi-envelope text-4xl text-orange-500"></i>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  <p className="text-white">info@example.com<br />contact@example.com</p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex items-center hover:bg-gray-800 transition-colors duration-300">
                <i className="bi bi-clock text-4xl text-red-500"></i>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Open Hours</h3>
                  <p className="text-white">Monday - Friday<br />9:00AM - 05:00PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-6/12 px-4">
            <form className="bg-zinc-900 rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <input type="text" name="name" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white" placeholder="Your Name" required />
              </div>
              <div className="mb-6">
                <input type="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-900 focus:outline-none focus:ring-2 focus:ring-white" placeholder="Your Email" required />
              </div>
              <div className="mb-6">
                <input type="text" name="subject" className="w-full p-3 border border-gray-300 rounded-lg  bg-gray-900 focus:outline-none focus:ring-2 focus:ring-white" placeholder="Subject" required />
              </div>
              <div className="mb-6">
                <textarea name="message" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-900 focus:outline-none focus:ring-2 focus:ring-white" rows="6" placeholder="Message" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
