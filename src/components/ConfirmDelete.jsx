import React from 'react';

const ConfirmDelete = ({closeConfirmDelete,  deleteProduct}) => {
  return (
    <div className='ConfirmDelete'>
      <div className='ConfirmDelete__div'>
        <h3 className='ConfirmDelete__h3'>Delete product</h3>
        <p className='ConfirmDelete__p'>Are you sure you want to delete the product?</p>
        <div className='ConfirmDelete__div--btns'>
          <button className='ConfirmDelete__btn' onClick={() => deleteProduct()}>Yes</button>
          <button className='ConfirmDelete__btn' onClick={() => closeConfirmDelete ()}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;