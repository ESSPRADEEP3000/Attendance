// import React, { useState } from 'react';
// import axios from 'axios';

// function AddTrainer() {
//   const [cnfpasswd, setCnfpass] = useState('');
//   const [formdata, setFormdata] = useState({
//     name: '',
//     lname: '',
//     email: '',
//     phno: '',
//     passwd: '',
//     Technology: '',
//     AttendanceTaken: false
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormdata({ ...formdata, AttendanceTaken: true });
//     console.log(formdata);

//     axios.post('http://localhost:7000/addtrainer', formdata)
//       .then((result) => {
//         console.log(result.data);
//         alert(result.data.msg);
//       });

//     setFormdata({
//       name: '',
//       lname: '',
//       email: '',
//       phno: '',
//       passwd: '',
//       Technology: '',
//       AttendanceTaken: false
//     });
//     setCnfpass('');
//   };

//   return (
//     <div className="flex flex-col md:flex-row p-6 max-w-5xl mx-auto my-10 text-white">
//       {/* <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
//         <img src="http://localhost:7000/images/login.png" className="max-w-full h-auto" alt="Trainer" />
//       </div> */}
//       <div className="flex-1 justify-center">
//         <h2 className="text-2xl font-bold text-center mb-4">Insert Trainer Data</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium">First Name</label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               value={formdata.name}
//               onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full bg-zinc-900"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Last Name</label>
//             <input
//               id="lname"
//               name="lname"
//               type="text"
//               value={formdata.lname}
//               onChange={(e) => setFormdata({ ...formdata, lname: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full bg-zinc-900"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Email Address</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formdata.email}
//               onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
//               className="border border-white rounded-md px-3 py-2 text-sm w-full bg-zinc-900"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Phone Number</label>
//             <input
//               id="phno"
//               name="phno"
//               type="text"
//               value={formdata.phno}
//               onChange={(e) => setFormdata({ ...formdata, phno: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full bg-zinc-900"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Technology</label>
//             <select
//               name="Technology"
//               onChange={(e) => setFormdata({ ...formdata, Technology: e.target.value })}
//               value={formdata.Technology}
//               className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full bg-zinc-900"
//               required
//             >
//               <option value="">Select course</option>
//               <option value="FSD">FSD</option>
//               <option value="AWS">AWS</option>
//               <option value="Flutter">Flutter</option>
//               <option value="Google">Google</option>
//               <option value="Azure">Azure</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Password</label>
//             <input
//               id="passwd"
//               name="passwd"
//               type="password"
//               value={formdata.passwd}
//               onChange={(e) => setFormdata({ ...formdata, passwd: e.target.value })}
//               className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full bg-zinc-900"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Confirm Password</label>
//             <input
//               id="conpasswd"
//               name="conpasswd"
//               type="password"
//               value={cnfpasswd}
//               onChange={(e) => setCnfpass(e.target.value)}
//               className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full bg-zinc-900"
//             />
//             {formdata.passwd === cnfpasswd && cnfpasswd !== '' ? (
//               <div className="text-green-500 mt-1">Password matched</div>
//             ) : cnfpasswd === '' ? (
//               <></>
//             ) : (
//               <div className="text-red-500 mt-1">Password not matched</div>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddTrainer;

// import React, { useState } from 'react';
// import axios from 'axios';

// function AddTrainer() {
//   const [cnfpasswd, setCnfpass] = useState('');
//   const [formdata, setFormdata] = useState({
//     name: '',
//     lname: '',
//     email: '',
//     phno: '',
//     passwd: '',
//     Technology: '',
//     AttendanceTaken: false
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formdata.passwd !== cnfpasswd) {
//       alert("Passwords do not match");
//       return;
//     }

//     setFormdata({ ...formdata, AttendanceTaken: true });
//     console.log(formdata);

//     axios.post('http://localhost:7000/addtrainer', formdata)
//       .then((result) => {
//         console.log(result.data);
//         alert(result.data.msg);
//       });

//     setFormdata({
//       name: '',
//       lname: '',
//       email: '',
//       phno: '',
//       passwd: '',
//       Technology: '',
//       AttendanceTaken: false
//     });
//     setCnfpass('');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-800">
//       <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold text-center text-white mb-6">Insert Trainer Data</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-md mb-2 font-medium text-white ">First Name</label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               value={formdata.name}
//               onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
//               className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-md mb-2 font-medium text-white">Last Name</label>
//             <input
//               id="lname"
//               name="lname"
//               type="text"
//               value={formdata.lname}
//               onChange={(e) => setFormdata({ ...formdata, lname: e.target.value })}
//               className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-md mb-2 font-medium text-white">Email Address</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formdata.email}
//               onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
//               className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-md mb-2 font-medium text-white">Phone Number</label>
//             <input
//               id="phno"
//               name="phno"
//               type="text"
//               value={formdata.phno}
//               onChange={(e) => setFormdata({ ...formdata, phno: e.target.value })}
//               className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-md mb-2 font-medium text-white">Technology</label>
//             <select
//               name="Technology"
//               onChange={(e) => setFormdata({ ...formdata, Technology: e.target.value })}
//               value={formdata.Technology}
//               className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
//               required
//             >
//               <option value="">Select course</option>
//               <option value="FSD">FSD</option>
//               <option value="AWS">AWS</option>
//               <option value="Flutter">Flutter</option>
//               <option value="Google">Google</option>
//               <option value="Azure">Azure</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-md mb-2 font-medium text-white">Password</label>
//             <input
//               id="passwd"
//               name="passwd"
//               type="password"
//               value={formdata.passwd}
//               onChange={(e) => setFormdata({ ...formdata, passwd: e.target.value })}
//               className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-md mb-2 font-medium text-white">Confirm Password</label>
//             <input
//               id="conpasswd"
//               name="conpasswd"
//               type="password"
//               value={cnfpasswd}
//               onChange={(e) => setCnfpass(e.target.value)}
//               className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
//             />
//             {formdata.passwd === cnfpasswd && cnfpasswd !== '' ? (
//               <div className="text-green-500 mt-1">Password matched</div>
//             ) : cnfpasswd === '' ? (
//               <></>
//             ) : (
//               <div className="text-red-500 mt-1">Password not matched</div>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddTrainer;

import React, { useState } from 'react';
import axios from 'axios';

function AddTrainer() {
  const [cnfpasswd, setCnfpass] = useState('');
  const [formdata, setFormdata] = useState({
    name: '',
    lname: '',
    email: '',
    phno: '',
    passwd: '',
    Technology: '',
    AttendanceTaken: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.passwd !== cnfpasswd) {
      alert("Passwords do not match");
      return;
    }

    setFormdata({ ...formdata, AttendanceTaken: true });
    console.log(formdata);

    axios.post('https://attendance-9sen.onrender.com/addtrainer', formdata)
      .then((result) => {
        console.log(result.data);
        alert(result.data.msg);
      });

    setFormdata({
      name: '',
      lname: '',
      email: '',
      phno: '',
      passwd: '',
      Technology: '',
      AttendanceTaken: false
    });
    setCnfpass('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full overflow-hidden">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Insert Trainer Data</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">First Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formdata.name}
              onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
              className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Last Name</label>
            <input
              id="lname"
              name="lname"
              type="text"
              value={formdata.lname}
              onChange={(e) => setFormdata({ ...formdata, lname: e.target.value })}
              className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formdata.email}
              onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
              className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Phone Number</label>
            <input
              id="phno"
              name="phno"
              type="text"
              value={formdata.phno}
              onChange={(e) => setFormdata({ ...formdata, phno: e.target.value })}
              className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Technology</label>
            <select
              name="Technology"
              onChange={(e) => setFormdata({ ...formdata, Technology: e.target.value })}
              value={formdata.Technology}
              className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
              required
            >
              <option value="">Select course</option>
              <option value="FSD">FSD</option>
              <option value="AWS">AWS</option>
              <option value="Flutter">Flutter</option>
              <option value="Google">Google</option>
              <option value="Azure">Azure</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              id="passwd"
              name="passwd"
              type="password"
              value={formdata.passwd}
              onChange={(e) => setFormdata({ ...formdata, passwd: e.target.value })}
              className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Confirm Password</label>
            <input
              id="conpasswd"
              name="conpasswd"
              type="password"
              value={cnfpasswd}
              onChange={(e) => setCnfpass(e.target.value)}
              className="border border-gray-700 rounded-md px-3 py-2 text-sm w-full bg-gray-800 text-white"
            />
            {formdata.passwd === cnfpasswd && cnfpasswd !== '' ? (
              <div className="text-green-500 mt-1">Password matched</div>
            ) : cnfpasswd === '' ? (
              <></>
            ) : (
              <div className="text-red-500 mt-1">Password not matched</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTrainer;
