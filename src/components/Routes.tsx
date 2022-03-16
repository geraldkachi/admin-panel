import React from 'react'
import { Routes as Switch, Route, Link } from "react-router-dom";
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';


const Routes = () => {
  return (
    <div>
        <h1>Welcome to React Router!</h1>
      <Switch>
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<Customers />} />
      </Switch>
    </div>
  )
}

export default Routes