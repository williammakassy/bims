import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Container, Table } from 'react-bootstrap';
import './ProductSection.css'

const ProductSection = ({ title, titleAdd, titleClose}) => {


    const [showProductForm, setShowProductForm] = useState(false)

    const onAdd = () => setShowProductForm(!showProductForm)

    const showAdd = showProductForm 

    const onSubmit = (e) => {
        e.preventDefault()
    }

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
            {showProductForm && <form className="add-form" onSubmit={onSubmit}>
              <div className="form-control">
                  <label>Product Name</label>
                  <input 
                    type='text' 
                    placeholder="Enter Product">
                  </input>
                </div>


                <div className="form-control">
                    <label>Quantity</label>
                    <input 
                        type='number' 
                    >
                    </input>
                </div>

                <div className="form-control">
                    <label>Buy Price</label>
                    <input 
                        type='number' 
                    >
                    </input>
                </div>

                <div className="form-control">
                    <label>Sell Price</label>
                    <input 
                        type='number' 
                    >
                    </input>
                </div>


                <input type='submit' value='Add Product' style={{backgroundColor: '#000' }} className="btn btn-block"></input>
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
            <tbody className='text-center'>
                <tr>
                <td>1</td>
                <td>Counter Book</td>
                <td>100</td>
                <td>20</td>
                <td>80</td>
                <td>1800</td>
                <td>5000</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>

                <tr>
                <td>2</td>
                <td>Counter Book</td>
                <td>100</td>
                <td>20</td>
                <td>80</td>
                <td>1800</td>
                <td>5000</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>

                <tr>
                <td>3</td>
                <td>Counter Book</td>
                <td>100</td>
                <td>20</td>
                <td>80</td>
                <td>1800</td>
                <td>5000</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>

                <tr>
                <td>4</td>
                <td>Counter Book</td>
                <td>100</td>
                <td>20</td>
                <td>80</td>
                <td>1800</td>
                <td>5000</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>
            </tbody>
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