import React ,{Component} from 'react';
import './css/style.css';


export default class Singin extends Components{
  constructor(props){
    super(props)
    this.state={
      username:'',
      email:'',
      password:''
    };
  }
 handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault();
    alert('Authentication coming soon!');
  }

  render(){
    return (
              <div id="login-box">
              <div class="left">
              
                <h1>Sign up</h1>
                <form action="POST" url="">
                <input type="text" name="username" value={this.state.username}  onChange={this.handleInputChange} placeholder="Username" />
                <input type="text" name="email" value={this.state.email}  onChange={this.handleInputChange} placeholder="E-mail" />
                <input type="password" name="password" value={this.state.password}  onChange={this.handleInputChange} placeholder="Password" />
                <input type="password" name="password2" placeholder="Retype password" />
                
                <input type="submit" name="signup_submit" value="Sign me up" />
                </form>
              </div>
              
              <div class="right">
                <span class="loginwith">Sign in with<br />social network</span>
                
                <button class="social-signin facebook">Log in with facebook</button>
                <button class="social-signin twitter">Log in with Twitter</button>
                <button class="social-signin google">Log in with Google+</button>
              </div>
              <div class="or">OR</div>
            </div>
              
            
          
            );

  }

}