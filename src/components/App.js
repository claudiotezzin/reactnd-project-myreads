import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import PermanentDrawer from './PermanentDrawer';
// import * as BooksAPI from './BooksAPI'
import '../styles/App.css';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#f8d3d7',
			main: '#e7717d',
			dark: 'de3b4b',
			contrastText: '#fff'
		}
	},
	appBar: {
		height: 185
	}
});

class BooksApp extends React.Component {
	state = {
		showSearchPage: false
	};

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<PermanentDrawer />
			</MuiThemeProvider>
		);
	}
}

export default BooksApp;
