import React, { useState, useEffect } from 'react';
import { Card, Row, Container, Button, Form } from 'react-bootstrap';
import Axios from 'axios'


const PosSection = () => {

    const [ productID, setProductID ] = useState("")
    const [ quantity, setQuantity ] = useState("")
    const [ amount, setAmount ] = useState("")
    const [ saledate, setSaleDate ] = useState("")
    const [ customername, setCustomerName] = useState("")
    const [ customerphone, setCustomerPhone ] = useState("")

    const [productList, setProductList] = useState([])

 

    
    useEffect(() => {
        Axios.get('http://localhost:3002/api/getproduct').then((response) => {
            setProductList(response.data)
        })
    }, [])


    // CASH SALE BUTTON ACTION

    const submitBtn = () => {
        Axios.post('http://localhost:3002/api/insertcashsale', {
            productID: productID,
            quantity: quantity,
            amount: amount,
            saledate: saledate,
        });
        
        setProductList([
            ...setProductList, 
            {
                productID: productID,
                quantity: quantity,
                amount: amount,
                saledate: saledate,
            },
        ])
      
    }



    // CREDIT SALE BUTTON ACTION

    const submitBtnCredit = () => {
        Axios.post('http://localhost:3002/api/insertcreditsale', {
            productID: productID,
            quantity: quantity,
            amount: amount,
            saledate: saledate,
            customername: customername,
            customerphone: customerphone,
        });
        
        setProductList([
            ...setProductList, 
            {
                productID: productID,
                quantity: quantity,
                amount: amount,
                saledate: saledate,
                customername: customername,
                customerphone: customerphone,
            },
        ])
      
    }

  return (
      <div style={{ marginTop: '5rem' }}>
          <Container>
              <h1 className='text-center'>POINT OF SALE</h1>
              <Row xs={1} md={2} className='g-4' style={{ marginTop: '2rem' }}>
                <Card>
                    <Card.Header className='text-center'><h6>POINT OF SALE - CASH</h6></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Form>
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>PRODUCT NAME</Form.Label>
                                    <Form.Select name='productID'
                                    onChange={(e) => { setProductID(e.target.value)}}
                                    > 
                                        {productList.map((val) => {
                                            return (
                                                <option value={val.id}>{val.productName}&nbsp;@&nbsp;{val.productSell}</option>
                                            )
                                        })}
                                    </Form.Select>
                                    <Form.Text className='text-muted'>
                                        Please select the required product name.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>PRODUCT QTY</Form.Label>
                                    <Form.Control 
                                        type='number' 
                                        name='quantity'
                                        onChange={(e) => { setQuantity(e.target.value) }}
                                        ></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Note: Enter product quantity
                                    </Form.Text>
                                </Form.Group>
                
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>AMOUNT</Form.Label>
                                    <Form.Control 
                                        type='number' 
                                        name='amount'
                                        onChange={(e) => { setAmount(e.target.value) }}
                                        ></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Note: currency in Tanzanian shillings (Tzs)
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>DATE</Form.Label>
                                    <Form.Control 
                                        type='date'
                                        name='saledate'
                                        onChange={(e) => { setSaleDate(e.target.value) }}
                                        ></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Note: Select the appropriate date.
                                    </Form.Text>
                                </Form.Group>

                                <Button variant='primary' type='submit' onClick={submitBtn}>MAKE CASH SALE</Button>
                            </Form>
                              </Card.Text>
                    </Card.Body>
                </Card>


              {/* CREDIT POINT OF SALE  */}

                
 
                <Card>
                    <Card.Header className='text-center'><h6>POINT OF SALE - CREDIT</h6></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Form>
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>PRODUCT NAME</Form.Label>
                                    <Form.Select name='productID'
                                    onChange={(e) => { setProductID(e.target.value)}}
                                    > 
                                        {productList.map((val) => {
                                            return (
                                                <option value={val.id}>{val.productName}&nbsp;@&nbsp;{val.productSell}</option>
                                            )
                                        })}
                                    </Form.Select>
                                    <Form.Text className='text-muted'>
                                        Please select the required product name.
                                    </Form.Text>
                                </Form.Group>


                               
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>PRODUCT QTY</Form.Label>
                                    <Form.Control 
                                        type='number' 
                                        name='quantity'
                                        onChange={(e) => { setQuantity(e.target.value) }}
                                        ></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Note: Enter product quantity
                                    </Form.Text>
                                </Form.Group>
                
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>AMOUNT</Form.Label>
                                    <Form.Control 
                                        type='number' 
                                        name='amount'
                                        onChange={(e) => { setAmount(e.target.value) }}
                                        ></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Note: currency in Tanzanian shillings (Tzs)
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>DATE</Form.Label>
                                    <Form.Control 
                                        type='date'
                                        name='saledate'
                                        onChange={(e) => { setSaleDate(e.target.value) }}
                                        ></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Note: Select the appropriate date.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>CUSTOMER NAME</Form.Label>
                                    <Form.Control 
                                        type='text' 
                                        name='customername'
                                        onChange={(e) => { setCustomerName(e.target.value) }} 
                                        placeholder='Enter Customer name'
                                        ></Form.Control>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>CUSTOMER PHONE NUMBER</Form.Label>
                                    <Form.Control 
                                        type='text' 
                                        name='customerphone'
                                        onChange={(e) => { setCustomerPhone(e.target.value) }} 
                                        placeholder='Enter Customer Phone Number'></Form.Control>
                                </Form.Group>

                                <Button variant='primary' onClick={submitBtnCredit} type='submit'>MAKE CREDIT SALE</Button>
                            </Form>
                              </Card.Text>
                    </Card.Body>
                </Card>

              </Row>
          </Container>
      </div>
  )
};

export default PosSection;
