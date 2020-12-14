import './App.css';
import './New.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from './Component/List';
import Form from './Component/Form';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <h1>MAIN PAGE</h1>
      <div className="NavBar">
        <Router>
          <div>
            <nav>
              <ul>

                <Link to="/" className="link">Home</Link>

                <Link to="/Form" className="link">Form</Link>

                <Link to="/List" className="link">User List</Link>

              </ul>
            </nav>

            <Switch>
              <Route path="/List">
                <List />
              </Route>
              <Route path="/Form">
                <Form />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
