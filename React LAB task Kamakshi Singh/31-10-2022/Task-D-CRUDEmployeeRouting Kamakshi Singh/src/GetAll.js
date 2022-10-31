import axios from 'axios';
import React, { Component, useState, useEffect } from 'react'
import './GetAll.css'

function GetAll () {
  const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/employees/").then(res=>setUser(res.data));
    }, []);

  return (
    <div className="cont">
        <h1>Employees</h1>
        {user.map((u)=>(
            <div className='user' key={u.id}>
                <div>Id: {u.id}</div>
                <div>Name: {u.name}</div>
                <div>Username: {u.username}</div>
                <div>Website: {u.website}</div>
            </div>
        ))}
    </div>
  )
}

export default GetAll;

