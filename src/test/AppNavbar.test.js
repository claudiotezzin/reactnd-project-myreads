import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import AppNavbar from 'components/AppNavbar';

describe('<AppNavbar />', () => {
	it('shallow renders without crashing', () => {
		expect(shallow(<AppNavbar />));
	});

	it('mount renders without crashing', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/']}>
				<AppNavbar />
			</MemoryRouter>
		);
		expect(wrapper);
	});

	it('expect toogle click to be called', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/']}>
				<AppNavbar />
			</MemoryRouter>
		);
		wrapper.find('NavbarToggler').simulate('click');
		expect(wrapper);
	});
});
