// import './App.css';
// import "./assets/boxicons-2.0.7/css/boxicons.min.css"
import "./assets/css//grid.css"
import "./assets/css/index.css"
import "./assets/css/theme.css"
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Customers />} />
          <Route path="orders" element={<Customers />} />
          <Route path="analytics" element={<Customers />} />
          <Route path="categories" element={<Customers />} />
          <Route path="discount" element={<Customers />} />
          <Route path="inventory" element={<Customers />} />
          <Route path="settings" element={<Customers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
