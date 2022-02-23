import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import './ExpensesSection.css'
import Axios from 'axios'

const ExpensesSection = ({ titleClose, titleAdd }) => {

    const [showBtn, setShowBtn] = useState(false)

    const onShowAddBtn = () => setShowBtn(!showBtn);
    const showAddBtn  = showBtn;

    const [ expenseDescription, setExpenseDescription ] = useState("")
    const [ expenseAmount, setExpenseAmount ] =  useState("")
    const [ expenseDate, setExpenseDate] = useState("")

    const [ expenseList, setExpenseList ] = useState([])

    useEffect(() => {
      Axios.get('http://localhost:3002/api/getexpense').then((response) => {
        setExpenseList(response.data)
      })
    }, [])
    

    const submitBtn = () => {
      Axios.post('http://localhost:3002/api/insertexpense', {

        expenseDescription: expenseDescription,
        expenseAmount: expenseAmount,
        expenseDate: expenseDate,
      });

      {submitBtn ? window.alert('Expense has been added') : window.alert('Failed, Try again') }

      setExpenseList([
        ...setExpenseList, 
        {
          expenseDescription: expenseDescription,
          expenseAmount: expenseAmount,
          expenseDate: expenseDate
        },
      ])
    }


    const setExpenseData = (data) => {
      let { id, expenseDescription, expenseAmount, expenseDate } = data;
      localStorage.setItem('id', id);
      localStorage.setItem('expenseDescription', expenseDescription);
      localStorage.setItem('expenseAmount', expenseAmount);
      localStorage.setItem('expenseDate', expenseDate);
   }

   const onDeleteExpense = (id) => {
      Axios.delete(`http://localhost:3002/api/expensedelete/${id}`)  
      {onDeleteExpense ? window.alert('Expense has been deleted') : window.alert('Failed, Try again')}  
    }




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
                  <input 
                    type='text' 
                    name='expenseDescription'
                    onChange={(e) => { setExpenseDescription(e.target.value) }}
                    placeholder="Your description"></input>
                </div>


                <div className="form-control">
                    <label>Amount</label>
                    <input 
                      type='text' 
                      name='expenseAmount'
                      onChange={(e) => { setExpenseAmount(e.target.value) }}
                      placeholder='Your Amount'>
                    </input>
                </div>

                <div className="form-control">
                    <label>Date</label>
                    <input 
                      type='date' 
                      name='expenseDate'
                      onChange={(e) => { setExpenseDate(e.target.value) }}
                    >

                      </input>
                </div>

                <input 
                  type='submit' 
                  value='Add Expense' 
                  onClick={submitBtn}
                  style={{backgroundColor: '#000' }} 
                  className="btn btn-block"
                >
                </input>
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

            {expenseList.map((val) => {
              return (
                <tbody>
                  <tr>
                  <td>{val.id}</td>
                  <td>{val.expenseDescription}</td>
                  <td>{val.expenseAmount}</td>
                  <td>{val.expenseDate}</td>
                  <td className='text-center'>
                        <Link to='/updateExpense'>
                            <Button 
                                onClick={() => setExpenseData(val)} 
                                variant='info'>Edit</Button>
                        </Link>
                    </td>
                    <td className='text-center'>
                      <Button 
                        onClick={() => {onDeleteExpense(val.id)}}
                        variant='danger' 
                        >
                          Delete
                      </Button>
                  </td>
                  </tr>
                </tbody>
              )
            })}
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
