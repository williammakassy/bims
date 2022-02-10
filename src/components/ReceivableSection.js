import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const ReceivableSection = ({ title }) => {
  return (
      <div style={{ marginTop: '5rem' }}>
          <Container>
              <h4>{ title }</h4>
          <Table striped bordered hover style={{ marginTop: '5rem' }} responsive="sm">
            <thead className='text-center'>
                <th>#</th>
                <th>Customer Name</th>
                <th>Update</th>

            </thead>
            <tbody className='text-center'>
                <tr>
                <td>1</td>
                <td>Counter Book</td>
                <td><Button variant='info'>Update</Button></td>
                </tr>

                <tr>
                <td>2</td>
                <td>Counter Book</td>
                <td><Button variant='info'>Update</Button></td>
                </tr>

                <tr>
                <td>3</td>
                <td>Counter Book</td>
                <td><Button variant='info'>Update</Button></td>
                </tr>

                <tr>
                <td>4</td>
                <td>Counter Book</td>
                <td><Button variant='info'>Update</Button></td>
                </tr>
            </tbody>
            </Table>
          </Container>
      </div>
  )
};


ReceivableSection.defaultProps = {
    title: 'Receivable List'
}

export default ReceivableSection;