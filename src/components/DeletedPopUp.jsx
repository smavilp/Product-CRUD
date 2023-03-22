import React from 'react';

const DeletedPopUp = ({closeDeletedPopUp}) => {
  return (
    <div className='DeletedPopUp'>
      <div className='DeletedPopUp__div'>
        <h3 className='DeletedPopUp__h3'>Product Deleted</h3>
        <p className='DeletedPopUp__p'>The product was deleted.</p>
        <button className='DeletedPopUp__btn' onClick={() => closeDeletedPopUp ()}>OK</button>
      </div>
    </div>
  );
};

export default DeletedPopUp;