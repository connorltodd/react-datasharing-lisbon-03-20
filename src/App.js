import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import AboutUser from './components/AboutUser';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/about" component={AboutUser} />
      </Switch>
    </div>
  );
}

export default App;
