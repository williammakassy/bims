import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './UpdateProductSection.css'
import Axios from 'axios'

const UpdateProductSection = () => {


    const [ productName, setProductName ] = useState('')
    const [ productQty, setProductQty ] = useState('')
    const [ productBuy, setProductBuy ] = useState('')
    const [ productSell, setProductSell ] = useState('')
    const [ id, setID ] = useState('')

    useEffect(() => {

        setID(localStorage.getItem('id'))
        setProductName(localStorage.getItem('productName'))
        setProductQty(localStorage.getItem('productQty'))
        setProductBuy(localStorage.getItem('productBuy'))
        setProductSell(localStorage.getItem('productSell'))

    }, [])
    

    const updateProductData = () => {
        Axios.put('http://localhost:3002/api/updateproduct', {
            id: id,
            productName: productName,
            productQty: productQty,
            productBuy: productBuy,
            productSell: productSell,
        })

        {
            updateProductData ? 
          window.alert('Product has been updated') : 
          window.alert('Failed, Try again')
        }
       
    }


  return (
        <Container className='container'>
            <form className="add-form">
              <div className="form-control">
                  <label>Product Name</label>
                  <input 
                    type='text' 
                    name='productName'
                    value={productName}
                    placeholder="Enter Product"
                    onChange={(e) => { setProductName(e.target.value) }}
                  >
                  </input>
                </div>


                <div className="form-control">
                    <label>Quantity</label>
                    <input 
                        type='number' 
                        name='productQty'
                        value={productQty}
                        onChange={(e) => { setProductQty(e.target.value) }}
                    >
                    </input>
                </div>

                <div className="form-control">
                    <label>Buy Price</label>
                    <input 
                        type='number'
                        name='productBuy'
                        value={productBuy} 
                        onChange={(e) => { setProductBuy(e.target.value) }}
                    >
                    </input>
                </div>

                <div className="form-control">
                    <label>Sell Price</label>
                    <input 
                        type='number'
                        name='productSell'
                        value={productSell}
                        onChange={(e) => { setProductSell(e.target.value) }} 
                    >
                    </input>
                </div>


                <input 
                    type='submit' 
                    onClick={updateProductData} 
                    value='Update Product' 
                    style={{backgroundColor: '#000' }} 
                    className="btn btn-block"
                >
                </input>

            </form>
        </Container>
  )
}

export default UpdateProductSection