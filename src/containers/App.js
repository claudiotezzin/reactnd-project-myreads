import React from 'react';
import AppNavbar from 'components/AppNavbar';
import ShelvesPage from 'containers/ShelvesPage';

class App extends React.Component {
	state = {
		showSearchPage: false
	};

	render() {
		return (
			<div>
				<AppNavbar />
				<ShelvesPage />
			</div>
		);
	}
}

export default App;
