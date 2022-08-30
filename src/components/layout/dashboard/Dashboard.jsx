import React from 'react';
import PersonItem from './people/PersonItem';
import AddEntry from '../../shared/AddEntry';

function Navbar() {
  return (
    <div className='overflow-x-auto w-full'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Date Last Contacted</th>
            <th>
              <AddEntry />
            </th>
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
          <PersonItem
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
          />
        </tbody>
      </table>
    </div>
  );
}

export default Navbar;
