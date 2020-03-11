import React from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
  Redirect
} from "react-router-dom";

import {NavBar, Nav, Navbar, NavItem} from 'react-bootstrap';
import './App.css';


export default function AuthExample(){
  return (
    <Router>
      <div>
      <Navbar bg="danger" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <a class="navbar-brand" href="#"> JasaLapak <span class="sr-only">(current)</span></a>
            <Nav.Link href="/public">Home</Nav.Link>
            <Nav.Link href="/topics">Kategori</Nav.Link>
            <Nav.Link href="/private">Keranjang</Nav.Link>
          </Nav>
          <Nav>
            <AuthButton />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

        <Switch>
          <Route path="/public">
            <PublicPage/>
          </Route>
          <Route path="/topics">
            <ListPage/>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage />
            </PrivateRoute>
          </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate (cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout (cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
        >
        Sign Out
        </button>
    </p>
  ) : (
    <p>You're Not Logged In.</p>
  );
}
      
function PrivateRoute({ children, ...rest}){
  return (
    <Route
      {...rest}
      render={({ location }) => 
        fakeAuth.isAuthenticated ? (
          children
        )  : (
          <Redirect
          to={{
            pathname: "/login",
            state: { from: location}
          }}
          />
        )
        }
    />
  );
}
function ListPage(){
  let {path, url} = useRouteMatch();
  return (
  <div>
    <h2>List:</h2>
       <ul>
         <li>
           <Link to={`${url}/Hp, Laptop `}>Elektronik</Link>
         </li>
         <li>
           <Link to={`${url}/Kemeja, Celana `}>Fashion Pria, Wanita</Link>
         </li>
         <li>
           <Link to={`${url}/Data, Biasa`}>Pulsa</Link>
         </li>
      </ul>
      
      <Switch>
         <Route exact path={path}>
           <h3>Please</h3>
       </Route>
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
       </Switch>
     </div>
  );
}


function PublicPage(){
  return <p>Bukalapak merupakan perusahaan e-commerce / online marketplace di Indonesia yang dioperasikan oleh PT. Bukalapak.com sejak tahun 2010. Bukalapak menjadi salah satu dari 4 perusahaan rintisan yang nilai valuasinya lebih dari $1 miliar asal Indonesia pada tahun 2017. <br></br> 
  <br></br>
  Karyawan: 2600
  <br></br>Diluncurkan: Januari 2010
  <br></br>Tokoh penting: Achmad Zaky; Fajrin Rasyid; Nugroho Herucahyono
  <br></br>Kantor Pusat: Jakarta
  <br></br>Tersedia dalam: Indonesian; International</p>;
}

function ProtectedPage(){
  return <h3>Private</h3>;
}
function Topic (){
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/"}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log In</button>
    </div>
  );
}


// const Body = () =>{

// function Topics(){
//   let {path, url} = useRouteMatch();
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi Goreng`}>Kuliner</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please</h3>
//         </Route>
//       </Switch>
//     </div>

//   );
// }
// }



// export default App;

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useHistory,
//   useLocation,
//   Redirect
// } from "react-router-dom";

// export default function AuthExample(){
//   return (
//     <Router>
//       <div>
//         <AuthButton/>
//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/private">Private Page</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/public">
//             <PublicPage/>
//           </Route>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <PrivateRoute path="/private">
//             <ProtectedPage />
//             </PrivateRoute>
//           </Switch>
//       </div>
//     </Router>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate (cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
//   signout (cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// function AuthButton(){
//   let history = useHistory();
//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//         >
//         Sign Out
//         </button>
//     </p>
//   ) : (
//     <p>You're Not Logged In.</p>
//   );
// }
      
// function PrivateRoute({ children, ...rest}){
//   return (
//     <Route
//       {...rest}
//       render={({ location }) => 
//         fakeAuth.isAuthenticated ? (
//           children
//         )  : (
//           <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: location}
//           }}
//           />
//         )
//         }
//     />
//   );
// }

// function PublicPage(){
//   return <h3>Public</h3>;
// }

// function ProtectedPage(){
//   return <h3>Private</h3>;
// }

// function LoginPage(){
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/"}};
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log In</button>
//     </div>
//   );
// }