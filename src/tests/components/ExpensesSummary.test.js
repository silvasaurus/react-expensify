import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render a correct snapshot for one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)

    expect(wrapper).toMatchSnapshot()
})

test('should render a correct snapshot for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={150932} />)

    expect(wrapper).toMatchSnapshot()
})