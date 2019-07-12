
// import React from 'react';
// import './css/menu.css';

// function Menu() {
//     return (
//         <div class="navbar">
//             <a href="#home">Home</a>
//             <a href="#news">News</a>
//             <a href="#contact" style={{float:"right"}}>Sign Out</a>
//         </div>



//     );
// }

// export default Menu;



import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import home from './home';
import './css/menu.css';
import profile from './profile';
import Contact from './home';

class Menu extends Component {
 
  render() {
    return (
    <Router>
        <div>
        <div class="navbar">
            // <a href="#home">Home</a>
            // <a href="#news">News</a>
            // <a href="#contact" style={{float:"right"}}>Sign Out</a>
            <Link to={'/'} className="nav-link"> Home </Link>
            <Link to={'/profile'} className="nav-link"> profile </Link>
            <Link to={'/about'} className="nav-link" style={{float:"right"}}>About</Link>
        </div>
        

          <Switch>
              <Route exact path='/' component={home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Menu;