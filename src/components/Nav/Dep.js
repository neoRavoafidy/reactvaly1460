import Navbar from './Nav';
import React from 'react';
import employeData from '../../employeData.json';

function RowDep({dep}) {

          return (
              <tr>
                <th id='Dep'>{dep.department}</th>
              </tr>
        )
        }
function RowUser({user}) {
            return (
                <tr>
                  <td>{user.name} {user.Lastname}</td>
                  <td><center>{user.matricule}</center></td>
                </tr> 
            )
            }

function Dep() {

const rows = []
let lastDepart = []

for (let i = 0; i < employeData.users.length; i++) {

  if (employeData.users[i].department!==lastDepart) {
    lastDepart = employeData.users[i].department
    rows.push(<RowDep dep={employeData.users[i]}/>)
   
  }
    rows.push(<RowUser user={employeData.users[i]}/>)
  
}

console.log(lastDepart);

    return (
      <div> 
        <Navbar/>
        <div className='container'>
        <div className="row">
          <div className="col-8">
            <table id="customers">
              <thead>
                <tr>
                  <th>Nom et Prénom / Département</th>
                  <th>Matricule</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dep;


