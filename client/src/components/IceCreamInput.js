import React from 'react';

const IceCreamFlavors = ['Chocolate', 'Vanilla', 'Butterscotch', 'Pista'];

const IceCreamInput = () => {
  return (
    <div className='input'>
      <form>
        <div className='input-group'>
          <input
            type='text'
            class='input-text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Ice Cream Name'
            autoFocus
          />
        </div>
        <div className='input-group'>
          <select name='flavor' className='input-select'>
            {IceCreamFlavors.map((flavor) => (
              <option value={flavor}>{flavor}</option>
            ))}
          </select>
        </div>
        <div className='input-group'>
          <input
            type='number'
            class='input-text'
            name='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Enter Ice Cream Price in $'
          />
        </div>
        <div className='input-group'>
          <input
            type='text'
            class='input-text'
            name='image-url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='Enter URL of an image'
          />
        </div>
      </form>
    </div>
  );
};

export default IceCreamInput;
