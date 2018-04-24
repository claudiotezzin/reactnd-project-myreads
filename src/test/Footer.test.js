import React from 'react';
import { shallow } from 'enzyme';
import Footer from 'components/Footer';

describe('<Footer />', () => {
	it('shallow renders without crashing', () => {
		expect(shallow(<Footer />));
	});
});
