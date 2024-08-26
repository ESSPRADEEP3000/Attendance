import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useUser } from './userProvider';

function FrontPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();
  const { loginUser, setdetails } = useUser();
  const [formdata, setFormdata] = useState({
    email: '',
    passwd: '',
  });

  const clear = () => {
    setFormdata({
      email: '',
      passwd: '',
    });
  };

  const check = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('https://attendance-9sen.onrender.com/check-login', formdata);
      if (result.data.loggedin) {
        const res = await axios.get('https://attendance-9sen.onrender.com/dashboard', {
          headers: {
            'Authorization': `${result.data.token}`,
          },
        });
        loginUser(result.data.token);
        if (res.data.info) {
          setdetails(res.data.info);
          localStorage.setItem('role', res.data.role);
          navigate(`/${res.data.msg}/${res.data.info._id}`, { replace: true });
        }
      } else {
        alert(result.data.msg);
      }
    } catch (error) {
      console.error(error);
    }
    clear();
  };

  return (
    <div className="container mx-auto p-6 my-5" data-aos="fade-down" data-aos-delay="400" border-8>
      <div className="flex flex-col md:flex-row justify-center my-auto ">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md p-6 bg-gray-900 text-white font-bold shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={check}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formdata.email}
                  onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                  className="mt-1 block text-white bg-zinc-900 w-full px-3 py-2 border border-zinc-500 rounded-md shadow-sm focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-white">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formdata.passwd}
                  onChange={(e) => setFormdata({ ...formdata, passwd: e.target.value })}
                  className="mt-1 text-white bg-zinc-900 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    id="flexCheckDefault"
                    name="flexCheck"
                    type="checkbox"
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                  />
                  <label htmlFor="flexCheckDefault" className="ml-2 block text-sm ">
                    Remember me
                  </label>
                </div>
                <Link to="/forgotpasswd" className="text-indigo-300 hover:text-indigo-300 text-sm">
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 px-4 rounded-lg mb-4 hover:bg-green-800 focus:outline-none focus:ring-1 focus:ring-green-800 focus:ring-offset-2"
              >
                Login
              </button>
              <div className="flex items-center justify-center my-4">
                <p className="text-center font-semibold mx-3 mb-0">OR</p>
              </div>
              <button
                className="w-full bg-orange-700 text-white py-2 px-4 rounded-lg mb-4 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
                onClick={() => navigate('/Signup')}
              >
                {/* <svg
                  className="w-5 h-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.675 2.325a1 1 0 00-1.414 0L12 9.586 2.739 0.325a1 1 0 10-1.414 1.414L10.586 12 1.325 21.675a1 1 0 101.414 1.414L12 14.414l9.261 9.261a1 1 0 001.414-1.414L13.414 12l9.261-9.261a1 1 0 000-1.414z" />
                </svg> */}
                Create account 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
