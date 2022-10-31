import axios from 'axios';
import React, { Component, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Delete.css'

function Delete () {
    const [user, setUser] = useState([]);

    const navig = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/employees/").then(res=>setUser(res.data));
    }, []);

  return (
    <div className="cont">
        <h1>Delete Employee</h1>
        {user.map((u)=>(
            <div className='user' key={u.id}>
                <div>Id: {u.id}</div>
                <div>Name: {u.name}</div>
                <div>Username: {u.username}</div>
                <div>Website: {u.website}</div>
                <div><button onClick={()=>{
                    axios.delete("http://localhost:3001/employees/"+u.id).then(res=>navig('/'))
                }}>Delete</button></div>
            </div>
        ))}
    </div>
  )
}

export default Delete;

