import React from 'react';
import './App.css';
import Header from './components/Header';
import Movie from './pages/Movie';
import Home from './pages/Home';
import Search from './pages/Search';
import { Container } from 'reactstrap';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/movie/:id" component={Search} />
          </Switch>
        </Container>
      </div>
    </Router >
  );
}



/* http://www.omdbapi.com/?i=tt3896198&apikey=925c18c6 */

export default App;
