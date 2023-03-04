import React from 'react';
import data from './Data';

const FromDatarow = () => {
    return data.map((item,i) =>{
        return (
            <tr key={i}>
              <td>{item.Name}</td>
              <td>{item.LastName}</td>
              <td>{item.Country}</td>
            </tr>         
        );});
}

export default FromDatarow;
