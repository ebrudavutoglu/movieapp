import React from 'react';
import './App.css';
import Header from './components/Header';
import Movie from './pages/Movie';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import { Container } from 'reactstrap';


import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Container>
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="*" component={NotFound} status={404} />
            <Redirect to="/404" />
          </Switch>
        </Container>
      </div>
    </Router >
  );
}



/* http://www.omdbapi.com/?i=tt3896198&apikey=925c18c6 */

export default App;
