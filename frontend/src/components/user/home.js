import React from 'react';


import './Home.css';
import './Style.css';

function App() {
    return (
        <div ClassName="logon">
        <div ClassName="topnav" id="myTopnav">
            <a href="./homepage.html" ClassName="active">Home</a>
            <a href="./userprofile.html" ClassName="">Profile</a>
            <a href="#" ClassName="" style={{ float: "right" }}>Sign_Out</a>

            <a href="javascript:void(0);" ClassName="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>

        <div ClassName="row">
            <div ClassName="column" style={{ backgroundColor: '#aaa' }}>
                <h1><i>All Rides</i></h1>
                <p>All ride will display here .</p>
            </div>
            <div ClassName="column" style={{ backgroundColor: '#bbb' }}>
                <h1>Driver details</h1>
                <p>Drivers deetails will appear here..</p>
            </div>
            <div ClassName="column" style={{ backgroundColor: '#ccc' }}>
                <marquee> <h3>offer a ride click </h3></marquee> <button>Offer a ride</button>
                <p>Some text..</p>
                <p><marquee><h3>to view Request</h3> </marquee><button>Click here</button></p>
            </div>
        </div>
        </div>
    )
}

export default App;