import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Table, Row, Col } from 'react-bootstrap';
import './SalesSection.css'
import Axios  from 'axios';

const SalesSection = ({ titleView, titleClose }) => {

    const [showCreditTable, setShowCreditTable] = useState(false)

    const onAdd = () => setShowCreditTable(!showCreditTable)

    const showAdd = showCreditTable 

   
    const [ cashList, setCashList ] = useState([])

    const [ creditList, setCreditList ] = useState([])


    
    useEffect(() => {
        Axios.get('http://localhost:3002/api/getcashsale').then((response) => {
            setCashList(response.data)
        })
      }, [])


      useEffect(() => {
        Axios.get('http://localhost:3002/api/getcreditsale').then((response) => {
            setCreditList(response.data)
        })
      }, [])

  return (
      <Container>
          <div style={{ marginTop: '5rem' }}>
              <Row>
                  <Col>
                  <Button onClick={onAdd} 
                    className='btn' style={ btnStyle }> 
                    { showAdd ? titleClose : titleView }
                    </Button>
                    </Col>
                  <Col></Col>
              </Row>


              {showCreditTable ?   <Table striped bordered hover style={{ marginTop: '5rem' }} responsive="sm">
                <thead className='text-center'>
                    <th>Product Name</th>
                    <th>Qty</th>
                    <th>Sell Price</th>
                    <th>Total Amount</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>
                {creditList.map((val) => {
                return (
                <tbody>
                    <tr>
                    <td>{val.productName}</td>
                    <td>{val.quantity}</td>
                    <td>{val.amount}</td>
                    <td>{val.amount * val.quantity}</td>
                    <td className='text-center'><Button variant='info'>Update</Button></td>
                    <td className='text-center'><Button variant='danger'>Delete</Button></td>
                    </tr>
                </tbody>

                )
                })}
                </Table>
                
            : 
          
                <Table  striped bordered hover style={{ marginTop: '5rem' }} responsive="sm">
                <thead className='text-center'>
                    <th>Product Name</th>
                    <th>Qty</th>
                    <th>Sell Price</th>
                    <th>Total Amount</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>

                {cashList.map((val) => {
                return (

                <tbody>
                    <tr>
                    <td>{val.productName}</td>
                    <td>{val.quantity}</td>
                    <td>{val.amount}</td>
                    <td>{val.amount * val.quantity}</td>
                    <td className='text-center'><Button variant='info'>Update</Button></td>
                    <td className='text-center'><Button variant='danger'>Delete</Button></td>
                    </tr>
                </tbody>

                )
                })}

                </Table>
                
            }


              
          </div>
      </Container>
  )
};

SalesSection.defaultProps = {
    titleClose: 'View Cash Sale',
    titleView: 'View Credit Sale'
}

const btnStyle = {
    backgroundColor: '#000',
}

export default SalesSection;