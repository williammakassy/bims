import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import './UserSection.css'
import Axios  from 'axios';

const UsersSection = ({ titleClose, titleAdd }) => {

    const [showUserForm, setShowUserForm] = useState(false);
    const onShowAdd = () => setShowUserForm(!showUserForm)
    const showUserAdd = showUserForm

    const [ fullName, setFullName ] = useState("")
    const [ userEmail, setUserEmail ] = useState("")
    const [ userPassword, setUserPassword ] = useState("")
    const [ userRepeatPassword, setUserRepeatPassword ] = useState("")

    const [userList, setUserList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3002/api/getuser').then((response) => {
            setUserList(response.data)
        })
    }, [])

    const submitBtn = () => {

        if(userPassword != userRepeatPassword) {
            window.alert('Password doesnot match')
        }

        else {
        Axios.post('http://localhost:3002/api/insertuser', {
            fullName: fullName,
            userEmail: userEmail,
            userPassword: userPassword,
         });
        }

        setUserList([
            ...setUserList, 
            {
                fullName: fullName,
                userEmail: userEmail,
                userPassword: userPassword
            },
        ])

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

          {showUserAdd && <form className="add-form">
              <div className="form-control">
                  <label>Full Name</label>
                  <input 
                    type='text' 
                    name='fullName'
                    onChange={(e) => { setFullName(e.target.value) }}
                    placeholder="Your Fullname">
                  </input>
                </div>

                <div className="form-control">
                    <label>Email</label>
                    <input 
                        type='email'
                        name='userEmail'
                        onChange={(e) => { setUserEmail(e.target.value) }}
                        placeholder='Your E-mail' 
                    >
                    </input>
                </div>

                <div className="form-control">
                    <label>Password</label>
                    <input 
                        type='password'
                        name='userPassword'
                        onChange={(e) => { setUserPassword(e.target.value) }}
                        placeholder='Your Password' 
                    >
                    </input>
                </div>

                <div className="form-control">
                    <label>Re-Enter Password</label>
                    <input 
                        type='password'
                        name='userRepeatPassword'
                        onChange={(e) => { setUserRepeatPassword(e.target.value)}} 
                        placeholder='Re-enter Your Password'
                    >
                    </input>
                </div>

                <input type='submit' 
                    value='Add User' 
                    onClick={submitBtn}
                    style={{backgroundColor: '#000' }} 
                    className="btn btn-block"></input>
            </form>}

    
            <Table striped bordered hover style={{ marginTop: '5rem' }} responsive="sm">
            <thead className='text-center'>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
            </thead>

            { userList.map((val) => {
                return (
                    <tbody className='text-center'>
                        <tr>
                        <td>{val.id}</td>
                        <td>{val.fullName}</td>
                        <td>{val.userEmail}</td>
                        <td><Button variant='info'>Update</Button></td>
                        <td><Button variant='danger'>Delete</Button></td>
                        </tr>
                    </tbody>    
                )
            })}
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