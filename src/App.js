import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import ContactUs from './components/contactus';
import Home from './components/home';
import List from './components/list';
import Restaurants from './components/restaurants';
import RestaurantDetailes from './components/restaurantDetailes';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';

import NavBar from './components/navbar';
import { Route, Switch,Redirect } from 'react-router-dom';






class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
          <Route path="/restaurants/:id" component={RestaurantDetailes} />
          <Route path="/movies" component={Movies}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/contactUs" component={ContactUs}/>         
          <Route path="/list" component={List}/>
          <Route path="/restaurants" component={Restaurants}/>
          <Route path="/not-found" component={NotFound}/>
          <Route path="/" exact component={Home}/>
          <Redirect to="/not-found"/>
          </Switch>
        </div>
       
      </div>
    );
  }
}


export default App;










