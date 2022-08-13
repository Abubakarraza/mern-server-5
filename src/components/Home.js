import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';



const Home = () => {
  const [name,setName]=useState("");
  const [check,setCheck]=useState(false);
  const onGetHandler = async () => {
    const res = await fetch("/getData", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

      }
    });
    const data=await res.json();
  
    setName(data.name);
    setCheck(true)

    console.log("🚀 ~ file: Home.js ~ line 16 ~ onGetHandler ~ data", data)
  }
  useEffect(() => {
    onGetHandler();
  }, [])
  return (
    <>
      <div style={{ background: "blue" }} >
       
        <div style={{ position: 'absolute', top: "50%", width: "100%", textAlign: "center" }}>
          <h3>Welcome</h3>
          <h1 > {check? name :"we are Mern developer"}</h1>
        </div>
      </div>
    </>
  )
}

export default Home
