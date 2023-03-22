import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

const ProductsForm = ({addProduct, productSelected, updateProduct, closeForm}) => {
  const { register, handleSubmit, reset, formState: {errors} } = useForm();

  useEffect(() => {
    if (productSelected){
      reset(productSelected)
    } else {
      emptyForm
    }
  }, [productSelected])
  


  const emptyForm = () => {
    reset({

      name: "",
      category: "",
      price: "",
      isAvailable: false

    })
  }

  const submit = data => {
    if (productSelected){
      updateProduct(data)
      emptyForm()
    } else {
      addProduct (data)
      emptyForm()
    }
  }

  return (
    <div className='ProductsForm'>
      <div className='ProductsForm__container'>
        <button className='ProductsForm__btn' onClick={() => closeForm ()}>
          <i className='bx bx-x bx-sm'></i>
        </button>
        <h2 className='ProductsForm__h2'>New product</h2>
        <form className='ProductsForm__form' onSubmit={handleSubmit(submit)}>
          <div className='ProductsForm__div'>
            <label htmlFor="name" className='ProductsForm__label'>Product name</label>
            <input type="text" id='name' className='ProductsForm__input' {...register("name", {required: true})}/>
            {errors.name?.type === "required" && <span className='ProductsForm__span' role="alert">This field is required</span>}
          </div>
          <div className='ProductsForm__div'>
            <label htmlFor="category" className='ProductsForm__label'>Category</label>
            <input type="text" id='category' className='ProductsForm__input' {...register("category", {required: true})}/>
            {errors.name?.type === "required" && <span className='ProductsForm__span' role="alert">This field is required</span>}
          </div>
          <div className='ProductsForm__div'>
            <label htmlFor="price" className='ProductsForm__label'>Price</label>
            <input type="text" id='price' className='ProductsForm__input' {...register("price", {required: true})}/>
            {errors.name?.type === "required" && <span className='ProductsForm__span' role="alert">This field is required</span>}
          </div>
          <div className='ProductsForm__div'>
            <label htmlFor="availability" className='ProductsForm__label ProductsForm__label--availability'>Availability</label>
            <input type="checkbox" id='availability' className='ProductsForm__input ProductsForm__input--availability' {...register("isAvailable")}/>
          </div>
          <input type="submit" className='ProductsForm__input ProductsForm__input--submit' value="Add product" />
        </form>
      </div>
    </div>
  );
};

export default ProductsForm;