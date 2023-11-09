import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import TablePage from './Components/TablePage';
import MapComponent from './Components/MapComponent';
import './App.css';
import Layout from './Components/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<LoginPage/>}/>
            <Route path='/TablePage' element={<TablePage/>}/>
            <Route path='/MapComponent' element={<MapComponent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
