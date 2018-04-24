import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import ShelvesPage from 'containers/ShelvesPage';

describe('<ShelvesPage />', () => {
	it('shallow renders without crashing', () => {
		expect(shallow(<ShelvesPage myBooks={[]} onUpdateBookShelf={() => {}} />));
	});

	it('mount renders without crashing', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/']}>
				<ShelvesPage myBooks={[]} onUpdateBookShelf={() => {}} />
			</MemoryRouter>
		);
		expect(wrapper);
	});

	it('shown shelf changed', () => {
		const wrapper = shallow(<ShelvesPage myBooks={[]} onUpdateBookShelf={() => {}} />);

		expect(wrapper.state().shownShelf).toEqual(0);
		wrapper.instance().onFilterChanged(1);
		expect(wrapper.state().shownShelf).toEqual(1);
	});

	it('show reading shelf', () => {
		const wrapper = shallow(
			<ShelvesPage myBooks={[{ shelf: 'currentlyReading' }]} onUpdateBookShelf={() => {}} />
		);

		expect(wrapper.state().shownShelf).toEqual(0);
		wrapper.setState({ shownShelf: 1 });
		expect(wrapper.state().shownShelf).toEqual(1);
	});

	it('show to read shelf', () => {
		const wrapper = shallow(
			<ShelvesPage myBooks={[{ shelf: 'wantToRead' }]} onUpdateBookShelf={() => {}} />
		);

		expect(wrapper.state().shownShelf).toEqual(0);
		wrapper.setState({ shownShelf: 2 });
		expect(wrapper.state().shownShelf).toEqual(2);
	});

	it('show read shelf', () => {
		const wrapper = shallow(
			<ShelvesPage myBooks={[{ shelf: 'read' }]} onUpdateBookShelf={() => {}} />
		);

		expect(wrapper.state().shownShelf).toEqual(0);
		wrapper.setState({ shownShelf: 3 });
		expect(wrapper.state().shownShelf).toEqual(3);
	});
});
