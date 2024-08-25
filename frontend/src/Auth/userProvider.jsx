import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';
const UserContext = createContext();
export const UserProvider = ({ children}) => {
  const [user, setUser] = useState(localStorage.getItem('user')|| null);
  const [details,setdetails]=useState(localStorage.getItem('data')|| null);
  // const [role,setrole]=useState(localStorage.getItem('role')|| null);
  const [page,setpage]=useState('');
  const loginUser = (token) => {
    setUser(token);
    // console.log(token);
    localStorage.setItem('user', token);         
  };
    useEffect(()=>{
      if(user)
      {
      axios.get('http://localhost:7000/dashboard',{
        headers:{
          'Authorization':`${user}`
        }
      }).then((res)=>{
      console.log(res.data);
      setdetails(res.data.info);
      localStorage.setItem('data',res.data.info);
      localStorage.setItem('role',res.data.role);
      setpage(res.data.msg)
      }).catch((err)=>{console.log(err)});
    }
    },[user])
  const logoutUser = () => {
    setUser(null);
    setdetails(null);
    localStorage.removeItem('user');
    localStorage.removeItem('data');
    localStorage.removeItem('role');
    localStorage.clear();
    // window.location.reload();

  };
  return (
    <UserContext.Provider value={{ details,user,page, loginUser, logoutUser,setdetails}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
