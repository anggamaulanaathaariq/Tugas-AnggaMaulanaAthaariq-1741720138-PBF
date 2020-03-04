import React from 'react';
import './Login.css';


class Login extends React.Component
{
    render(){
        return(
        <div> 
           <center> <h2> Form Login </h2> </center>
       <center> <form> 
            <div className="Title">
                <p><b> Tugas Pertemuan ketiga </b></p>
            </div>
            <div className="container">
                <label><b> Username </b></label>
                <input type="text" placeholder="masukan username" name="nama"/> <br/>

                <label><b> Password </b></label>
                <input type="password" placeholder="Masukkan Password Anda" name="pass"/>

                <button type="submit">Login</button>
                <input type="checkbox" name="" id="" defaultChecked/> Remember Me
            </div>
            <div className="container">
                <button type="button" className="cancelbtn"> Cancel</button>


            </div>
        </form></center>
        </div>)
    }
}

export default Login;