import React from 'react';
import PersonItem from './people/PersonItem';

function Navbar() {
  return (
    <div className='overflow-x-auto w-full'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <PersonItem
            name='Kevin Tan'
            location='Canada'
            company='University of British Columbia'
            occupation='student'
            date='August 25, 2022'
          />
          {/* <PersonItem
            name={'Kevin Tan'}
            location={'Canada'}
            company={'University of British Columbia'}
            occupation={'student'}
            date={'August 25, 2022'}
          />
          <PersonItem
            name={'Kevin Tan'}
            location={'Canada'}
            company={'University of British Columbia'}
            occupation={'student'}
            date={'August 25, 2022'}
          /> */}
        </tbody>
      </table>
    </div>
  );
}

export default Navbar;
