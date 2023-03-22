import React from 'react';

const AddedPopUp = ({closeAddedPopUp}) => {
  return (
    
    <div className='AddedPopUp'>
      <div className='AddedPopUp__div'>
        <h3 className='AddedPopUp__h3'>Product Added</h3>
        <p className='AddedPopUp__p'>The product was added.</p>
        <button className='AddedPopUp__btn' onClick={() => closeAddedPopUp ()}>OK</button>
      </div>
    </div>
  );
};

export default AddedPopUp;