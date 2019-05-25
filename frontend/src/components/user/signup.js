import React from 'react';

import './css/style.css'
function App(){
    return (
        <div id="login-box">
        <div class="left">
          <h1>Log in</h1>        
 
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" name="signup_submit" value="Sign in" />
        </div>
        
        <div class="right">
          <span class="loginwith">Sign in with<br />social network</span>
          
          <button class="social-signin facebook">Log in with facebook</button>
          <button class="social-signin twitter">Log in with Twitter</button>
          <button class="social-signin google">Log in with Google+</button>
        </div>
        <div class="or">OR</div>
      </div>
        
    )
}

export default App;
