import React from 'react';
import './css/home.css'
import './css/style.css'
function App() {
    return (
        <div id="login">
            <form name='form-login'>
                <span className="fontawesome-user"></span>
                <input type="text" id="user" placeholder="Username" />
                <span className="fontawesome-email"></span>
                <input type="text" id="user" placeholder="Email" />
                <span className="fontawesome-lock"></span>
                <input type="password" id="pass" placeholder="Password" />
                <span className="fontawesome-lock"></span>
                <input type="password" id="pass" placeholder="Re-type Password"/><br/>
                <input type="submit" value="Register" />
                <b style={{ color: "aliceblue; " }}> Am a Member <a href="login.html">Login here</a></b>
            </form>
        </div>
    )
}

export default App;