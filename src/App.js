import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Jackets from './pages/Jackets.jsx';
import Pants from './pages/Pants.jsx';
import Set from './pages/Set.jsx';
import Shoes from './pages/Shoes.jsx';
import Blouses from './pages/Blouses.jsx';
import Hoodies from './pages/Hoodies.jsx';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Spring-Summer-2018/Jackets" component={Jackets}/>
                    <Route path="/Spring-Summer-2018/Pants" component={Pants}/>
                    <Route path="/Spring-Summer-2018/Set" component={Set}/>
                    <Route path="/Spring-Summer-2018/Shoes" component={Shoes}/>
                    <Route path="/Spring-Summer-2018/Blouses" component={Blouses}/>
                    <Route path="/Spring-Summer-2018/Hoodies" component={Hoodies}/>
                </div>
            </Router>
        );
    }
}

export default App;
