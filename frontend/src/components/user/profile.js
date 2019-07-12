import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Home.css'

class Profile extends React.Component {

    render() {
        return (
            <div>
     
             <body className="logon">

                 <div className="topnav" id="myTopnav">
                    <Link to={'./'}  className="">Home</Link>
                    <Link to={'./profile'} className="active">Profile</Link>
                    <a style={{float:"right"}}>Sign_Out
                      <i className="fa fa-bars" ></i>
                    </a>
                </div> 
                 <div>

                    <div className="row">
                        <div className="column" style={{ backgroundColor: "#aaa" }}>
                            <div className="card">
                                <img src="./images/av.png" alt="John" style={{ width: "100%" }} />
                                <h1>John Doe</h1>

                                <p>Last Location : Kinondoni</p>
                                <p>Last Driver : Juma Kaseja</p>
                                <div style={{ margin: " 24px 0" }}>
                                    <a href="#"><i ClassName="fa fa-dribbble"></i></a>
                                    <a href="#"><i ClassName="fa fa-twitter"></i></a>
                                    <a href="#"><i ClassName="fa fa-linkedin"></i></a>
                                    <a href="#"><i ClassName="fa fa-facebook"></i></a>
                                </div>
                                <p><button>EDIT PROFILE !</button></p>
                            </div>
                        </div>
                        <div className="column" style={{ backgroundColor: "#aaa" }}>
                            <div ClassName="card">
                                number ofride the user has given
                                    </div>
                        </div>
                        <div className="column" style={{ backgroundColor: "#aaa" }}>
                            <div className="card">
                                number of rides the user taken
                                                    </div>

                        </div>
                    </div>
                </div>
            </body>
            </div>        )
    }
}
export default Profile;