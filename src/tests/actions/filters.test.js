import { 
    setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setStartDate, 
    setEndDate
} from '../../actions/filters'
import moment from 'moment'

test('should generate set Start date action object', () => {
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test("should generate set end date action object", () => {
    const action = setEndDate(moment(0))

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate sort by amount action object', () => {
    const action = sortByAmount()

    expect(action).toEqual({
        type: 'SORT_AMOUNT'
    })
})

test('should generate sort by date action objecy', () => {
    const action = sortByDate()

    expect(action).toEqual({
        type: 'SORT_DATE'
    })
})

test('should generate set text filter action object with param', () => {
    const action = setTextFilter('Netflix')

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Netflix'
    })
})

test('should generate set text filter action object with default value', () => {
    const action = setTextFilter()

    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    })
})