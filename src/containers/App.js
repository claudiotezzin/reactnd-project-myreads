import React from 'react';
import { Route } from 'react-router-dom';
import AppNavbar from 'components/AppNavbar';
import Footer from 'components/Footer';
import ShelvesPage from 'containers/ShelvesPage';

class App extends React.Component {
	state = {
		showSearchPage: false
	};

	render() {
		return (
			<div>
				<AppNavbar />
				<Route exact path="/" render={() => <ShelvesPage />} />
				<Footer />
			</div>
		);
	}
}

export default App;
