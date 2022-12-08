import React, { useState,useEffect }  from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { handleBreakpoints } from "@mui/system";
import { googleProvider } from "../../config/authMethods";
import sociaMediaAuth from "../../service/auth";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function Form(props) {
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [users,setUser] = useState([])
  
  const handleOnClick=async (provider)=>{
    const res= await sociaMediaAuth(provider)
    
    if(res!== null){
      if(res.code !== "auth/popup-closed-by-user" && res.email !== ""){
          console.log(res);
          window.location.replace('/main')
          localStorage.setItem('user' , JSON.stringify(res))
      }
      else{
        alert("Tài khoản hoặc mật khẩu sai!!!");
      }
  }

  };
  useEffect(() => {
    fetch("https://636487bf7b209ece0f4810ac.mockapi.io/api/users")
      .then((response) => response.json())
      .then((res) => setUser(res))
      .catch((e) => console.log(e));
  }, []);
  const handleloginOnClick= (e)=>{
    e.preventDefault()
    const user = users.filter(item=>item.username===username)
    if(user[0]?.password!=null) {
      if(user[0].password===password){
        console.log("OK")
        localStorage.setItem("user",JSON.stringify(user))
        window.location.replace("/main")
      }
      else{
        alert("Tài khoản hoặc mật khẩu sai!!!");
      }
    }
    else{
      alert("Tài khoản hoặc mật khẩu sai!!!");
    }

  }
  const handleUserName= (e)=>{
    setUsername(e.target.value)
  }
  const handlePassword= (event)=>{
    setPassword(event.target.value)
  }
  return (
    <div className="Login">
      <h1>Test-Quiz-Login</h1>
      <form>
        <div className="textbox">
          <i class="far fa-user"></i>
          <input 
          value={username}
          onChange={handleUserName}
          type="text" id="" placeholder="Username"/>
        </div>
        <div className="textbox">
          <i class="fas fa-lock"></i>
          <input 
          value={password}
          onChange={handlePassword}
          type="password" id="" placeholder="Password"/>
        </div>
        <div className="textbox">
          <label>
            <input type="checkbox" value="" class="check"/>
            <span>Remember username</span>
          </label>
        </div>
        <button type="submit" class ="btn11" onClick = {handleloginOnClick}>Sign in</button>
        
      </form>
      <button class ="btn11" onClick={()=>handleOnClick(googleProvider)}>Google</button>
    </div>
  );
}

 export default Form;
