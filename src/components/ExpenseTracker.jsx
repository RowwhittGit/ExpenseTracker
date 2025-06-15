import React from 'react'

function ExpenseTracker() {
  return (
    <div>
      <h5>Expense Trac</h5>
      <div className='container'>
        <div className='add-expense-box'>
          <input type="text" placeholder='Enter Expense' />
          <input type="text" placeholder='Enter amount' />
          <button className='add-expense-btn'>Add Expense</button>
        </div>

        <div className='expense-list-box'></div>

        <div className='total-expense'>Total :</div>
      </div>
    </div>
  )
}

export default ExpenseTracker
