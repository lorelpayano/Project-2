import React, { Component } from 'react';
import Recipes from './components/Recipes'
import {Switch, Route} from 'react-router-dom'
import Calculator from './components/Calculator'
import Navbar2 from './components/Navbar2'


class App extends Component {
  render() {
    return (
      <div>
        

      <Navbar2 />

        
        <Switch>
          <Route exact path='/recipes' render={() => <Recipes/>} />
          <Route exact path='/calculator' render={() => <Calculator/>} />

        </Switch>
      </div>
    );
  }
}

export default App;