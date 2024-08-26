import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

function Display() {
  const [details, setData] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const { tech } = useParams();

  useEffect(() => {
    axios.get('https://attendance-9sen.onrender.com/getdata')
      .then((result) => {
        const filteredData = result.data.data.filter(ele => ele.course === tech);
        setData(filteredData);
      });
  }, [tech]);

  function deletee(id) {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios.delete('https://attendance-9sen.onrender.com/delete-user/' + id).then(result => {
        alert(result.data.message);
      });
    }
  }

  function edit(id) {
    setEditMode(id);
    axios.get('https://attendance-9sen.onrender.com/getByid/' + id)
      .then(result => { console.log(result.data.result.userdetails) });
  }

  function savedata(id) {
    setEditMode(null);
    let tempdata;
    details.map((ele) => {
      if (id === ele._id)
        tempdata = ele;
    });
    axios.put('https://attendance-9sen.onrender.com/update-user/' + id, tempdata).then(result => { alert(result.data.msg) })
      .then(() => {
        axios.get('https://attendance-9sen.onrender.com/getByid/' + id)
          .then(result => { console.log(result.data.result.userdetails) });
      });
  }

  function change(id, temp) {
    let updatedDetails = details.map((ele) =>
      ele._id === id ? {
        ...ele, attendence: !temp
      } : ele
    );
    setData(updatedDetails);
  }

  function setchanges(e, id) {
    const { name, value } = e.target;
    let updatedDetails = details.map((ele) =>
      ele._id === id ? {
        ...ele, [name]: value
      } : ele
    );
    setData(updatedDetails);
  }

  return (
    <div className="mt-5 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Student Data of {tech} Batch</h1>
      <table className="min-w-full bg-gray-800 text-white border-2 border-white shadow-lg">
        <thead className="bg-gray-800">
          <tr>
            <th className="py-2 px-4 border-b text-center">S.no</th>
            <th className="py-2 px-4 border-b text-center">First Name</th>
            <th className="py-2 px-4 border-b text-center">Last Name</th>
            <th className="py-2 px-4 border-b text-center">Email</th>
            <th className="py-2 px-4 border-b text-center">Phone No</th>
            <th className="py-2 px-4 border-b text-center">Roll No</th>
            <th className="py-2 px-4 border-b text-center">Course</th>
            <th className="py-2 px-4 border-b text-center">Attendance</th>
            <th className="py-2 px-4 border-b text-center">Sessions</th>
            {/* <th className="py-2 px-4 border-b">Percentage</th> */}
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            details.map((ele, ind) => (
              <tr key={ele._id} className="hover:bg-gray-700">
                <td className="py-2 px-4 border-b text-center">{ind + 1}</td>
                {
                  editMode === ele._id ? (
                    <>
                      <td className="py-2 px-4 border-b">
                        <input type="text" value={ele.name} name="name" onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full" />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input type="text" value={ele.lname} name="lname" onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full" />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input type="email" value={ele.email} name="email" onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full" />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input type="text" value={ele.phno} name="phno" onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full" />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <input type="text" value={ele.rollno} name="rollno" onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full" />
                      </td>
                      <td className="py-2 px-4 border-b">
                        <select name="course" value={ele.course} onChange={(e) => { setchanges(e, ele._id) }} className="border rounded px-2 py-1 w-full">
                          <option value='FSD'>FSD</option>
                          <option value='AWS'>AWS</option>
                          <option value='Flutter'>Flutter</option>
                          <option value='Google'>Google</option>
                          <option value='Azure'>Azure</option>
                        </select>
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={ele.attendence} onChange={() => { change(ele._id, ele.attendence) }} className="form-checkbox h-5 w-5 text-green-500" />
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
                      <td className="py-2 px-4 border-b text-center">{ele.rollno}</td>
                      <td className="py-2 px-4 border-b text-center">{ele.course}</td>
                      <td className="py-2 px-4 border-b text-center">
                        {ele.attendence ? <span className="bg-green-500 text-black text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Present</span> : <span className="bg-red-600 text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Absent</span>}
                      </td>
                      <td className="py-2 px-4 border-b text-center">{ele.presentDays}/{ele.TotalDays}</td>
                      {/* <td className="py-2 px-4 border-b text-center">{ele.percentage}</td> */}
                    </>
                  )
                }
                <td className="py-2 px-4 border-b text-center flex space-x-2 justify-center">
                  {editMode === ele._id ? (
                    <button className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 " onClick={() => savedata(ele._id)}>Save</button>
                  ) : (
                    <button className="bg-yellow-500 text-black py-1 px-2 rounded hover:bg-yellow-600 " onClick={() => edit(ele._id)}>Edit</button>
                  )}
                  <button className="bg-red-500 text-black py-1 px-2 rounded hover:bg-red-600" onClick={() => deletee(ele._id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Display;
