import React from 'react';
import { useSelector } from 'react-redux';

const IceCreams = () => {
  const { iceCreams } = useSelector((store) => store.iceCream);

  let iceCreamsShow = iceCreams.map((iceCream) => (
    <div className='icecream-card'>
      <div className='header'>
        <h2>{iceCream.name}</h2>
      </div>
      <div className='picture'>
        <img src={iceCream.url} alt='Ice Cream pic'></img>
      </div>
      <div className='flavor'>{iceCream.flavor}</div>
      <div className='price'>{iceCream.price}</div>
    </div>
  ));

  return (
    <div className='showcase'>
      {iceCreams.length > 0 ? (
        { iceCreamsShow }
      ) : (
        <div className='center'>
          <h1>No Ice Creams right now</h1>
        </div>
      )}
    </div>
  );
};

export default IceCreams;
