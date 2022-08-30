import React from 'react';
import { useState } from 'react';

function AddEntry() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <button
        className='btn btn-primary'
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        Add new entry +
      </button>
      {isActive && (
        <div>
          <div className='form-control w-full max-w-xs absolute z-50 card bg-white py-0.5'>
            <label className='label'>
              <span className='label-text'>What is your name?</span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              class='input input-ghost w-full max-w-xs bg-white'
            />
          </div>
          {/* <div className='form-control w-full max-w-xs absolute z-50'>
            <label className='label'>
              <span className='label-text'>What is your name?</span>
              <span class='label-text-alt'>Alt label</span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              class='input input-bordered w-full max-w-xs'
            />
            <label class='label'>
              <span class='label-text-alt'>Alt label</span>
              <span class='label-text-alt'>Alt label</span>
            </label>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default AddEntry;
