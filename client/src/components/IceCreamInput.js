import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addIceCream } from '../redux/actions/iceCream';

const IceCreamFlavors = ['Chocolate', 'Vanilla', 'Butterscotch', 'Pista'];

const IceCreamInput = () => {
  const [name, setName] = useState('');
  const [flavor, setFlavor] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addIceCream());
  };

  return (
    <div className='input'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            type='text'
            className='input-text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Ice Cream Name'
            autoFocus
          />
        </div>
        <div className='input-group'>
          <select
            name='flavor'
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
            placeholder='Choose a flavor'
            className='input-select'
          >
            {IceCreamFlavors.map((flavor) => (
              <option value={flavor}>{flavor}</option>
            ))}
          </select>
        </div>
        <div className='input-group'>
          <input
            type='number'
            className='input-text'
            name='price'
            value={price}
            min='0'
            max='100'
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Enter Ice Cream Price in $'
          />
        </div>
        <div className='input-group'>
          <input
            type='text'
            className='input-text'
            name='image-url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='Enter URL of the image'
          />
        </div>
        <div className='input-group'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default IceCreamInput;
