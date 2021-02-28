export const setTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text
})

export const sortByAmount = () => ({
    type: "SORT_AMOUNT"
})

export const sortByDate = () => ({
    type: "SORT_DATE"
})

export const setStartDate = (startDate = undefined) => ({
    type: "SET_START_DATE",
     startDate  
})

export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})