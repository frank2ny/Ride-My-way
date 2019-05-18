import React from 'react';
import './Style.css';
function App() {
    return (
        <body className="logon">
        <div id="login">
            
            <form name='form-login'>
                <span className="fontawesome-user"></span>
                <input type="text" id="user" placeholder="Username" />
                <span className="fontawesome-lock"></span>
                <input type="password" id="pass" placeholder="Password"/>
                    <input type="submit" value="Login"/>
                        <a href="singup.html" style={{color:"aliceblue" }}>Register here</a>
        </form>
        
    </div>
    </body>           );
              }
              
              export default App;
