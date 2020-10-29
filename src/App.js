import React, { createContext, useState } from 'react';
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
import LogIn from './Component/LogIn/LogIn';
import AllPatients from './Component/AllPatient/AllPatient';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
const [logInUser, seLogInUser] = useState({});
  return (
    <userContext.Provider value={[logInUser,seLogInUser]}>
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
         <PrivateRoute path="/patient">
         <AllPatients></AllPatients>
         </PrivateRoute>
         <Route path="/login">
         <LogIn></LogIn>
         </Route>
         <Route path="/dashbord/appointment">
         <Dashbord></Dashbord>
         </Route>
      </Switch>
 </Router>
 </userContext.Provider>
  );
}

export default App;
