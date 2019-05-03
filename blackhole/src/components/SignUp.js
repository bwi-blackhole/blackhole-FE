import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getUsers, register } from '../actions';


 class SignUp extends React.Component {
  state = {
    regcreds: {

    },
    username:'',
    password: ''
  };



  componentDidMount() {
    this.props.getUsers();
  }

  signUp = e => {
    e.preventDefault();
    this.props.register(this.state.regcreds);
    this.props.history.push("/login");
  };

  handleInput = e => {
    e.persist();
    this.setState(prevState => ({
      regcreds: { ...prevState.regcreds, [e.target.name]: e.target.value }
    }));
  };

  render() {
    return (
      <div className="sign-flex">
        <div className="sign-left">
          <h1 className="show-big">~ Welcome to the blackh0le ~</h1>
          <h1 className="show-small">~ blackh0le ~</h1>
          <h2>The Reverse Note Taking App</h2>
          <p>
            Do you feel like screaming out loud? Venting out your frustrations
            without anyone knowing what you really think?
          </p>
          <p>
            Sign up today, and write out all your problems, and when it's all
            said and done, go ahead and send it to the blackh0le!
          </p>
          <p>
            Or if you might want to come back to your message, go ahead and
            store it in our sattelite. Don't worry, this is your own personal
            sattelite, and no one can hack into it!
          </p>
        </div>
        <div className="Sign-up">
          <div>
            <h1>Sign Up</h1>
          </div>
          <form onSubmit={this.signUp}>
            <input
              onChange={this.handleInput}
              // value={this.state.regcreds.regname}
              name="username"
              type="text"
              label="Name"
              placeholder="Username"
            />
            <input
              onChange={this.handleInput}
              // value={this.state.regcreds.regpassword}
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
            />

            <button type="submit">Submit</button>
            <Link className="link" to="/login">
              <p>Already Have An Account?</p>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}


export default connect(
  null, { getUsers, register }
)(SignUp);

