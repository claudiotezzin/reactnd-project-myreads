import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleShelf from 'components/SingleShelf';

describe('<SingleShelf />', () => {
	it('shallow renders without crashing', () => {
		expect(
			shallow(
				<SingleShelf
					shelfName=""
					books={[]}
					onUpdateBookShelf={() => {}}
					shelfDisplayName=""
				/>
			)
		);
	});

	it('mount renders without crashing', () => {
		expect(
			mount(
				<SingleShelf
					shelfName=""
					books={[]}
					onUpdateBookShelf={() => {}}
					shelfDisplayName=""
				/>
			)
		);
	});

	it('mount o display name renders without crashing', () => {
		expect(mount(<SingleShelf shelfName="" books={[]} onUpdateBookShelf={() => {}} />));
	});

	it('mount with book renders without crashing', () => {
		expect(
			mount(
				<SingleShelf
					shelfName=""
					books={[{ id: 1, name: '' }]}
					onUpdateBookShelf={() => {}}
					shelfDisplayName=""
				/>
			)
		);
	});
});
