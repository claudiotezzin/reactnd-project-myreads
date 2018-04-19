import React from 'react';
import { Route } from 'react-router-dom';
import AppNavbar from 'components/AppNavbar';
import Footer from 'components/Footer';
import ShelvesPage from 'containers/ShelvesPage';
import SearchPage from 'containers/SearchPage';
import LoadingBooks from 'components/LoadingBooks';
import * as BooksAPI from 'api/BooksAPI';

class App extends React.Component {
	state = {
		isLoading: true,
		myBooks: []
	};

	componentDidMount() {
		BooksAPI.getAll().then((books) =>
			this.setState((prevState) => {
				prevState.myBooks = books;
				prevState.isLoading = false;
				return prevState;
			})
		);
	}

	render() {
		return (
			<div>
				<AppNavbar />
				{this.state.isLoading && (
					<LoadingBooks message="We are getting your books from the respective shelves..." />
				)}

				{!this.state.isLoading && (
					<Route
						exact
						path="/"
						render={() => <ShelvesPage myBooks={this.state.myBooks} />}
					/>
				)}
				{!this.state.isLoading && (
					<Route
						exact
						path="/search"
						render={() => <SearchPage myBooks={this.state.myBooks} />}
					/>
				)}
				<Footer />
			</div>
		);
	}
}

export default App;
