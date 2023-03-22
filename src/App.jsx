import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'
import ProductsForm from './components/ProductsForm'
import ProductsList from './components/ProductsList'
import AddedPopUp from './components/AddedPopUp'
import UpdatedPopUp from './components/UpdatedPopUp'
import ConfirmDelete from './components/ConfirmDelete'
import DeletedPopUp from './components/DeletedPopUp'

function App() {
  const [products, setProducts] = useState([])
  const [showAddedPopUp, setShowAddedPopUp ] = useState (false)
  const [showUpdatedPopUp, setShowUpdatedPopUp ] = useState (false)
  const [showForm, setShowForm ] = useState (false)
  const [showConfirmDelete, setShowConfirmDelete] = useState (false)
  const [productToBeEliminated, setProductToBeEliminated] = useState ("")
  const [showDeletedPopUp, setshowDeletedPopUp] = useState (false)
  const [productSelected, setProductSelected] = useState(null)

  const getProducts = () => {
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then(resp => setProducts(resp.data))
      .catch(error => console.error(error))
  } 

  useEffect(() => {
    getProducts()
  }, [])

  const addProduct = (productData) => {
    axios
      .post("https://products-crud.academlo.tech/products/", productData)
      .then(() => {
        getProducts()
        setShowAddedPopUp (true)
      })
      .catch(error => console.error(error))
    
    
  }

  const deleteProduct = () => {
    axios
      .delete(`https://products-crud.academlo.tech/products/${productToBeEliminated}/`)
      .then(() => {
        getProducts()
        setShowConfirmDelete(false)
        setshowDeletedPopUp(true)
      })
      .catch(error => console.error(error))
  }

  const selectProduct = (product) => {
    setProductSelected(product)
    setShowForm(true)
  }

  const updateProduct = (productData) => {
    axios
      .put(`https://products-crud.academlo.tech/products/${productData.id}/`, productData)
      .then(() => {
        getProducts()
        setShowUpdatedPopUp(true)
        setProductSelected(null)
      })
      .catch(error => console.error(error))
  }

  return (
    <div className="App">
      <header className='App__header'>
        <h1 className='App__h1'>Products</h1>
        <button className='App__btn' onClick={() => setShowForm(true)}>+ Add product</button>
      </header>
      <main>
        {showForm ? <ProductsForm addProduct = { (data) => addProduct(data)} productSelected = {productSelected} updateProduct = {(productData => updateProduct(productData))} closeForm = {() => setShowForm(false)}/>:null}
        <ProductsList 
          productsData = {products}
          selectProduct ={(product) => selectProduct(product)}
          openConfirmDelete = {() => setShowConfirmDelete(true)}
          productToBeEliminated ={(id) => setProductToBeEliminated(id)}
        />
      </main>
      {showAddedPopUp ? <AddedPopUp closeAddedPopUp = {() => setShowAddedPopUp(false) } /> : null}
      {showUpdatedPopUp ? <UpdatedPopUp closeUpdatedPopUp = {() => setShowUpdatedPopUp(false) } /> : null}
      {showConfirmDelete ? <ConfirmDelete closeConfirmDelete = {() => setShowConfirmDelete(false)} deleteProduct ={() => deleteProduct()} /> : null}
      {showDeletedPopUp ? <DeletedPopUp closeDeletedPopUp = {() => setshowDeletedPopUp(false)}/> : null}
    </div>
  )
}

export default App
