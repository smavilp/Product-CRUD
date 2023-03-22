import React from 'react';

const UpdatedPopUp = ({closeUpdatedPopUp}) => {
  return (
    <div className='UpdatedPopUp'>
      <div className='UpdatedPopUp__div'>
        <h3 className='UpdatedPopUp__h3'>Product Updated</h3>
        <p className='UpdatedPopUp__p'>The product was updated.</p>
        <button className='UpdatedPopUp__btn' onClick={() => closeUpdatedPopUp ()}>OK</button>
      </div>
    </div>
  );
};

export default UpdatedPopUp;