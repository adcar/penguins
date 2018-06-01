import React from 'react'
import AppWrapper from './AppWrapper'
import { shallow } from 'enzyme'

test('renders without crashing', () => {
	const wrapper = shallow(<AppWrapper />)
})
