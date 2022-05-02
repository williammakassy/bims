import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Container, Table, Button } from 'react-bootstrap';
import Axios from 'axios'

const ReceivableSection = ({ title }) => {

    const [ creditList, setCreditList ] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3002/api/getcreditsalereceivable').then((response) => {
            setCreditList(response.data)
        })
      }, [])


      const setReceivaleData = (data) => {
        let { id, productID, quantity, amount, saledate, customername, customerphone, productName } = data;
        localStorage.setItem('id', id);
        localStorage.setItem('productID', productID);
        localStorage.setItem('quantity', quantity);
        localStorage.setItem('amount', amount);
        localStorage.setItem('productName', productName);
        localStorage.setItem('saledate', saledate);
        localStorage.setItem('customername', customername);
        localStorage.setItem('customerphone', customerphone);
     }
     


  return (
      <div style={{ marginTop: '5rem' }}>
          <Container>
              <h4 className='text-center'>{ title }</h4>
          <Table id="example" striped bordered hover style={{ marginTop: '3rem' }} responsive="sm">
            <thead className='text-center'>
                <th>Customer Name</th>
                <th>Customer Phone</th>
                <th>Action</th>

            </thead>
            {creditList.map((val) => {
                return (
                    <tbody>
                    <tr>
                    <td>{val.customername}</td>
                    <td>{val.customerphone}</td>
                    <td className='text-center'>
                        <Link to='/madeniCustomer'>
                            <Button 
                                onClick={() => setReceivaleData(val)} 
                                variant='primary'
                            >
                                View detail
                            </Button>
                        </Link>
                    </td>
                    </tr>
                </tbody>
                )
            })}
            </Table>
          </Container>
      </div>
  )
};


ReceivableSection.defaultProps = {
    title: 'CUSTOMERS RECEIVABLES'
}

export default ReceivableSection;