import React from 'react';
import { shallow, mount } from 'enzyme';
import ShelvesFilter from 'components/ShelvesFilter';

const shelves = [
	{ id: 1, books: [{}, {}] },
	{ id: 2, books: [{}, {}] },
	{ id: 3, books: [{}, {}] }
];

describe('<ShelvesFilter />', () => {
	it('shallow renders without crashing', () => {
		expect(shallow(<ShelvesFilter shelves={[]} shownShelf={0} />));
	});

	it('mount renders without crashing', () => {
		expect(mount(<ShelvesFilter shelves={[]} shownShelf={0} />));
	});

	it('mount not empty shelves renders without crashing', () => {
		expect(mount(<ShelvesFilter shelves={shelves} shownShelf={0} />));
	});

	it('expect filter buttons click to be called', () => {
		const clickCallback = jest.fn();

		const wrapper = mount(
			<ShelvesFilter shelves={shelves} shownShelf={0} onFilterChanged={clickCallback} />
		);
		//Simulate one click for each shelf and one for All filter
		wrapper
			.find('Button')
			.at(0)
			.simulate('click');

		wrapper
			.find('Button')
			.at(1)
			.simulate('click');

		wrapper
			.find('Button')
			.at(2)
			.simulate('click');

		wrapper
			.find('Button')
			.at(3)
			.simulate('click');
		expect(clickCallback).toHaveBeenCalledTimes(4);
	});
});
