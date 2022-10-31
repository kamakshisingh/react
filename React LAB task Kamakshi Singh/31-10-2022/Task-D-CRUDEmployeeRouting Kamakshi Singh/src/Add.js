import axios from 'axios';
import React, { Component, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Add.css'

function Add () {
    const navig = useNavigate();

  const [newuser, setNewuser] = useState();

  const onChangeHandle = (event) => {
    setNewuser({
        ...newuser,
        [event.target.name] : event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/employees", newuser).then(res => navig('/'));
  };

  return (
    <div className="cont">
    <h1>Add employee</h1>
    <div className="user-form">
    <form onSubmit={handleSubmit}><br/>
        <label>Enter your Name: </label>
        <input type="text" name="name" onChange={onChangeHandle} className="in"/><br/>

        <label>Enter your UserName: </label>
        <input type="text" name="username" onChange={onChangeHandle} className="in"/><br/>

        <label>Enter your Website: </label>
        <input type="text" name="website" onChange={onChangeHandle} className="in"/><br/>

        <button onClick={handleSubmit}>Add</button>
    </form>
    </div>
    </div>
  )
}

export default Add;

