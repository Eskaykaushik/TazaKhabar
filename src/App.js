
import './App.css';
import News from './components/News';

import {
  BrowserRouter, Routes,Route,
  
} from "react-router-dom";

import React, { Component } from 'react'
import NavBar from './components/NavBar';



export default class App extends Component {
 
  render() {
    return (
      <div>
        
      <NavBar/>
      
       

    <BrowserRouter>       
      <Routes>
      <Route path="/" element={<News/>}/>
        <Route path="/sports" element={<News category="sports"/>}/>
        <Route path="/business" element={<News category="business"/>}/>
        <Route path="/science" element={<News category="science"/>}/>
        <Route path="/entertainment" element={<News category="entertainment"/>}/>
        <Route path="/technology" element={<News category="technology"/>}/>
        <Route path="/health" element={<News category="health"/>}/>
      </Routes>
      </BrowserRouter>
      

      
      </div>
    )
  }
}


