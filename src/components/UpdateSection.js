import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import './UpdateSection.css'
import Axios from 'axios'


const UpdateSection = () => {

    const [ vendorName, setVendorName ] = useState('')
    const [ vendorEmail, setVendorEmail ] = useState('')
    const [ vendorPhone, setVendorPhone ] = useState('')
    const [ vendorCity, setVendorCity ] = useState('')
    const [ id, setID ] = useState('')

    useEffect(() => {

        setID(localStorage.getItem('id'))
        setVendorName(localStorage.getItem('vendorName'))
        setVendorEmail(localStorage.getItem('vendorEmail'))
        setVendorPhone(localStorage.getItem('vendorPhone'))
        setVendorCity(localStorage.getItem('vendorCity'))

    }, [])
    

    const updateVendorData = () => {
        Axios.put('http://localhost:3002/api/updatevendor', {
            id: id,
            vendorName: vendorName,
            vendorEmail: vendorEmail,
            vendorPhone: vendorPhone,
            vendorCity: vendorCity,
        })

        {
          updateVendorData ? 
          window.alert('Vendor has been updated') : 
          window.alert('Failed, Try again')
        }
       
    }


  return (
      <Container className='container'>
           <form className="add-form">
           <h4>Vendor Section:</h4>
           <hr></hr>
              <div className="form-control">
              <input 
                    type='hidden' 
                    name='id'
                    value={id}
                    onChange={(e) => { setID(e.target.value) }}
                    ></input>
                  <label>Vendor Name</label>
                  <input 
                    type='text' 
                    name='vendorName'
                    value={vendorName}
                    onChange={(e) => { setVendorName(e.target.value) }}
                    placeholder="Enter Product"></input>
                </div>


                <div className="form-control">
                    <label>Email</label>
                    <input 
                      type='email' 
                      name='vendorEmail'
                      value={vendorEmail}
                      onChange={(e) => { setVendorEmail(e.target.value) }}
                      placeholder='Your Email'>
                    </input>
                </div>

                <div className="form-control">
                    <label>Phone Number</label>
                    <input 
                      type='text' 
                      name='vendorPhone'
                      value={vendorPhone}
                      onChange={(e) => { setVendorPhone(e.target.value) }}
                      placeholder='Your Address'></input>
                </div>

                <div className="form-control">
                    <label>City</label>
                    <input 
                      type='text' 
                      name='vendorCity'
                      value={vendorCity}
                      onChange={(e) => { setVendorCity(e.target.value) }}
                      placeholder='Your Phone Number'>
                    </input>
                </div>

                <input 
                  type='submit' 
                  onClick={updateVendorData}
                  value='Update Vendor' style={{backgroundColor: '#000' }} 
                  className="btn btn-block"></input>
            </form>
      </Container>
  )
}

export default UpdateSection