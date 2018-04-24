import './__mocks__/localStorage';
import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchPage from 'containers/SearchPage';

describe('<SearchPage />', () => {
	it('shallow renders without crashing', () => {
		expect(shallow(<SearchPage myBooks={[]} onUpdateBookShelf={() => {}} />));
	});

	it('mount renders without crashing', () => {
		expect(mount(<SearchPage myBooks={[]} onUpdateBookShelf={() => {}} />));
	});

	// it('on search query', () => {
	// 	window.fetch = jest.fn().mockImplementation(() =>
	// 		Promise.resolve({
	// 			status: 200,
	// 			json: () => {
	// 				books: [];
	// 			}
	// 		})
	// 	);
	//
	// 	const wrapper = shallow(<SearchPage myBooks={[]} onUpdateBookShelf={() => {}} />);
	//
	// 	const update = (book, shelf) => ({});
	// 	expect(wrapper.state().query).toEqual('');
	// 	wrapper.instance().onSearch('mock');
	// 	expect(wrapper.state().query).toEqual('mock');
	// });
});
