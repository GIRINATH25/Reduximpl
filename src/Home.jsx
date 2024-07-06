import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./Slices/handleSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const [user,setUser] = useState({
        name:"",
        email:"",
        age:0
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user);
        dispatch(addUser(user));
        navigate('/show')
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} />
        <input type="email" placeholder="email" value={user.contact} onChange={(e)=>setUser({...user,email:e.target.value})}/>
        <input type="number" placeholder="age" value={user.age} onChange={(e)=>setUser({...user,age:e.target.value})}/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
