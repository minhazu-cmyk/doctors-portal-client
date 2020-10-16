import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Appointment from './Component/Appointment/Appointment/Appointment';
import Dashbord from './Component/Dashboard/Dashbord/Dashbord';
import AddDoctor from './Component/AddDoctor/AddDoctor/AddDoctor';

function App() {
  return (
    <Router>
      <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/appointment">
         <Appointment></Appointment>
         </Route>
         <Route path="/addDoctor">
         <AddDoctor></AddDoctor>
         </Route>

         <Route path="/dashbord/appointment">
         <Dashbord></Dashbord>
         </Route>
      </Switch>
 </Router>
  );
}

export default App;
