import React from 'react';
import AppNavbar from './AppNavbar';

class BooksApp extends React.Component {
	state = {
		showSearchPage: false
	};

	render() {
		return <AppNavbar />;
	}
}

export default BooksApp;
