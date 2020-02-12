import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {NavbarBrand} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Features</Nav.Link>
      <Nav.Link href="#home">Pricing</Nav.Link>
      <Nav.Link href="#link">Disabled</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
        <img src={logo} className="App-logo" alt="logo" />

        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Arka</td>
      <td>Leonanta</td>
      <td>@arka</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Agus</td>
      <td>Subag</td>
      <td>@agus</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Rois</td>
      <td>Admj</td>
      <td>@rois</td>
    </tr>
  </tbody>
</Table>

    </div>
  );
}

export default App;
