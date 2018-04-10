import React from 'react';
import { Button } from 'reactstrap';
import AppNavbar from 'components/AppNavbar';
import ShelvesPage from 'containers/ShelvesPage';
import 'styles/index.css';

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
