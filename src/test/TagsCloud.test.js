import React from 'react';
import { shallow, mount } from 'enzyme';
import TagsCloud from 'components/TagsCloud';

describe('<TagsCloud />', () => {
	it('shallow renders without crashing', () => {
		expect(shallow(<TagsCloud tags={[]} />));
	});

	it('mount renders without crashing', () => {
		expect(mount(<TagsCloud tags={[]} />));
	});

	const tags = ['tag1', 'tag2', 'tag3'];

	it('mount with some tags', () => {
		expect(mount(<TagsCloud tags={tags} />));
	});

	it('expect badge click to be called', () => {
		const clickCallback = jest.fn();

		const wrapper = mount(<TagsCloud tags={tags} onTagClicked={clickCallback} />);
		wrapper
			.find('Badge')
			.at(1)
			.simulate('click');
		expect(clickCallback).toHaveBeenCalledTimes(1);
	});

	it('expect button click to be called', () => {
		const wrapper = mount(<TagsCloud tags={tags} />);
		wrapper.find('Button').simulate('click');
		expect(wrapper);
	});
});
