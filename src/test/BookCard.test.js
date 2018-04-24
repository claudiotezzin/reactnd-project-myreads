import React from 'react';
import { shallow, mount } from 'enzyme';
import BookCard from 'components/BookCard';

describe('<BookCard />', () => {
	it('shallow renders without crashing', () => {
		expect(shallow(<BookCard book={{}} onUpdateBookShelf={() => {}} />));
	});

	it('mount renders without crashing', () => {
		expect(mount(<BookCard book={{}} onUpdateBookShelf={() => {}} />));
	});

	it('expect button info click to be called', () => {
		const wrapper = mount(<BookCard book={{}} onUpdateBookShelf={() => {}} />);
		wrapper
			.find('.book-info')
			.at(0)
			.simulate('click');
		expect(wrapper);
	});

	it('expect radio button click to be called', () => {
		const clickCallback = jest.fn();

		const wrapper = mount(<BookCard book={{}} onUpdateBookShelf={clickCallback} />);
		wrapper
			.find('.btn-reading')
			.at(0)
			.simulate('click');

		wrapper
			.find('.btn-to-read')
			.at(0)
			.simulate('click');

		wrapper
			.find('.btn-read')
			.at(0)
			.simulate('click');
		expect(clickCallback).toHaveBeenCalledTimes(3);
	});

	it('mount imageLinks not undefined renders without crashing', () => {
		expect(
			mount(
				<BookCard book={{ imageLinks: { thumbnail: '' } }} onUpdateBookShelf={() => {}} />
			)
		);
	});

	it('on toggle info modal', () => {
		const wrapper = shallow(
			<BookCard book={{ imageLinks: { thumbnail: '' } }} onUpdateBookShelf={() => {}} />
		);

		expect(wrapper.state().showDetail).toEqual(false);
		wrapper.find('.book-info').simulate('click');
		expect(wrapper.state().showDetail).toEqual(true);
	});

	it('on different shelf clicked', () => {
		const wrapper = shallow(
			<BookCard book={{ imageLinks: { thumbnail: '' } }} onUpdateBookShelf={() => {}} />
		);

		expect(wrapper.state().shelfSelected).toEqual(0);
		wrapper.find('.btn-reading').simulate('click');
		expect(wrapper.state().shelfSelected).toEqual(1);
	});

	it('same shelf clicked', () => {
		const wrapper = shallow(
			<BookCard
				book={{ imageLinks: { thumbnail: '' }, shelf: 'currentlyReading' }}
				onUpdateBookShelf={() => {}}
			/>
		);

		expect(wrapper.state().shelfSelected).toEqual(1);
		wrapper.find('.btn-reading').simulate('click');
		expect(wrapper.state().shelfSelected).toEqual(0);
	});
});
