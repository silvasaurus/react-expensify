import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_AMOUNT'})

    expect(state.sortBy).toBe('amount')
})

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'

    }
    const action = {type: 'SORT_DATE'}
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'Fuck Yeah'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)

    expect(state.text).toBe('Fuck Yeah')

})

test('should set start date filter', () => {
    const startDate = moment(0).add(1, 'year').valueOf()
    const action = {
        type: 'SET_START_DATE',
        startDate
    }

    const state = filtersReducer(undefined, action)

    expect(state.startDate).toBe(moment(0).add(1, 'year').valueOf())}
)

test('should set end date filter', () => {
    const endDate = moment(0).add(2, 'months').valueOf()
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)

    expect(state.endDate).toBe(moment(0).add(2, 'months').valueOf())
})