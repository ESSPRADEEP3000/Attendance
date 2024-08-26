// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

// function DisplayALL() {
//   const [details, setData] = useState([]);
//   const [editMode, setEditMode] = useState(null);
//   const { tech } = useParams();

//   useEffect(() => {
//     axios.get('http://localhost:7000/getdata')
//       .then((result) => {
//         setData(result.data.data);
//       });
//   }, [details.length]);

//   function deletee(id) {
//     axios.delete('http://localhost:7000/delete-user/' + id).then(result => {
//       alert(result.data.message)
//     })
//   }

//   function edit(id) {
//     setEditMode(id);
//     axios.get('http://localhost:7000/getByid/' + id)
//       .then(result => { console.log(result.data.result.userdetails) })
//   }

//   function savedata(id) {
//     setEditMode(null);
//     let tempdata;
//     details.map((ele) => {
//       if (id === ele._id)
//         tempdata = ele;
//     });
//     axios.put('http://localhost:7000/update-user/' + id, tempdata).then(result => { alert(result.data.msg) })
//       .then(() => {
//         axios.get('http://localhost:7000/getByid/' + id)
//           .then(result => { console.log(result.data.result.userdetails) })
//       })
//   }

//   function change(id, temp) {
//     let updatedDetails = details.map((ele) =>
//       ele._id === id ? {
//         ...ele, attendence: !temp
//       } : ele
//     );
//     setData(updatedDetails);
//   }

//   function setchanges(e, id) {
//     const { name, value } = e.target;
//     let updatedDetails = details.map((ele) =>
//       ele._id === id ? {
//         ...ele, [name]: value
//       } : ele
//     );
//     setData(updatedDetails);
//   }

//   return (
//     <div className="mt-5 p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">Student Details Fetching from Backend</h1>
//       <table className="min-w-full bg-white border border-gray-200 shadow-lg">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="py-2 px-4 border-b">S.no</th>
//             <th className="py-2 px-4 border-b">First Name</th>
//             <th className="py-2 px-4 border-b">Last Name</th>
//             <th className="py-2 px-4 border-b">Email</th>
//             <th className="py-2 px-4 border-b">Phone No</th>
//             <th className="py-2 px-4 border-b">Password</th>
//             <th className="py-2 px-4 border-b">Roll No</th>
//             <th className="py-2 px-4 border-b">Course</th>
//             <th className="py-2 px-4 border-b">Attendance</th>
//             <th className="py-2 px-4 border-b">Sessions</th>
//             <th className="py-2 px-4 border-b">Percentage</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             details.map((ele, ind) => (
//               <tr key={ele._id} className="hover:bg-gray-50">
//                 <td className="py-2 px-4 border-b text-center">{ind + 1}</td>
//                 {
//                   editMode === ele._id ? (
//                     <>
//                       <td className="py-2 px-4 border-b">
//                         <input type="text" value={ele.name} name="name" onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full" />
//                       </td>
//                       <td className="py-2 px-4 border-b">
//                         <input type="text" value={ele.lname} name="lname" onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full" />
//                       </td>
//                       <td className="py-2 px-4 border-b">
//                         <input type="email" value={ele.email} name="email" onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full" />
//                       </td>
//                       <td className="py-2 px-4 border-b">
//                         <input type="text" value={ele.phno} name="phno" onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full" />
//                       </td>
//                       <td className="py-2 px-4 border-b">
//                         <input type="password" value={ele.passwd} name="passwd" onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full" />
//                       </td>
//                       <td className="py-2 px-4 border-b">
//                         <input type="text" value={ele.rollno} name="rollno" onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full" />
//                       </td>
//                       <td className="py-2 px-4 border-b">
//                         <select name="course" value={ele.course} onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full">
//                           <option value='FSD'>FSD</option>
//                           <option value='AWS'>AWS</option>
//                           <option value='Flutter'>Flutter</option>
//                           <option value='Google'>Google</option>
//                           <option value='Azure'>Azure</option>
//                         </select>
//                       </td>
//                       <td className="py-2 px-4 border-b text-center">
//                         <label className="inline-flex items-center cursor-pointer">
//                           <input type="checkbox" checked={ele.attendence} onChange={() => { change(ele._id, ele.attendence) }} className="form-checkbox h-5 w-5 text-green-500" />
//                           <span className="ml-2">{ele.attendence ? 'Present' : 'Absent'}</span>
//                         </label>
//                       </td>
//                       <td className="py-2 px-4 border-b text-center">{ele.presentDays}/{ele.TotalDays}</td>
//                       <td className="py-2 px-4 border-b text-center">{ele.percentage}</td>
//                     </>
//                   ) : (
//                     <>
//                       <td className="py-2 px-4 border-b text-center">{ele.name}</td>
//                       <td className="py-2 px-4 border-b text-center">{ele.lname}</td>
//                       <td className="py-2 px-4 border-b text-center">{ele.email}</td>
//                       <td className="py-2 px-4 border-b text-center">{ele.phno}</td>
//                       <td className="py-2 px-4 border-b text-center">{ele.passwd}</td>
//                       <td className="py-2 px-4 border-b text-center">{ele.rollno}</td>
//                       <td className="py-2 px-4 border-b text-center">{ele.course}</td>
//                       <td className="py-2 px-4 border-b text-center">
//                         {ele.attendence === true ? <span className="bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Present</span> : <span className="bg-red-200 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Absent</span>}
//                       </td>
//                       <td className="py-2 px-4 border-b text-center">{ele.presentDays}/{ele.TotalDays}</td>
//                       <td className="py-2 px-4 border-b text-center">{ele.percentage}</td>
//                     </>
//                   )
//                 }
//                 <td className="py-2 px-4 border-b text-center">
//                   {editMode === ele._id ? (
//                     <button className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 mx-1" onClick={() => savedata(ele._id)}>Save</button>
//                   ) : (
//                     <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 mx-1" onClick={() => edit(ele._id)}>Edit</button>
//                   )}
//                   <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 mx-1" onClick={() => deletee(ele._id)}>Delete</button>
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default DisplayALL;


// mark2

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

function DisplayALL() {
  const [details, setData] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const { tech } = useParams();

  useEffect(() => {
    axios.get('https://attendance-9sen.onrender.com/getdata')
      .then((result) => {
        setData(result.data.data);
      });
  }, [details.length]);

  function deletee(id) {
    axios.delete('https://attendance-9sen.onrender.com/delete-user/' + id).then(result => {
      alert(result.data.message);
    });
  }

  function edit(id) {
    setEditMode(id);
    axios.get('https://attendance-9sen.onrender.com/getByid/' + id)
      .then(result => { console.log(result.data.result.userdetails); });
  }

  function savedata(id) {
    setEditMode(null);
    let tempdata;
    details.map((ele) => {
      if (id === ele._id)
        tempdata = ele;
    });
    axios.put('https://attendance-9sen.onrender.com/update-user/' + id, tempdata)
      .then(result => { alert(result.data.msg); })
      .then(() => {
        axios.get('https://attendance-9sen.onrender.com/getByid/' + id)
          .then(result => { console.log(result.data.result.userdetails); });
      });
  }

  function change(id, temp) {
    let updatedDetails = details.map((ele) =>
      ele._id === id ? { ...ele, attendence: !temp } : ele
    );
    setData(updatedDetails);
  }

  function setchanges(e, id) {
    const { name, value } = e.target;
    let updatedDetails = details.map((ele) =>
      ele._id === id ? { ...ele, [name]: value } : ele
    );
    setData(updatedDetails);
  }

  return (
    <div className="mt-5 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Student Details Fetching from Backend</h1>
      <table className="min-w-full bg-white border border-gray-200 shadow-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">S.no</th>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone No</th>
            <th className="py-2 px-4 border-b">Password</th>
            <th className="py-2 px-4 border-b">Roll No</th>
            <th className="py-2 px-4 border-b">Course</th>
            <th className="py-2 px-4 border-b">Attendance</th>
            <th className="py-2 px-4 border-b">Sessions</th>
            {/* <th className="py-2 px-4 border-b">Percentage</th> */}
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {details.map((ele, ind) => (
            <tr key={ele._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-center">{ind + 1}</td>
              {editMode === ele._id ? (
                <>
                  <td className="py-2 px-4 border-b">
                    <input type="text" value={ele.name} name="name" onChange={(e) => { setchanges(e, ele._id); }} className="border rounded px-2 py-1 w-full" />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input type="text" value={ele.lname} name="lname" onChange={(e) => { setchanges(e, ele._id); }} className="border rounded px-2 py-1 w-full" />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input type="email" value={ele.email} name="email" onChange={(e) => { setchanges(e, ele._id); }} className="border rounded px-2 py-1 w-full" />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input type="text" value={ele.phno} name="phno" onChange={(e) => { setchanges(e, ele._id); }} className="border rounded px-2 py-1 w-full" />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input type="password" value={ele.passwd} name="passwd" onChange={(e) => { setchanges(e, ele._id); }} className="border rounded px-2 py-1 w-full" />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input type="text" value={ele.rollno} name="rollno" onChange={(e) => { setchanges(e, ele._id); }} className="border rounded px-2 py-1 w-full" />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <select name="course" value={ele.course} onChange={(e) => { setchanges(e, ele._id); }} className="border rounded px-2 py-1 w-full">
                      <option value='FSD'>FSD</option>
                      <option value='AWS'>AWS</option>
                      <option value='Flutter'>Flutter</option>
                      <option value='Google'>Google</option>
                      <option value='Azure'>Azure</option>
                    </select>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={ele.attendence} onChange={() => { change(ele._id, ele.attendence); }} className="form-checkbox h-5 w-5 text-green-500" />
                      <span className="ml-2">{ele.attendence ? 'Present' : 'Absent'}</span>
                    </label>
                  </td>
                  <td className="py-2 px-4 border-b text-center">{ele.presentDays}/{ele.TotalDays}</td>
                  {/* <td className="py-2 px-4 border-b text-center">{ele.percentage}</td> */}
                </>
              ) : (
                <>
                  <td className="py-2 px-4 border-b text-center">{ele.name}</td>
                  <td className="py-2 px-4 border-b text-center">{ele.lname}</td>
                  <td className="py-2 px-4 border-b text-center">{ele.email}</td>
                  <td className="py-2 px-4 border-b text-center">{ele.phno}</td>
                  <td className="py-2 px-4 border-b text-center">{ele.passwd}</td>
                  <td className="py-2 px-4 border-b text-center">{ele.rollno}</td>
                  <td className="py-2 px-4 border-b text-center">{ele.course}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {ele.attendence === true ? (
                      <span className="bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Present</span>
                    ) : (
                      <span className="bg-red-200 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Absent</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-center">{ele.presentDays}/{ele.TotalDays}</td>
                  {/* <td className="py-2 px-4 border-b text-center">{ele.percentage}</td> */}
                </>
              )}
              <td className="py-2 px-4 border-b text-center flex justify-center space-x-2">
                {editMode === ele._id ? (
                  <button className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600" onClick={() => savedata(ele._id)}>Save</button>
                ) : (
                  <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600" onClick={() => edit(ele._id)}>Edit</button>
                )}
                <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600" onClick={() => deletee(ele._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayALL;
