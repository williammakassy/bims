import React, { useState, useEffect } from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import './MadeniSection.css'

const MadeniSection = () => {

    const [ productID, setProductID ] = useState('')
    const [ quantity, setQuantity ] = useState('')
    const [ productName, setProductName ] = useState('')
    const [ amount, setAmount ] = useState('')
    const [ saledate, setSaleDate ] = useState('')
    const [ customername, setCustomerName ] = useState('')
    const [ customerphone, setCustomerPhone ] = useState('')
    const [ id, setID ] = useState('')

    useEffect(() => {

        setID(localStorage.getItem('id'))
        setProductID(localStorage.getItem('productID'))
        setProductName(localStorage.getItem('productName'))
        setQuantity(localStorage.getItem('quantity'))
        setAmount(localStorage.getItem('amount'))
        setSaleDate(localStorage.getItem('saledate'))
        setCustomerName(localStorage.getItem('customername'))
        setCustomerPhone(localStorage.getItem('customerphone'))

    }, [])



  return (
    <div style={{ marginTop: '5rem' }}>
        <Container className='container'>
            <Card>
                <Card.Header className='text-center'><h3>&nbsp;{customername}&nbsp;-&nbsp;{customerphone}</h3></Card.Header>
                <Card.Body>
                        <Table striped bordered hover responsive="sm">
                            <thead>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Total</th>
                                <th>Date</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{productName}</td>
                                    <td>{quantity}</td>
                                    <td>{amount}</td>
                                    <td>{amount * quantity}</td>
                                    <td>{saledate}</td>
                                </tr>
                            </tbody>
                        </Table>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default MadeniSection