import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from "../../components/EditExpensePage"
import expense from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense}
        history={history}
        expense={expense[2]} />)
})
test("should render Edit Expense Page correctly", () => {
    expect(wrapper).toMatchSnapshot()

})

test('should edit an expense correctly', () => {
    
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[2])

    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expense[2].id, expense[2])

})

test('should delete an expense correctly', () => {

    wrapper.find('button').simulate('click')

    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenCalledWith({
        id: expense[2].id
})
})