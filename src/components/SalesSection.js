import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Table, Row, Col } from 'react-bootstrap';
import './SalesSection.css'

const SalesSection = ({ titleView, titleClose }) => {

    const [showCreditTable, setShowCreditTable] = useState(false)

    const onAdd = () => setShowCreditTable(!showCreditTable)

    const showAdd = showCreditTable 


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


              {showCreditTable ? <Table striped bordered hover style={{ marginTop: '5rem' }} responsive="sm">
                <thead className='text-center'>
                    <th>#</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Sell Price</th>
                    <th>Total Amount</th>
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
                    <td><Button variant='info'>Update</Button></td>
                    <td><Button variant='danger'>Delete</Button></td>
                    </tr>

                    <tr>
                    <td>2</td>
                    <td>Counter Book</td>
                    <td>100</td>
                    <td>20</td>
                    <td>80</td>
                    <td><Button variant='info'>Update</Button></td>
                    <td><Button variant='danger'>Delete</Button></td>
                    </tr>

                    <tr>
                    <td>3</td>
                    <td>Counter Book</td>
                    <td>100</td>
                    <td>20</td>
                    <td>80</td>
                    <td><Button variant='info'>Update</Button></td>
                    <td><Button variant='danger'>Delete</Button></td>
                    </tr>
                </tbody>
                </Table>
                
            : 
            <Table striped bordered hover style={{ marginTop: '5rem' }} responsive="sm">
                <thead className='text-center'>
                    <th>#</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Sell Price</th>
                    <th>Discount</th>
                    <th>Total Amount</th>
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
                    <td><Button variant='info'>Update</Button></td>
                    <td><Button variant='danger'>Delete</Button></td>
                    </tr>
                </tbody>
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