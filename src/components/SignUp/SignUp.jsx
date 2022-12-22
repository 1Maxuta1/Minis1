import React from "react";
import './SignUp.css';

const SignUp = () => {
    return (
    <div className="signup-wrapper">
        <a className="login-trigger" href="http://localhost:3000/" data-target="#login" data-toggle="modal">Login</a>
<div id="login" className="modal fade" role="dialog">
  <div className="modal-dialog">
    
    <div className="modal-content">
      <div className="modal-body">
        <button data-dismiss="modal" className="close">&times;</button>
        <h4>Login</h4>
        <div>
          <input type="text" name="username" className="username form-control" placeholder="Username"/>
          <input type="password" name="password" className="password form-control" placeholder="password"/>
          <input className="btn login" type="submit" value="Login" />
        </div>
      </div>
    </div>
  </div>  
</div>
    </div>)
}

export default SignUp