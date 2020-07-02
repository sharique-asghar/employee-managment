import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
// import CreateEmployee from './components/CreateEmployee';
import Error from './components/Error';
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <div>
         <Switch>
          <Route path="/" component={EmployeeList} exact/>
          {/* <Route path="/create" component={CreateEmployee}/> */}
         <Route component={Error}/>
        </Switch>
     </div>
   </BrowserRouter>
 );
}

export default App;
