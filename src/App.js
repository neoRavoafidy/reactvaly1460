import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import TDB from "./components/Nav/TDB";
import Contact from "./components/Nav/Contact";
import List from "./components/List";
import Dep from "./components/Nav/Dep";
// import { Component } from 'react';

// import React,{useState,useEffect} from "react";
// import axios from "axios";



function App() {
  
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  // axios.get('/data')
  // .then(response => {
  //   setMessage(response.data.message)
  // })
  // .catch(err => {
  //   console.log(err)
  // })
      
  //   }, []);



    return (
      <div>

        <BrowserRouter>
            <Routes>
              <Route path="/" element={<TDB/>}></Route>
              <Route path="/Contact" element={<Contact/>}></Route>
              <Route path="/list" element={<List/>}></Route>
              <Route path="/Dep" element={<Dep/>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    );  
}
 

export default App;



