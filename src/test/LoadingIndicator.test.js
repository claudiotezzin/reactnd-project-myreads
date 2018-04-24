import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadingIndicator from 'components/LoadingIndicator';

describe('<LoadingIndicator />', () => {
	it('shallow renders without crashing', () => {
		expect(shallow(<LoadingIndicator />));
	});

	it('mount renders without crashing', () => {
		expect(mount(<LoadingIndicator />));
	});
});
