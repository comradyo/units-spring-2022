import React from 'react';
import {shallow, configure} from 'enzyme';
import {OrderComponent} from './Order';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('../utils/getDate');
import {getDate} from '../utils/getDate';
configure({ adapter: new Adapter() });

describe('OrderComponent function', () => {

	beforeEach(() => {
		getDate.mockReturnValue('test date');
	});
	afterAll(() => {
		jest.clearAllMocks();
	});
	
	it('order is empty', () => {
		const testOrder = {
		};
		const wrapper = shallow(<OrderComponent order={testOrder}/>);
		expect(wrapper.getElement()).toBeNull();
	});

	it('order.shop is empty or order.date is empty', () => {
		const testOrder = {
			id: 1
		};
		const wrapper = shallow(<OrderComponent order={testOrder}/>);
		expect(wrapper.getElement()).toBeNull();
	});

	it('!order.items', () => {
		const testOrder = {
			id: 1,
			date: 10102020,
			shop: 'test',
		};
		const wrapper = shallow(<OrderComponent order={testOrder}/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('ok', () => {
		const testOrder = {
			id: 1,
			date: 10102020,
			shop: 'test',
			items: [
				'test',
				'test',
				'test',
				'test',
			]
		};
		const wrapper = shallow(<OrderComponent order={testOrder}/>);
		expect(wrapper).toMatchSnapshot();
	});

});
