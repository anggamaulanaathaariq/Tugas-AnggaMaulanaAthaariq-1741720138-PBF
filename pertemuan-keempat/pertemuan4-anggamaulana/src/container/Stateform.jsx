import React from 'react';
import './Statefull.css'

const Stateform = () =>{
    return (
        <div class="container">
        <div class="Text">  
        <br></br>
          <center><h1>Form Login</h1></center>
          
          <table width="400" border="1" cellSpacing="0" cellPadding="0" align="center">
          <center><h1>Tugas Pertemuan Keempat</h1></center>
                <tr>
                </tr>
                <div className="container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" nama="uname" required/>
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" nama="psw" required/>
                
                    <button type="submit">Login</button>
                    <center><input type="checkbox" defaultChecked/> Remember me</center>
                </div>
                <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                    <br></br>
                    <center><button type="button" className="cancelbtn">Cancel</button></center>
                </div>
        </table>
    </div>
</div>
      
    )
    }
export default Stateform;