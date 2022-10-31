import axios from 'axios';
import React, { Component, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './Update.css'

function Update () {
    const navig = useNavigate();
    const {updateid} = useParams();
    
  const [user, setUser] = useState({
    name:"",
    username:"",
    website:""
  });
  const [newuser, setNewuser] = useState();

  useEffect(()=>{
    
    axios.get("http://localhost:3001/employees/"+updateid).then(res=>setUser(res.data));
  },[]);

  const onChangeHandle = (event) => {
    setNewuser({
        ...newuser,
        [event.target.name] : event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3001/employees/"+updateid, newuser).then(res => navig('/'));
  };

  return (
    <div className="cont">
    <h1>Update employee</h1>
    <div className="user-form">
    <form onSubmit={handleSubmit}><br/>
        <label>Enter your Name: </label>
        <input type="text" name="name" onChange={onChangeHandle} className="in" placeholder={user.name}/><br/>

        <label>Enter your UserName: </label>
        <input type="text" name="username" onChange={onChangeHandle} className="in" placeholder={user.username}/><br/>

        <label>Enter your Website: </label>
        <input type="text" name="website" onChange={onChangeHandle} className="in" placeholder={user.website}/><br/>

        <button onClick={handleSubmit}>Update</button>
    </form>
    </div>
    </div>
  )
}

export default Update;

