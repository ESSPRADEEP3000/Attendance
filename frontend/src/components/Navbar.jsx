// import React, { useEffect, useState, useRef } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useUser } from "../Auth/userProvider";

// const Menu = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const { user, details, logoutUser, page } = useUser();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleLogout = () => {
//     logoutUser();
//     navigate("/login", { replace: true });
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const getNavLinkClassName = (path) => {
//     return `block py-2 px-4 rounded-lg ${
//       location.pathname === path ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
//     }`;
//   };

//   return (
//     <nav className="bg-light">
//       <div className="container mx-auto flex items-center justify-between py-4 px-6">
//         <div className="flex items-center space-x-4">
//           <Link to="/" className="flex items-center space-x-2">
//             <img
//               src="http://localhost:7000/images/logo.png"
//               alt="Logo"
//               className="h-8"
//             />
//             <span className="text-xl font-semibold">Pulse Track</span>
//           </Link>
//         </div>
//         <div className="hidden lg:flex space-x-4">
//           <Link to="/" className={getNavLinkClassName('/')}>Home</Link>
//           <Link to="/about" className={getNavLinkClassName('/about')}>About</Link>
//           <Link to="/services" className={getNavLinkClassName('/services')}>Services</Link>
//           <a
//             href="#portfolio"
//             onClick={() => { user ? navigate(`/${page}/${details._id}`) : navigate('/login'); }}
//             className={getNavLinkClassName('/portfolio')}
//           >
//             Portfolio
//           </a>
//           <Link to="/contact" className={getNavLinkClassName('/contact')}>Contact</Link>
//         </div>
//         <div className="hidden lg:flex items-center space-x-4">
//           {details ? (
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setDropdownOpen(!isDropdownOpen)}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none"
//               >
//                 {details.name}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
//                   <button
//                     onClick={handleLogout}
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link to="/login">
//               <span className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
//                 Login
//               </span>
//             </Link>
//           )}
//         </div>
//         <button className="lg:hidden p-2 text-gray-700 focus:outline-none">
//           {/* Icon for mobile menu */}
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>
//       </div>
//       <div className="lg:hidden">
//         {/* Mobile menu items */}
//         <div className="px-4 py-2 bg-white border-t border-gray-200">
//           <Link to="/" className={getNavLinkClassName('/')}>Home</Link>
//           <Link to="/about" className={getNavLinkClassName('/about')}>About</Link>
//           <Link to="/services" className={getNavLinkClassName('/services')}>Services</Link>
//           <a
//             href="#portfolio"
//             onClick={() => { user ? navigate(`/${page}/${details._id}`) : navigate('/login'); }}
//             className={getNavLinkClassName('/portfolio')}
//           >
//             Portfolio
//           </a>
//           <Link to="/contact" className={getNavLinkClassName('/contact')}>Contact</Link>
//           {details ? (
//             <button
//               onClick={handleLogout}
//               className="w-full text-gray-700 py-2 px-4 hover:bg-gray-100"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link to="/login" className="w-full text-gray-700 py-2 px-4 hover:bg-gray-100">
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Menu;

// mark2

// import React, { useEffect, useState, useRef } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useUser } from "../Auth/userProvider";

// const Menu = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const { user, details, logoutUser, page } = useUser();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleLogout = () => {
//     logoutUser();
//     navigate("/login", { replace: true });
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const getNavLinkClassName = (path) => {
//     return `block py-2 px-4 rounded-lg transition duration-200 ${
//       location.pathname === path ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
//     }`;
//   };

//   return (
//     <nav className="bg-light ">
//       <div className="container mx-auto flex items-center justify-between py-4 px-6 ">
//         <div className="flex items-center space-x-4">
//           <Link to="/" className="flex items-center space-x-2">
//             <img
//               src="http://localhost:7000/images/logo.png"
//               alt="Logo"
//               className="h-8"
//             />
//             <span className="text-xl font-semibold">Pulse Track</span>
//           </Link>
//         </div>
//         <div className="hidden lg:flex space-x-4">
//           <Link to="/" className={getNavLinkClassName('/')}>Home</Link>
//           <Link to="/about" className={getNavLinkClassName('/about')}>About</Link>
//           <Link to="/services" className={getNavLinkClassName('/services')}>Services</Link>
//           <a
//             href="#portfolio"
//             onClick={() => { user ? navigate(`/${page}/${details._id}`) : navigate('/login'); }}
//             className={getNavLinkClassName('/portfolio')}
//           >
//             Portfolio
//           </a>
//           <Link to="/contact" className={getNavLinkClassName('/contact')}>Contact</Link>
//         </div>
//         <div className="hidden lg:flex items-center space-x-4">
//           {details ? (
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setDropdownOpen(!isDropdownOpen)}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none"
//               >
//                 {details.name}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform duration-200 ease-in-out">
//                   <button
//                     onClick={handleLogout}
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link to="/login">
//               <span className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
//                 Login
//               </span>
//             </Link>
//           )}
//         </div>
//         <button
//           className="lg:hidden p-2 text-gray-700 focus:outline-none"
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {/* Icon for mobile menu */}
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//             ></path>
//           </svg>
//         </button>
//       </div>
//       {isMobileMenuOpen && (
//         <div className="lg:hidden">
//           {/* Mobile menu items */}
//           <div className="px-4 py-2 bg-white border-t border-gray-200">
//             <Link to="/" className={getNavLinkClassName('/')}>Home</Link>
//             <Link to="/about" className={getNavLinkClassName('/about')}>About</Link>
//             <Link to="/services" className={getNavLinkClassName('/services')}>Services</Link>
//             <a
//               href="#portfolio"
//               onClick={() => { user ? navigate(`/${page}/${details._id}`) : navigate('/login'); }}
//               className={getNavLinkClassName('/portfolio')}
//             >
//               Portfolio
//             </a>
//             <Link to="/contact" className={getNavLinkClassName('/contact')}>Contact</Link>
//             {details ? (
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-gray-700 py-2 px-4 hover:bg-gray-100"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link to="/login" className="w-full text-gray-700 py-2 px-4 hover:bg-gray-100">
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Menu;


// import React, { useEffect, useState, useRef } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useUser } from "../Auth/userProvider";

// const Menu = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const { user, details, logoutUser, page } = useUser();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     console.log(details); // Check if `details` contains the name correctly
//   }, [details]);

//   const handleLogout = () => {
//     logoutUser();
//     navigate("/login", { replace: true });
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const getNavLinkClassName = (path) => {
//     return `block py-2 px-4 rounded-lg transition duration-200 ${
//       location.pathname === path ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
//     }`;
//   };

//   return (
//     <nav className="bg-light">
//       <div className="container mx-auto flex items-center justify-between py-4 px-6">
//         <div className="flex items-center space-x-4">
//           <Link to="/" className="flex items-center space-x-2">
//             <img
//               src="http://localhost:7000/images/logo.png"
//               alt="Logo"
//               className="h-8"
//             />
//             <span className="text-xl font-semibold">Pulse Track</span>
//           </Link>
//         </div>
//         <div className="hidden lg:flex space-x-4">
//           <Link to="/" className={getNavLinkClassName('/')}>Home</Link>
//           <Link to="/about" className={getNavLinkClassName('/about')}>About</Link>
//           <Link to="/services" className={getNavLinkClassName('/services')}>Services</Link>
//           <a
//             href="#portfolio"
//             onClick={() => { user ? navigate(`/${page}/${details._id}`) : navigate('/login'); }}
//             className={getNavLinkClassName('/portfolio')}
//           >
//             Portfolio
//           </a>
//           <Link to="/contact" className={getNavLinkClassName('/contact')}>Contact</Link>
//         </div>
//         <div className="hidden lg:flex items-center space-x-4">
//           {details ? (
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setDropdownOpen(!isDropdownOpen)}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none min-w-[120px] text-center"
//               >
//                 {details.lname || "User"} {/* Default to "User" if no name */}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform duration-200 ease-in-out">
//                   <button
//                     onClick={handleLogout}
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link to="/login">
//               <span className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
//                 Login
//               </span>
//             </Link>
//           )}
//         </div>
//         <button
//           className="lg:hidden p-2 text-gray-700 focus:outline-none"
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {/* Icon for mobile menu */}
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//             ></path>
//           </svg>
//         </button>
//       </div>
//       {isMobileMenuOpen && (
//         <div className="lg:hidden">
//           {/* Mobile menu items */}
//           <div className="px-4 py-2 bg-white border-t border-gray-200">
//             <Link to="/" className={getNavLinkClassName('/')}>Home</Link>
//             <Link to="/about" className={getNavLinkClassName('/about')}>About</Link>
//             <Link to="/services" className={getNavLinkClassName('/services')}>Services</Link>
//             <a
//               href="#portfolio"
//               onClick={() => { user ? navigate(`/${page}/${details._id}`) : navigate('/login'); }}
//               className={getNavLinkClassName('/portfolio')}
//             >
//               Portfolio
//             </a>
//             <Link to="/contact" className={getNavLinkClassName('/contact')}>Contact</Link>
//             {details ? (
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-gray-700 py-2 px-4 hover:bg-gray-100"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link to="/login" className="w-full text-gray-700 py-2 px-4 hover:bg-gray-100">
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Menu;


import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useUser } from "../Auth/userProvider";

const Menu = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { user, details, logoutUser, page } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    console.log(details); // Check if `details` contains the name correctly
  }, [details]);

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getNavLinkClassName = (path) => {
    return `block py-2 px-4 rounded-lg transition duration-200 ${
      location.pathname === path ? 'bg-indigo-100 text-indigo-900' : 'text-gray-300 hover:bg-white hover:text-zinc-900'
    }`;
  };

  return (
    <nav className=" shadow-lg text-white ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://attendance-9sen.onrender.com/images/logo.png"
              alt="Logo"
              className="h-8"
            />
            <span className="text-3xl font-bold">AttendX</span>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className={getNavLinkClassName('/')}>Home</Link>
          <Link to="/about" className={getNavLinkClassName('/about')}>About</Link>
          <Link to="/services" className={getNavLinkClassName('/services')}>Services</Link>
          <a
            href="#portfolio"
            onClick={() => { user ? navigate(`/${page}/${details._id}`) : navigate('/login'); }}
            className={getNavLinkClassName('/portfolio')}
          >
            Portfolio
          </a>
          <Link to="/contact" className={getNavLinkClassName('/contact')}>Contact</Link>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          {details ? (
            <div className="relative " ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="bg-white text-gray-900 font-bold  py-2 px-4 rounded-lg focus:outline-none min-w-[120px] text-center"
              >
                {details.lname || "User"} {/* Default to "User" if no name */}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2   border-2 border-gray-200 rounded-lg shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-white hover:bg-gray-800"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <span className="bg-gray-950 text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black ">
                Login
              </span>
            </Link>
          )}
        </div>
        <button
          className="lg:hidden p-2 text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Icon for mobile menu */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          {/* Mobile menu items */}
          <div className="px-4 py-2 bg-black border-t border-gray-200 ">
            <Link to="/" className={getNavLinkClassName('/')}>Home</Link>
            <Link to="/about" className={getNavLinkClassName('/about')}>About</Link>
            <Link to="/services" className={getNavLinkClassName('/services')}>Services</Link>
            <Link
              to="#portfolio"
              onClick={() => { user ? navigate(`/${page}/${details._id}`) : navigate('/login'); }}
              className={getNavLinkClassName('/portfolio')}
            >
              Portfolio
            </Link>
            <Link to="/contact" className={getNavLinkClassName('/contact')}>Contact</Link>
            {details ? (
              <button
                onClick={handleLogout}
                className="w-full text-white py-2 px-4 hover:bg-gray-800"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="w-full text-gray-700 py-2 px-4 hover:bg-indigo-100 ">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;
