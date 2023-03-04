import React from 'react';
import FromDatarow from './Datarow';

const Table = () => {
        return (
          <table id="customers">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Pays</th>
              </tr>
            </thead>
            <tbody>
              <FromDatarow/>
            </tbody>
        </table>
        );
}

export default Table;
