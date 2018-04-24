import React from 'react';
import { shallow, mount } from 'enzyme';
import BookDetailModal from 'components/BookDetailModal';

const book = {};

describe('<BookDetailModal />', () => {
	it('shallow renders without crashing', () => {
		expect(shallow(<BookDetailModal onToggle={() => {}} book={book} />));
	});

	it('mount renders without crashing', () => {
		expect(mount(<BookDetailModal onToggle={() => {}} book={book} />));
	});

	it('mount with some authors', () => {
		expect(
			mount(
				<BookDetailModal onToggle={() => {}} book={{ authors: ['author1', 'author2'] }} />
			)
		);
	});

	it('expect button click to be called', () => {
		const wrapper = mount(<BookDetailModal onToggle={() => {}} shallOpen={true} book={book} />);
		wrapper.find('Button').simulate('click');
		expect(wrapper);
	});
});
