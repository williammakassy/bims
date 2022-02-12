import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import './VendorSection.css'
import Axios from 'axios'

const VendorSection = ({ titleClose, titleAdd }) => {


  const [showButton, setShowButton] = useState(false)

  const onShowAdd = () => setShowButton(!showButton);
  const showAddButton  = showButton;

  const [ vendorName, setVendorName ] = useState("")
  const [ vendorEmail, setVendorEmail ] = useState("")
  const [ vendorPhone, setVendorPhone ] = useState("")
  const [ vendorCity, setVendorCity] = useState("")

  const [ vendorList, setVendorList ] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3002/api/getvendor').then((response) => {
      setVendorList(response.data)
    })
  }, [])

  const submitBtn = () => {
    Axios.post('http://localhost:3002/api/insertvendor', {
      vendorName: vendorName,
      vendorEmail: vendorEmail,
      vendorPhone: vendorPhone,
      vendorCity: vendorCity,
    });

    setVendorList([
        ...setVendorList, 
        {
          vendorName: vendorName,
          vendorEmail: vendorEmail,
          vendorPhone: vendorPhone,
          vendorCity: vendorCity,
        },
    ])

}

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
                  <input 
                    type='text' 
                    name='vendorName'
                    onChange={(e) => { setVendorName(e.target.value) }}
                    placeholder="Enter Product"></input>
                </div>


                <div className="form-control">
                    <label>Email</label>
                    <input 
                      type='email' 
                      name='vendorEmail'
                      onChange={(e) => { setVendorEmail(e.target.value) }}
                      placeholder='Your Email'>
                    </input>
                </div>

                <div className="form-control">
                    <label>Phone Number</label>
                    <input 
                      type='text' 
                      name='vendorPhone'
                      onChange={(e) => { setVendorPhone(e.target.value) }}
                      placeholder='Your Address'></input>
                </div>

                <div className="form-control">
                    <label>City</label>
                    <input 
                      type='text' 
                      name='vendorCity'
                      onChange={(e) => { setVendorCity(e.target.value) }}
                      placeholder='Your Phone Number'>
                    </input>
                </div>

                <input 
                  type='submit' 
                  onClick={submitBtn}
                  value='Add Vendor' style={{backgroundColor: '#000' }} 
                  className="btn btn-block"></input>
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
            {vendorList.map((val) => {
              return (
                <tbody className='text-center'>
                  <tr>
                  <td>{val.id}</td>
                  <td>{val.vendorName}</td>
                  <td>{val.vendorEmail}</td>
                  <td>{val.vendorCity}</td>
                  <td>{val.vendorPhone}</td>
                  <td><Button variant='info'>Update</Button></td>
                  <td><Button variant='danger'>Delete</Button></td>
                  </tr>
                </tbody>
              )
            })}
      
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