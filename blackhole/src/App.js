
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/SignUp";
import Login from './components/Login'
import MainPage from "./components/MainPage";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <div className="nav-links">
          <a className="home-link" href="">blackh0le</a>
            <NavLink exact to="/">
              SignUp
            </NavLink>
            <NavLink to="/login">Login</NavLink>
            {/* <NavLink exact to="/main-page">
              Main Page
            </NavLink> */}
            {/* <NavLink to="/main-page/note-form">Note Form</NavLink> */}
          </div>
        </nav>
        <div>
          <Route exact path="/" component={SignUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/main-page" component={MainPage} />
          <Route path="/notes/:id" component={Notes} />
          <Route path="/main-page/note-form" component={NoteForm} />
        </div>
      </Router>
    );
  }
}
