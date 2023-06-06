import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Contexto } from '../../context/context';
import axios from 'axios';
import "./login.css"
const LoginPage = () => {
    const [password, setPassword] = useState("");
    const [cpf, setCpf] = useState("");
    const [req, setReq] = useState([]);
    const {login, logout}  = useContext(Contexto);


    const handleLogin = (e) => {
        e.preventDefault();
        //alert(cpf + " " + password)
        axios.post("https://oqueeissonomeurotulo.vercel.app/login",{
            cpf: cpf,
            senha: password
        }).then((response)=>{
            console.log(response?.data?.status);
            setReq(response?.data);
            if(response?.data?.status===200){
                login(cpf, password);
            }
           
        })
        
    }
    return (
        <div className='mainLogin'>

            <form onSubmit={handleLogin}>
                <h1>Sistema de login</h1>
                <input onChange={(e) => setCpf(e.target.value)} value={cpf} type="text" name="cpf" placeholder='CPF' />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name='password' placeholder='SENHA' />
                <input onClick={handleLogin} type="button" value={"Login"} />
                <br />
                <h3 style={{color:"red"}}>{req?.erro}</h3>
                
            </form>
        </div>
    )
}

export default LoginPage