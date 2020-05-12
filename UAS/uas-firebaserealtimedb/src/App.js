import React, { Component } from "react";
import logo from "./logo.svg";
import BlogPost from "./container/BlogPost/BlogPost";
import Login from "./Login";
import fire from './config/fire';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })

  }

  render() {
    return (
      <div>
      {this.state.user ? (<BlogPost/>) : (<Login/>)}
      </div>
    );
  }
}

export default App;
