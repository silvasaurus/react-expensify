import React from 'react'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import { shallow } from 'enzyme'
// import toJSON from 'enzyme-to-json'

test('should render ExpensesDashboardPage', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)

    expect(wrapper).toMatchSnapshot()
})