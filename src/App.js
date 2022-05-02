import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Sidebar  from './components/Sidebar';
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'
import Product from './components/pages/Product'
import Sales from './components/pages/Sales'
import Pos from './components/pages/Pos'
import Receivable from './components/pages/Receivable';
import Vendor from './components/pages/Vendor'
import Expenses from './components/pages/Expenses'
import Users from './components/pages/Users'
import UpdateVendor from './components/pages/UpdateVendor';
import UpdateProduct from './components/pages/UpdateProduct';
import UpdateExpenses from './components/pages/UpdateExpenses';
import MadeniCustomer from './components/pages/MadeniCustomer';

function App() {
  
  return (
    <>
    <Router>
    <Sidebar></Sidebar>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
        <Route exact path='/product' element={<Product/>}></Route>
        <Route exact path='/sales' element={<Sales/>}></Route>
        <Route exact path='/pos' element={<Pos/>}></Route>
        <Route exact path='/receivable' element={<Receivable/>}></Route>
        <Route exact path='/vendor' element={<Vendor/>}></Route>
        <Route exact path='/expenses' element={<Expenses/>}></Route>
        <Route exact path='/users' element={<Users/>}></Route>
        <Route exact path='/updatevendor' element={<UpdateVendor/>}></Route>
        <Route exact path='/updateproduct' element={<UpdateProduct/>}></Route>
        <Route exact path='/updateexpense' element={<UpdateExpenses/>}></Route>
        <Route exact path='/madenicustomer' element={<MadeniCustomer/>}></Route>
      </Routes>
    </Router>
    </>
    
  );
  
}



export default App;
