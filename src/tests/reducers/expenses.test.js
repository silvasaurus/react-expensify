import { addExpense } from '../../actions/expenses'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should default state', () => {
    const state =  expensesReducer(undefined, {type: '@@INIT'})

    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should remove not expense if id not found', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: 'a'
    }
    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '4444', 
        description: 'ALGO',
        note: '',
        amount: 151,
        createdAt: 20000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)

    expect(state).toEqual([...expenses, expense])
})
test('should edit expense by id', () => {
    const description = 'ALGO'
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        } 
    }
    const state = expensesReducer(expenses, action)
    
    expect(state[1].description).toBe(description)
})

test('should not edit expense if id not found', () => {
    const description = 'DOGE'

    const action = {
        type: 'EDIT_EXPENSE',
        id: 'q',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})