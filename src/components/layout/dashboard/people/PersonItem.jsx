import React from 'react';

function PersonItem(props) {
  return (
    <tr>
      <th>
        <label>
          <input type='checkbox' className='checkbox' />
        </label>
      </th>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-12 h-12'>
              <img
                src='/tailwind-css-component-profile-2@56w.png'
                alt='Avatar Tailwind CSS Component'
              />
            </div>
          </div>
          <div>
            <div className='font-bold'>{props.name}</div>
            <div className='text-sm opacity-50'>{props.location}</div>
          </div>
        </div>
      </td>
      <td>
        {props.company}
        <span className='badge badge-ghost badge-sm'>{props.occupation}</span>
      </td>
      <td>{props.date}</td>
      <th>
        <button className='btn btn-ghost btn-xs'>details</button>
      </th>
    </tr>
  );
}

export default PersonItem;
