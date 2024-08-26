import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TrainerData() {
  const [details, setDetails] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const { tech } = useParams(); // 'tech' is not used, ensure it's needed.

  // Fetch data from backend once when the component mounts
  useEffect(() => {
    axios.get("https://attendance-9sen.onrender.com/gettrain")
      .then((result) => {
        setDetails(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching trainer data: ", error);
      });
  }, []);

  // Function to handle deletion
  function deletee(id) {
    if (window.confirm("Are you sure?")) {
      axios.delete("https://attendance-9sen.onrender.com/delete-trainer/" + id)
        .then((result) => {
          alert(result.data.message);
          setDetails(details.filter((ele) => ele._id !== id)); // Remove deleted item from state
        })
        .catch((error) => {
          console.error("Error deleting trainer data: ", error);
        });
    }
  }

  // Function to handle editing
  function edit(id) {
    console.log("Editing data");
    setEditMode(id);
    axios.get("https://attendance-9sen.onrender.com/gettrainByid/" + id)
      .then((result) => {
        console.log(result.data.userdetails);
      })
      .catch((error) => {
        console.error("Error fetching trainer data by ID: ", error);
      });
  }

  // Function to save data after editing
  function saveData(id) {
    setEditMode(null);
    const updatedData = details.find((ele) => ele._id === id);

    if (updatedData) {
      axios.put("https://attendance-9sen.onrender.com/update-trainer/" + id, updatedData)
        .then((result) => {
          alert(result.data.msg);
        })
        .catch((error) => {
          console.error("Error updating trainer data: ", error);
        });
    }
  }

  // Function to toggle attendance status
  function changeAttendanceStatus(id, currentStatus) {
    setDetails(
      details.map((ele) =>
        ele._id === id ? { ...ele, AttendanceTaken: !currentStatus } : ele
      )
    );
  }

  // Function to handle input changes
  function handleInputChange(e, id) {
    const { name, value } = e.target;
    setDetails(
      details.map((ele) =>
        ele._id === id ? { ...ele, [name]: value } : ele
      )
    );
  }

  return (
    <div className="mt-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Trainer Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-5 text-left">S.no</th>
              <th className="py-3 px-5 text-left">First Name</th>
              <th className="py-3 px-5 text-left">Last Name</th>
              <th className="py-3 px-5 text-left">Email</th>
              <th className="py-3 px-5 text-left">Phone No</th>
              <th className="py-3 px-5 text-left">Password</th>
              <th className="py-3 px-5 text-left">Technology</th>
              <th className="py-3 px-5 text-left">Attendance Taken</th>
              <th className="py-3 px-5 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {details.map((ele, ind) => (
              <tr key={ele._id} className="border-b">
                <td className="py-3 px-5">{ind + 1}</td>
                {editMode === ele._id ? (
                  <>
                    <td className="py-3 px-5">
                      <input
                        type="text"
                        value={ele.name}
                        name="name"
                        onChange={(e) => handleInputChange(e, ele._id)}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="py-3 px-5">
                      <input
                        type="text"
                        value={ele.lname}
                        name="lname"
                        onChange={(e) => handleInputChange(e, ele._id)}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="py-3 px-5">
                      <input
                        type="text"
                        value={ele.email}
                        name="email"
                        onChange={(e) => handleInputChange(e, ele._id)}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="py-3 px-5">
                      <input
                        type="text"
                        value={ele.phno}
                        name="phno"
                        onChange={(e) => handleInputChange(e, ele._id)}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="py-3 px-5">
                      <input
                        type="text"
                        value={ele.passwd}
                        name="passwd"
                        onChange={(e) => handleInputChange(e, ele._id)}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="py-3 px-5">
                      <select
                        name="Technology"
                        value={ele.Technology}
                        onChange={(e) => handleInputChange(e, ele._id)}
                        className="w-full p-2 border rounded"
                      >
                        <option value="FSD">FSD</option>
                        <option value="AWS">AWS</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Google">Google</option>
                        <option value="Azure">Azure</option>
                      </select>
                    </td>
                    <td className="py-3 px-5">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={ele.AttendanceTaken}
                          onChange={() =>
                            changeAttendanceStatus(ele._id, ele.AttendanceTaken)
                          }
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2">
                          {ele.AttendanceTaken ? "Yes" : "No"}
                        </span>
                      </label>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-3 px-5">{ele.name}</td>
                    <td className="py-3 px-5">{ele.lname}</td>
                    <td className="py-3 px-5">{ele.email}</td>
                    <td className="py-3 px-5">{ele.phno}</td>
                    <td className="py-3 px-5">{ele.passwd}</td>
                    <td className="py-3 px-5">{ele.Technology}</td>
                    <td className="py-3 px-5">
                      {ele.AttendanceTaken ? "Yes" : "No"}
                    </td>
                  </>
                )}
                <td className="py-3 px-5">
                  {editMode === ele._id ? (
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                      onClick={() => saveData(ele._id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                      onClick={() => edit(ele._id)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => deletee(ele._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrainerData;
