import React from 'react';
import './App.css';
import AddPost from './components/addPost';
import Headers from './components/Header';
import Home from './components/Home';
import Post from './components/posts';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Headers/>
      <Home/>
      <Switch>
       <Route exact path="/posts">
         <Post/>
       </Route>
       <Route exact path="/new">
         <AddPost/>
       </Route>
       
      </Switch>

    </div>
  );
}

export default App;
