import React, { Component } from 'react';
import './App.css';

//Pages
import ViewMatchsPage from './Components/view-matchs/view-matchs';

//Containers
import HomeContainer from './Containers/HomeContainer';
import AddTeamContainer from './Containers/AddTeamContainer';
import ViewMatchsContainer from './Containers/ViewMatchsContainer';
import HandleMatchContainer from './Containers/HandleMatchContainer';
import GenerateBracketContainer from './Containers/GenerateBracketContainer';
import GameOverContainer from './Containers/GameOverContainer';

//Import Routing
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
               <Route exact path="/" component={HomeContainer}/>
               <Route path='/add-team' component = {AddTeamContainer}/>
               <Route path = '/view-matchs' component = {ViewMatchsContainer}/>
               <Route path = '/handle-match' component = {HandleMatchContainer}/>
               <Route path = '/generate-bracket' component = {GenerateBracketContainer}/>
               <Route path = '/game-over' component = {GameOverContainer}/>
        </div>
        </Router>

      </div>
    );
  }
}

export default App;
