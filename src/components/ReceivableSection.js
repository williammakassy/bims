import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Axios from 'axios'

const ReceivableSection = ({ title }) => {

    const [ creditList, setCreditList ] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3002/api/getcreditsale').then((response) => {
            setCreditList(response.data)
        })
      }, [])

  return (
      <div style={{ marginTop: '5rem' }}>
          <Container>
              <h4>{ title }</h4>
          <Table striped bordered hover style={{ marginTop: '5rem' }} responsive="sm">
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
                    <td className='text-center'><Button variant='info'>More Details</Button></td>
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
    title: 'Receivable List'
}

export default ReceivableSection;