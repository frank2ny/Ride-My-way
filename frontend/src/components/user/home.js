import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import './Home.css';
// import './Style.css';



class Home extends React.Component {
 constructor(props){
    super(props);
    this.state = {
    hits:[],
          isLoading: false,
           error: null,
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
     this.setState({ isLoading: true });
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/rides')
      .then(response => {if (response.ok) {return response.json();}
       else {throw new Error('Something went wrong ...');}})
    .then((data)=>this.setState({hits:data , isLoading: false}))
    .catch(error => this.setState({ error, isLoading: false }));
  }
    render() {  
 
       
        const {  isLoading, error } = this.state;

            if (error) {
              return <p>{error.message}</p>;
            }

        if (isLoading) {
          return <p>Loading ...</p>;
        }
      return (
        <div className="logon">
     <div className="topnav" id="myTopnav">
                    <Link to={'./'}  className="active">Home</Link>
                    <Link to={'./profile'} >Profile</Link>
                    <a style={{float:"right"}}>Sign_Out
                      <i className="fa fa-bars"></i>
                    </a>
                </div> 

        <div className="row">
            <div className="column" style={{ backgroundColor: '#aaa' }}>
                <h1><i>All Rides</i></h1>
                <p>All ride will display here .</p>
           {this.state.hits.map(res=>{return this.state.hits ?(
            <div key={res.id}>Driver : {res.driver}<br/> Vehicle : {res.vehicle}<br/>from : {res.fromlocation}<br/>To : {res.tolocation}<br/> <hr/> </div>) : (<div>No Rides yet</div>)})}
        
       
      
          
                
            </div>
            <div className="column" style={{ backgroundColor: '#bbb' }}>
                <h1>Driver details</h1>
                <p>Drivers deetails will appear here..</p>
            </div>
            <div className="column" style={{ backgroundColor: '#ccc' }}>
                <marquee> <h3>offer a ride click </h3></marquee> <button>Offer a ride</button>
                <p>Some text..</p>
                <p><marquee><h3>to view Request</h3> </marquee><button>Click here</button></p>
            </div>
        </div>
        </div>
    )
}}

export default Home;