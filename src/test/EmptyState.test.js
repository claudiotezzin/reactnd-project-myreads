import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import EmptyState from 'components/EmptyState';

const book = {};

describe('<EmptyState />', () => {
	it('shallow renders without crashing', () => {
		expect(shallow(<EmptyState message="Teste" showSearchButton={false} />));
	});

	it('mount renders without crashing', () => {
		expect(mount(<EmptyState message="Teste" showSearchButton={false} />));
	});

	it('mount with search button', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search']}>
				<EmptyState message="Teste" showSearchButton={true} />
			</MemoryRouter>
		);
		expect(wrapper);
	});

	it('expect search button click to be called', () => {
		const clickCallback = jest.fn();

		const wrapper = mount(
			<MemoryRouter initialEntries={['/search']}>
				<EmptyState message="Teste" showSearchButton={true} />
			</MemoryRouter>
		);
		wrapper.find('Button').simulate('click');
		expect(wrapper);
	});
});
