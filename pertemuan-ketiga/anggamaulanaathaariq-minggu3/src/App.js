import React from 'react';
import logo from './File.JPG';
import './App.css';

function App() {
  return(
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

const Navbar = () =>{
  return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Biodata</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
  )
};

const Body = () =>{
  return (
    <div class="container">
      <div class="Text">  
      <br></br>
        <center><h1>BIODATA</h1></center>
        </div>
        <div class="card">
        <div class="row">
        <div class="col-6">
              <table width="1040" border="0" cellSpacing="5" cellPadding="5" align="center">
                <tr>
                  <td rowSpan="10" align="center"> <img src={logo} width="500px" height="400px" alt="logo" /></td>
                  <td>Nama </td>
                  <td>:</td>
                  <td>Angga Maulana Athaariq </td>
                 </tr>
             
                <tr>
                  <td>TTL </td>
                  <td>:</td>
                  <td>01 - October - 1999 </td>
                 </tr>
          
                <tr>
                  <td>Jenis Kelamin </td>
                  <td> : </td>
                  <td>Laki-Laki </td>
                 </tr>
                
                 
              
                <tr>
                  <td>Alamat </td>
                  <td> : </td>
                  <td>Jl. Gunung Salju, Amban Permai, Manokwari, Papua Barat </td>
                 </tr>
                  

               
                <tr>
                  <td>No Hp </td>
                  <td> : </td>
                  <td>082248437860 </td>
                 </tr>
              
                 
                <tr>
                  <td>Status </td>
                  <td> : </td>
                  <td>Pelajar/Mahasiswa </td>
                 </tr>

                <tr>
                  <td>Hobi </td>
                  <td> : </td>
                  <td>Mendegarkan Musik </td>
                 </tr>

                <tr>
                  <td>Email </td>
                  <td> : </td>
                  <td>am.athaariq@gmail.com </td>
                 </tr>

                 
                <tr>
                  <td>Github </td>
                  <td> : </td>
                  <td><a href="https://github.com/anggamaulanaathaariq/Tugas-AnggaMaulanaAthaariq-1741720138-PBF"
                  target="_blank">https://github.com/anggamaulanaathaariq/Tugas-AnggaMaulanaAthaariq-1741720138-PBF</a></td>
                 </tr>
                 </table>
                 </div>
                 </div>
        </div>
    </div>
  )
};

const Footer = () =>{
  return (
  <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Copyright © 2020 am.athaariq.com</a>
</nav>
  )
};
 
export default App;
