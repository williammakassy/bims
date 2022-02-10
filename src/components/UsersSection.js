import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import './UserSection.css'

const UsersSection = ({ titleClose, titleAdd }) => {

    const [showUserForm, setShowUserForm] = useState(false);
    const onShowAdd = () => setShowUserForm(!showUserForm)
    const showUserAdd = showUserForm

    const onSubmit = (e) => {
        e.preventDefault()
    }


  return (
      <Container>
          <div style={{ marginTop: '5rem' }}>
           <Button 
            onClick={onShowAdd} 
            className='btn' 
            style={ btnStyle }>
            { showUserAdd ? titleClose : titleAdd }
          </Button>

          {showUserAdd && <form className="add-form" onSubmit={onSubmit}>
              <div className="form-control">
                  <label>Full Name</label>
                  <input 
                    type='text' 
                    placeholder="Your Fullname">
                  </input>
                </div>


                <div className="form-control">
                    <label>Email</label>
                    <input 
                        type='email'
                        placeholder='Your E-mail' 
                    >
                    </input>
                </div>

                <div className="form-control">
                    <label>Phone Number</label>
                    <input 
                        type='text' 
                    >
                    </input>
                </div>

                <div className="form-control">
                    <label>Password</label>
                    <input 
                        type='password' 
                    >
                    </input>
                </div>

                <div className="form-control">
                    <label>Re-Enter Password</label>
                    <input 
                        type='password' 
                    >
                    </input>
                </div>

                <input type='submit' value='Add User' style={{backgroundColor: '#000' }} className="btn btn-block"></input>
            </form>}

    
            <Table striped bordered hover style={{ marginTop: '5rem' }} responsive="sm">
            <thead className='text-center'>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Update</th>
                <th>Delete</th>
            </thead>
            <tbody className='text-center'>
                <tr>
                <td>1</td>
                <td>Jane Doe</td>
                <td>jane@doe.com</td>
                <td>000000000</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>

                <tr>
                <td>2</td>
                <td>John Doe</td>
                <td>john@doe.com</td>
                <td>000000000</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>

                <tr>
                <td>3</td>
                <td>Williamcodes</td>
                <td>code@code.com</td>
                <td>000000000</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>
            </tbody>
            </Table>
      </div>
      </Container>
  )
};


UsersSection.defaultProps = {
    titleClose: 'Close',
    titleAdd: 'Add User'
}

const btnStyle = {
    backgroundColor: '#000',
}

export default UsersSection;