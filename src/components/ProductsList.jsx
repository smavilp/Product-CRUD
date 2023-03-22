import React from 'react';

const ProductsList = ({productsData, productToBeEliminated, selectProduct, openConfirmDelete}) => {
  return (
    <ul className='ProductsList'>
      {productsData.map (product => (
              <li className='ProductsList__li' key={product}>
                <h2 className='ProductsList__h2'>{product.name}
                </h2>
                <hr className='ProductsList__hr' />
                <div className='ProductsList__div ProductsList__div--category'>
                  <span className='ProductsList__span ProductsList__span--subtitle'>Category</span>
                  <span className='ProductsList__span ProductsList__span--text'>{product.category}</span>
                </div>
                <div className='ProductsList__div ProductsList__div--price'>
                  <span className='ProductsList__span ProductsList__span--subtitle'>Price</span>
                  <span className='ProductsList__span ProductsList__span--text'>{product.price}</span>
                </div>
                <hr className='ProductsList__hr' />
                <div className='ProductsList__div ProductsList__div--sub'>
                  {product.isAvailable?<span className='ProductsList__span ProductsList__span--available'>Available</span>:<span className='ProductsList__span ProductsList__span--not-available'> Not Available</span>}
                  <div className='ProductsList__div ProductsList__div--btns'>
                    <button className='ProductsList__btn ProductsList__btn--delete' onClick={() => {productToBeEliminated(product.id), openConfirmDelete()}}>
                      <i className='bx bx-trash'></i>
                    </button>
                    <button className='ProductsList__btn ProductsList__btn--edit' onClick={() => selectProduct(product)} >
                      <i class='bx bx-pencil' ></i>
                    </button>
                  </div>
                </div>
            </li>
      ))}
    </ul>
  );
};

export default ProductsList;