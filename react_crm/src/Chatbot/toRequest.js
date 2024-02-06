import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
const ToRequest = () => {
 const navigate=useNavigate()
     
 let requestWork=()=>{
    navigate("/")
 }
  
  return (
    <div>
      <button type='button' onClick={()=>requestWork()}>SIGNUP/SIGNIN</button>
    </div>
  );
};

export default ToRequest;