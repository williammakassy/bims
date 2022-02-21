import React, { useState, useEffect } from 'react';
import { Card, Row, Container, Button, Form } from 'react-bootstrap';
import Axios from 'axios'


const PosSection = () => {

    const [ productID, setProductID ] = useState("")
    const [ quantity, setQuantity ] = useState("")
    const [ amount, setAmount ] = useState("")
    const [ saledate, setSaleDate ] = useState("")

    const [productList, setProductList] = useState([])

    const [ productQty, setProductQty ] = useState('')
    const [ id, setID ] = useState('')

    
    useEffect(() => {
        Axios.get('http://localhost:3002/api/getproduct').then((response) => {
            setProductList(response.data)
        })
    }, [])



    const submitBtn = () => {
        Axios.post('http://localhost:3002/api/insertcashsale', {
            productID: productID,
            quantity: quantity,
            amount: amount,
            saledate: saledate,
        });

        Axios.put('http://localhost:3002/api/updateqty',{
            id: id,
            productQty: productQty,
            productID: productID,
            quantity: quantity,
        })
        
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
                                {productList.map((val) => {
                                    <Form.Control name='productQty' type='number' value={val.productQty}></Form.Control>
    
                                })}
                                 {productList.map((val) => {
                                    <Form.Control name='id' type='hidden' value={val.id}></Form.Control>
    
                                })}
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
 
                <Card>
                    <Card.Header className='text-center'><h6>POINT OF SALE - CREDIT</h6></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Form>
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>PRODUCT NAME</Form.Label>
                                    <Form.Select> 
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
                                    <Form.Control type='number' name='quantity'></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Note: Enter product quantity
                                    </Form.Text>
                                </Form.Group>
                
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>AMOUNT</Form.Label>
                                    <Form.Control type='text' name='amount'></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Note: currency in Tanzanian shillings (Tzs)
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>DATE</Form.Label>
                                    <Form.Control type='date'></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Note: Select the appropriate date.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>CUSTOMER NAME</Form.Label>
                                    <Form.Control type='text' placeholder='Enter Customer name'></Form.Control>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>CUSTOMER PHONE NUMBER</Form.Label>
                                    <Form.Control type='text' placeholder='Enter Customer Phone Number'></Form.Control>
                                </Form.Group>

                                <Button variant='primary' type='submit'>MAKE CREDIT SALE</Button>
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
