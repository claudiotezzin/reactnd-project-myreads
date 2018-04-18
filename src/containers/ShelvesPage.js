import React from 'react';
import SingleShelf from 'components/SingleShelf';
import ShelvesFilter from 'components/ShelvesFilter';
import * as BooksAPI from 'api/BooksAPI';

class ShelvesPage extends React.Component {
	state = {
		shownShelf: 0, // 0 - All, 1 - Reading, 2 - To read, 3 - Read
		shelves: {
			readingShelf: {
				id: 1,
				name: 'Reading',
				books: []
			},
			wantToReadShelf: {
				id: 2,
				name: 'To Read',
				books: []
			},
			readShelf: {
				id: 3,
				name: 'Read',
				books: []
			}
		}
	};

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			let readBooks = [];
			let wantToReadBooks = [];
			let readingBooks = [];

			books.map((book) => {
				if (book.shelf === 'currentlyReading') {
					readingBooks.push(book);
				} else if (book.shelf === 'wantToRead') {
					wantToReadBooks.push(book);
				} else if (book.shelf === 'read') {
					readBooks.push(book);
				}
				return this.setState((prevState) => {
					prevState.shelves.readingShelf.books = readingBooks;
					prevState.shelves.wantToReadShelf.books = wantToReadBooks;
					prevState.shelves.readShelf.books = readBooks;
					return prevState;
				});
			});
		});
	}

	onFilterChanged = (currentFilterSelected) => {
		this.setState({ shownShelf: currentFilterSelected });
	};

	onUpdateBookShelf = (changedBook, oldShelfId, newShelfId) => {
		BooksAPI.update(changedBook, newShelfId).then((shelfs) => {
			this.setState((prevState) => {
				const { readingShelf, wantToReadShelf, readShelf } = prevState.shelves;
				this.updateShelfIfNeeded(readingShelf, changedBook, oldShelfId, newShelfId);
				this.updateShelfIfNeeded(wantToReadShelf, changedBook, oldShelfId, newShelfId);
				this.updateShelfIfNeeded(readShelf, changedBook, oldShelfId, newShelfId);
				prevState.shelves.readingShelf = readingShelf;
				prevState.shelves.wantToReadShelf = wantToReadShelf;
				prevState.shelves.readShelf = readShelf;
				return prevState;
			});
		});
	};

	updateShelfIfNeeded(shelf, changedBook, oldShelfId, newShelfId) {
		if (shelf.id === oldShelfId) {
			console.log(`Removing book ${changedBook.id} from shelf ${shelf.name}`);
			shelf.books = shelf.books.filter((book) => book.id !== changedBook.id);
		} else if (shelf.id === newShelfId) {
			console.log(`Adding book ${changedBook.id} to new shelf ${shelf.name}`);
			shelf.books.push(changedBook);
		}
	}

	render() {
		const { readingShelf, wantToReadShelf, readShelf } = this.state.shelves;
		const { shownShelf } = this.state;

		return (
			<div className="container-fluid shelves-container">
				<ShelvesFilter
					shownShelf={shownShelf}
					shelves={[readingShelf, wantToReadShelf, readShelf]}
					onFilterChanged={this.onFilterChanged}
				/>

				{(shownShelf === 0 || shownShelf === readingShelf.id) &&
					readingShelf.books.length > 0 && (
						<SingleShelf
							onUpdateBookShelf={this.onUpdateBookShelf}
							shelf={readingShelf}
						/>
					)}

				{(shownShelf === 0 || shownShelf === wantToReadShelf.id) &&
					wantToReadShelf.books.length > 0 && (
						<SingleShelf
							onUpdateBookShelf={this.onUpdateBookShelf}
							shelf={wantToReadShelf}
						/>
					)}

				{(shownShelf === 0 || shownShelf === readShelf.id) &&
					readShelf.books.length > 0 && (
						<SingleShelf onUpdateBookShelf={this.onUpdateBookShelf} shelf={readShelf} />
					)}
			</div>
		);
	}
}

export default ShelvesPage;
