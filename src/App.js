import React, { Component } from 'react';
import Recipes from './components/Recipes'
import {Switch, Route} from 'react-router-dom'
import Calculator from './components/Calculator'
import Navbar2 from './components/Navbar2'
import Navbar1 from './components/Navbar1'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import ContactUs from './components/ContactUs'
import FAQ from './components/FAQ'
import MeetTheTeam from './components/MeetTheTeam'
import Careers from './components/Careers'
import Home from './components/Home'
import './App.css'
import Footer from './components/Footer';
import Exercise from './components/Exercise'

class App extends Component {
  render() {
    return (
      <div>
        
      
      <Navbar1 />
      <Navbar2 />
      
      

      

        
        <Switch>
          <Route exact path='/' render={() => <Home/>} />
          <Route exact path='/recipes' render={() => <Recipes/>} />
          <Route exact path='/calculator' render={() => <Calculator/>} />
          <Route exact path='/exercise' render={() => <Exercise/>} />
          <Route exact path='/login' render={() => <LogIn/>} />
          <Route exact path='/signup' render={() => <SignUp/>} />
          <Route exact path='/contactus' render={() => <ContactUs/>} />
          <Route exact path='/faq' render={() => <FAQ/>} />
          <Route exact path='/careers' render={() => <Careers/>} />
          <Route exact path='/meettheteam' render={() => <MeetTheTeam/>} />


        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;