import React from 'react';
import PersonItem from './people/PersonItem';

function Navbar() {
  return (
    <div class='overflow-x-auto w-full'>
      <table class='table w-full'>
        <thead>
          <tr>
            <th>
              <label>
                <input type='checkbox' class='checkbox' />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <PersonItem />
          <PersonItem />
          <PersonItem />
        </tbody>
      </table>
    </div>
  );
}

export default Navbar;
