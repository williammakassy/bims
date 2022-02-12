import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Container, Table } from 'react-bootstrap';
import './ProductSection.css'
import Axios from 'axios'

const ProductSection = ({ title, titleAdd, titleClose}) => {

    const [ productName, setProductName ] = useState("")
    const [ productQty, setProductQty ] = useState("")
    const [ productBuy, setProductBuy ] = useState("")
    const [ productSell, setProductSell ] = useState("")

    const [productList, setProductList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3002/api/getproduct').then((response) => {
            setProductList(response.data)
        })
    }, [])
    

    const submitBtn = () => {
        Axios.post('http://localhost:3002/api/insertproduct', {
            productName: productName,
            productQty: productQty,
            productBuy: productBuy,
            productSell: productSell,
        });

        setProductList([
            ...setProductList, 
            {
                productName: productName,
                productQty: productQty,
                productBuy: productBuy,
                productSell: productSell
            },
        ])

    }



    const [showProductForm, setShowProductForm] = useState(false)

    const onAdd = () => setShowProductForm(!showProductForm)

    const showAdd = showProductForm 

  return (
      <Container className='container'>
      <header className='header'>
          <h1>{ title }</h1>
          <Button 
            onClick={onAdd} 
            className='btn' 
            style={ btnStyle }>
            { showAdd ? titleClose : titleAdd }
          </Button>
            {showProductForm && <form className="add-form">
              <div className="form-control">
                  <label>Product Name</label>
                  <input 
                    type='text' 
                    name='productName'
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
                        onChange={(e) => { setProductQty(e.target.value) }}
                    >
                    </input>
                </div>

                <div className="form-control">
                    <label>Buy Price</label>
                    <input 
                        type='number' 
                        onChange={(e) => { setProductBuy(e.target.value) }}
                    >
                    </input>
                </div>

                <div className="form-control">
                    <label>Sell Price</label>
                    <input 
                        type='number'
                        onChange={(e) => { setProductSell(e.target.value) }} 
                    >
                    </input>
                </div>


                <input 
                    type='submit' 
                    onClick={submitBtn} 
                    value='Add Product' 
                    style={{backgroundColor: '#000' }} 
                    className="btn btn-block"
                >
                </input>

            </form>}


            <Table striped bordered hover style={{ marginTop: '5rem' }} responsive="sm">
            <thead className='text-center'>
                <th>#</th>
                <th>Product</th>
                <th>Stock-In</th>
                <th>Stock-out</th>
                <th>Stock-Rem</th>
                <th>Buy Price</th>
                <th>Sell Price</th>
                <th>Update</th>
                <th>Delete</th>
            </thead>

            {productList.map((val) => {
                return (
                    <tbody className='text-center'>
                    <tr>
                    <td>{val.id}</td>
                    <td>{val.productName}</td>
                    <td>{val.productQty}</td>
                    <td>20</td>
                    <td>80</td>
                    <td>{val.productBuy}</td>
                    <td>{val.productSell}</td>
                    <td><Button variant='info'>Edit</Button></td>
                    <td><Button variant='danger'>Delete</Button></td>
                    </tr>
                </tbody>
                )
            })}
         
            </Table>
      </header>
      </Container>
  )
};

ProductSection.defaultProps = {
    title : '',
    titleAdd : 'Add Product',
    titleClose: 'Close'
}

const btnStyle = {
    backgroundColor: '#000',
}

export default ProductSection;