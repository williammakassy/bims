import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import './VendorSection.css'

const VendorSection = ({ titleClose, titleAdd }) => {


  const [showButton, setShowButton] = useState(false)

  const onShowAdd = () => setShowButton(!showButton);
  const showAddButton  = showButton;

  return (
        <Container className='container'>
        <header style={{ marginTop: '5rem' }} className='header'>
        <Button 
            onClick={onShowAdd} 
            className='btn' 
            style={ btnStyle }>
            { showAddButton ? titleClose : titleAdd }
        </Button>
            { showButton  && <form className="add-form">
              <div className="form-control">
                  <label>Vendor Name</label>
                  <input type='text' placeholder="Enter Product"></input>
                </div>


                <div className="form-control">
                    <label>Email</label>
                    <input type='email' placeholder='Your Email'>
                    </input>
                </div>

                <div className="form-control">
                    <label>Address</label>
                    <input type='text' placeholder='Your Address'></input>
                </div>

                <div className="form-control">
                    <label>Sell Price</label>
                    <input type='text' placeholder='Your Phone Number'>
                    </input>
                </div>

                <input type='submit' value='Add Vendor' style={{backgroundColor: '#000' }} className="btn btn-block"></input>
            </form>}
            
            <Table striped bordered hover style={{ marginTop: '5rem' }} responsive="sm">
            <thead className='text-center'>
                <th>#</th>
                <th>Vendor Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Update</th>
                <th>Delete</th>
            </thead>
            <tbody className='text-center'>
                <tr>
                <td>1</td>
                <td>Best Company ltd</td>
                <td>best@best.com</td>
                <td>Dar es salaam</td>
                <td>000000000</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>

                <tr>
                <td>2</td>
                <td>Route Africa</td>
                <td>route@route.com</td>
                <td>Dar es salaam</td>
                <td>000000000</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>

                <tr>
                <td>3</td>
                <td>Web technology</td>
                <td>web@web.com</td>
                <td>Mbeya</td>
                <td>00000000</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>

                <tr>
                <td>4</td>
                <td>Supply Chain</td>
                <td>chain@chain.com</td>
                <td>Iringa</td>
                <td>000000000</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>
            </tbody>
            </Table>

      </header>
        </Container>
  )
};

VendorSection.defaultProps = {
  titleClose: 'Close',
  titleAdd: 'Add Vendor'
}

const btnStyle = {
  backgroundColor: '#000',
}

export default VendorSection;