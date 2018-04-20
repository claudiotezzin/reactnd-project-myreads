import React from 'react';
import { Route } from 'react-router-dom';
import AppNavbar from 'components/AppNavbar';
import { Row } from 'reactstrap';
import Footer from 'components/Footer';
import ShelvesPage from 'containers/ShelvesPage';
import SearchPage from 'containers/SearchPage';
import ReactLoading from 'react-loading';
import * as BooksAPI from 'api/BooksAPI';
import { GetShelfNameFromId } from 'utils/helper.js';

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

	onUpdateBookShelf = (changedBook, oldShelfId, newShelfId) => {
		const shelfId = newShelfId === oldShelfId ? 0 : newShelfId;
		const shelf = GetShelfNameFromId(shelfId);

		BooksAPI.update(changedBook, shelf)
			.then((shelfs) => {
				const index = this.state.myBooks.findIndex((book) => book.id === changedBook.id);

				return this.setState((prevState) => {
					if (index === -1) {
						// Add shelf
						changedBook.shelf = GetShelfNameFromId(newShelfId);
						prevState.myBooks.push(changedBook);
					} else if (shelfId === 0) {
						// Remove book
						prevState.myBooks = prevState.myBooks.filter(
							(book) => book.id !== changedBook.id
						);
					} else {
						// Change shelf
						prevState.myBooks[index].shelf = GetShelfNameFromId(newShelfId);
					}
					return prevState;
				});
			})
			.catch((error) => console.error(`Error updating book shelf. Error: ${error}`));
	};

	render() {
		return (
			<div>
				<AppNavbar />
				{this.state.isLoading && (
					<Row className="justify-content-center">
						<ReactLoading type="bubbles" color="#3cd9b8" height={567} width={275} />
					</Row>
				)}

				{!this.state.isLoading && (
					<Route
						exact
						path="/"
						render={() => (
							<ShelvesPage
								onUpdateBookShelf={this.onUpdateBookShelf}
								myBooks={this.state.myBooks}
							/>
						)}
					/>
				)}
				{!this.state.isLoading && (
					<Route
						exact
						path="/search"
						render={() => (
							<SearchPage
								onUpdateBookShelf={this.onUpdateBookShelf}
								myBooks={this.state.myBooks}
							/>
						)}
					/>
				)}
				<Footer />
			</div>
		);
	}
}

export default App;
