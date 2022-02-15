import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './UpdateProductSection.css'
import Axios from 'axios'

const UpdateExpensesSection = () => {


    const [ expenseDescription, setExpenseDescription ] = useState('')
    const [ expenseAmount, setExpenseAmount ] = useState('')
    const [ expenseDate, setExpenseDate ] = useState('')
    const [ id, setID ] = useState('')

    useEffect(() => {

        setID(localStorage.getItem('id'))
        setExpenseDescription(localStorage.getItem('expenseDescription'))
        setExpenseAmount(localStorage.getItem('expenseAmount'))
        setExpenseDate(localStorage.getItem('expenseDate'))

    }, [])
    

    const updateExpenseData = () => {
        Axios.put('http://localhost:3002/api/updateexpense', {
            id: id,
            expenseDescription: expenseDescription,
            expenseAmount: expenseAmount,
            expenseDate: expenseDate,
        })

        {
          updateExpenseData ? 
          window.alert('Expense has been updated') : 
          window.alert('Failed, Try again')
        }
       
    }







  return (
    <Container className='container'>
        <form className="add-form">
              <div className="form-control">
                  <label>Description</label>
                  <input 
                    type='text' 
                    name='expenseDescription'
                    value={expenseDescription}
                    onChange={(e) => { setExpenseDescription(e.target.value) }}
                    placeholder="Your description"></input>
                </div>


                <div className="form-control">
                    <label>Amount</label>
                    <input 
                      type='text' 
                      name='expenseAmount'
                      value={expenseAmount}
                      onChange={(e) => { setExpenseAmount(e.target.value) }}
                      placeholder='Your Amount'>
                    </input>
                </div>

                <div className="form-control">
                    <label>Date</label>
                    <input 
                      type='date' 
                      name='expenseDate'
                      value={expenseDate}
                      onChange={(e) => { setExpenseDate(e.target.value) }}
                    >
                      </input>
                </div>

                <input 
                  type='submit' 
                  value='Update Expense' 
                  onClick={updateExpenseData}
                  style={{backgroundColor: '#000' }} 
                  className="btn btn-block"
                >
                </input>
            </form>
    </Container>
  )
}

export default UpdateExpensesSection