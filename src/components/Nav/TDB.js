import React from 'react';
import { Component } from 'react';
import Navbar from './Nav';
import axios from 'axios';


 class TDB extends Component {   

componentDidMount(){

    axios.get('F:/REACT/DocReact/23022023/src/components/Data.js')
    .then((response)=> {
      console.log(response);
    })
    .catch((error) =>{
      console.log(error);
    })
    .finally(function () {
    });

};

render(){
    return (
        <div>
            <Navbar/>
            <div className="container">
            <nav id="sidebarMenu" className="col-md-3 col-lg-1 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>REPORTING</span>
          
            <span data-feather="plus-circle"></span>
          
        </h6>
          <li className="nav-item">

            
          </li>
          <li className="nav-item">
            
              <span data-feather="file"></span>
              Graphique
            
          </li>
          <li className="nav-item">
            
              <span data-feather="shopping-cart"></span>
              Journalière
            
          </li>
          <li className="nav-item">
            
              <span data-feather="users"></span>
              Hebdomadaire
            
          </li>
          <li className="nav-item">
            
              <span data-feather="bar-chart-2"></span>
              Réclamation
            
          </li>
          <li className="nav-item">
            
              <span data-feather="layers"></span>
              Tâche à faire
            
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Statistique</span>
          
            <span data-feather="plus-circle"></span>
          
        </h6>
        <ul className="nav flex-column mb-2">

          <li className="nav-item">
            
              <span data-feather="file-text"></span>
              Mensuel
            
          </li>
          <li className="nav-item">
            
              <span data-feather="file-text"></span>
              Annuel
            
          </li>
        </ul>
      </div>
    </nav>
        </div>
        </div>
    );
}
}

export default TDB;
