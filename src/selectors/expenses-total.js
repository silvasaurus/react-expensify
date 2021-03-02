import React from 'react'

export default (expenses) => (expenses.reduce((acc, expense) => 
    acc + expense.amount, 0)    
) 
