import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
  const [formdata, setFormdata] = useState({
    email: '',
    code: '',
    passwd: '',
  });
  const [msg, setMsg] = useState('');
  const [mailConfirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const Nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:7000/resetpass', formdata)
      .then((res) => {
        alert(res.data.msg);
        if (res.data.value) {
          Nav('/login');
        } else {
          window.location.reload();
          setConfirm(false);
          setCode('');
          setMsg('');
          setFormdata({
            email: '',
            code: '',
            passwd: ''
          });
        }
      });
  };

  const verify = () => {
    if (formdata.email === '') {
      setMsg('Enter the email');
      setConfirm(false);
    } else {
      axios.put('http://localhost:7000/changepass', formdata)
        .then((res) => {
          setMsg(res.data.msg);
          setConfirm(res.data.value);
          if (res.data.value) setCode(res.data.code);
        });
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 max-w-lg mx-auto my-10 text-white w-[60vw]">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium">Enter email</label>
          <div className="flex items-center mb-4">
            <input
              id="email"
              name="email"
              type="email"
              value={formdata.email}
              onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={verify}
              className="ml-4 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800"
            >
              Send
            </button>
          </div>
          <div className="text-center mb-4">
            {mailConfirm === true ? (
              <span className="text-green-600">{msg}</span>
            ) : (
              <span className="text-red-700">{msg}</span>
            )}
          </div>
          <label className="block text-sm font-medium">Enter the Verification code</label>
          <input
            id="code"
            name="code"
            type="text"
            value={formdata.code}
            onChange={(e) => setFormdata({ ...formdata, code: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm mb-4 w-full"
          />
          <div className="text-center mb-4">
            {formdata.code.length > 1 ? (
              formdata.code === code ? (
                <span className="text-green-500">Verified</span>
              ) : (
                <span className="text-red-500">Mismatch</span>
              )
            ) : (
              <></>
            )}
          </div>
          <label className="block text-sm font-medium">Change Password</label>
          <input
            id="passwd"
            type="password"
            value={formdata.passwd}
            onChange={(e) => setFormdata({ ...formdata, passwd: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm mb-4 w-full"
          />
          <button
            type="submit"
            className="w-32 mx-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
