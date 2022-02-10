import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import './ExpensesSection.css'

const ExpensesSection = ({ titleClose, titleAdd }) => {

    const [showBtn, setShowBtn] = useState(false)

    const onShowAddBtn = () => setShowBtn(!showBtn);
    const showAddBtn  = showBtn;

  return (
      <Container>
          <header style={{ marginTop: '5rem' }} className='header'>
          <Button 
            onClick={onShowAddBtn} 
            className='btn' 
            style={ btnStyle }>
            { showAddBtn ? titleClose : titleAdd }
        </Button>

        { showBtn  && <form className="add-form">
              <div className="form-control">
                  <label>Description</label>
                  <input type='text' placeholder="Your description"></input>
                </div>


                <div className="form-control">
                    <label>Amount</label>
                    <input type='email' placeholder='Your Amount'>
                    </input>
                </div>

                <div className="form-control">
                    <label>Date</label>
                    <input type='date' ></input>
                </div>

                <input type='submit' value='Add Expense' style={{backgroundColor: '#000' }} className="btn btn-block"></input>
            </form>}




            <Table striped bordered hover style={{ marginTop: '5rem' }} responsive="sm">
            <thead className='text-center'>
                <th>#</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Update</th>
                <th>Delete</th>
            </thead>
            <tbody className='text-center'>
                <tr>
                <td>1</td>
                <td>Counter Book</td>
                <td>100</td>
                <td>20</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>

                <tr>
                <td>2</td>
                <td>Counter Book</td>
                <td>100</td>
                <td>20</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>

                <tr>
                <td>3</td>
                <td>Counter Book</td>
                <td>100</td>
                <td>20</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>

                <tr>
                <td>4</td>
                <td>Counter Book</td>
                <td>100</td>
                <td>20</td>
                <td><Button variant='info'>Update</Button></td>
                <td><Button variant='danger'>Delete</Button></td>
                </tr>
            </tbody>
            </Table>

          </header>
      </Container>
    )
};


ExpensesSection.defaultProps = {
    titleClose: 'Close',
    titleAdd: 'Add Expense'
  }
  
  const btnStyle = {
    backgroundColor: '#000',
  }

export default ExpensesSection;
