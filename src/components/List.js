import React from 'react';
import Navbar from './Nav/Nav';
import employeData from '../employeData.json';
import {useState} from "react";

const List = () => {
    const [show,setShow] = useState("Data");
    function handleOnClick(item) {
      setShow(item);
      // console.log(show);
    };
    return (
        <div>
        <Navbar/>
        <div className="container" id='contList'>
        <div className="row">
            <div className="col-3">
           
            <form>
  <div class="form-group">
  <h2>Liste des employés</h2> 
    <select multiple class="form-control" id="exampleFormControlSelect2">
                    {
                    employeData.users.map((item,i)=>(

      <option  key={i} onClick={()=>handleOnClick(item)}>{(item.Lastname)?item.Lastname:null}</option>

                    ))
                    }
                     </select>
           </div>

</form>  </div>
            <div className="col-2"></div>
          <div className="col-7">
                <h2>Détail de l'employé</h2> 
                {show &&    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250">
                  <div className="col p-4 d-flex flex-column">
                    {show &&  <div className="mb-3">Nom : <span>{show.name}</span> </div>}
                    {show &&  <div className="mb-3">Prénom : <span>{show.Lastname}</span> </div>}
                    {show &&  <div className="mb-3 ">Département : <span>{show.department}</span> </div>}
                    {show &&  <div className="mb-3 ">Matricule : <span>{show.matricule}</span> </div> }                       
                    {show &&  <div className="mb-3 ">Age : <span>{show.age} ans</span> </div> }                       
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" ectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#2CAEE2"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                  </div>
                </div>}
            </div>
          </div>
          </div>
          </div>
        
       
      );
  }

export default List;
