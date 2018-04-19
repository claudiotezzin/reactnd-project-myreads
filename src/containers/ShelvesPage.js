import React from 'react';
import PropTypes from 'prop-types';
import SingleShelf from 'components/SingleShelf';
import ShelvesFilter from 'components/ShelvesFilter';
import EmptyState from 'components/EmptyState';
import * as BooksAPI from 'api/BooksAPI';

class ShelvesPage extends React.Component {
	static propTypes = {
		myBooks: PropTypes.array.isRequired
	};

	state = {
		shownShelf: 0, // 0 - All, 1 - Reading, 2 - To read, 3 - Read
		shelves: {
			readingShelf: {
				id: 1,
				name: 'currentlyReading',
				displayName: 'Reading',
				books: this.props.myBooks.filter((book) => book.shelf === 'currentlyReading')
			},
			wantToReadShelf: {
				id: 2,
				name: 'wantToRead',
				displayName: 'To Read',
				books: this.props.myBooks.filter((book) => book.shelf === 'wantToRead')
			},
			readShelf: {
				id: 3,
				name: 'read',
				displayName: 'Read',
				books: this.props.myBooks.filter((book) => book.shelf === 'read')
			}
		}
	};

	onFilterChanged = (currentFilterSelected) => {
		this.setState({ shownShelf: currentFilterSelected });
	};

	onUpdateBookShelf = (changedBook, oldShelfId, newShelfId) => {
		BooksAPI.update(changedBook, newShelfId === oldShelfId ? 0 : newShelfId)
			.then((shelfs) => {
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
			})
			.catch((error) => console.error(`Error updating book shelf. Error: ${error}`));
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
			<div className="container main-content">
				<ShelvesFilter
					shownShelf={shownShelf}
					shelves={[readingShelf, wantToReadShelf, readShelf]}
					onFilterChanged={this.onFilterChanged}
				/>

				{(shownShelf === 0 || shownShelf === readingShelf.id) &&
					readingShelf.books.length > 0 && (
						<SingleShelf
							onUpdateBookShelf={this.onUpdateBookShelf}
							books={readingShelf.books}
							shelfName={readingShelf.name}
							shelfDisplayName={readingShelf.displayName}
						/>
					)}

				{(shownShelf === 0 || shownShelf === wantToReadShelf.id) &&
					wantToReadShelf.books.length > 0 && (
						<SingleShelf
							onUpdateBookShelf={this.onUpdateBookShelf}
							books={wantToReadShelf.books}
							shelfName={wantToReadShelf.name}
							shelfDisplayName={wantToReadShelf.displayName}
						/>
					)}

				{(shownShelf === 0 || shownShelf === readShelf.id) &&
					readShelf.books.length > 0 && (
						<SingleShelf
							onUpdateBookShelf={this.onUpdateBookShelf}
							books={readShelf.books}
							shelfName={readShelf.name}
							shelfDisplayName={readShelf.displayName}
						/>
					)}

				{// Empty state if there is no book
				readingShelf.books.length <= 0 &&
					wantToReadShelf.books.length <= 0 &&
					readShelf.books.length <= 0 && (
						<EmptyState message="You don't have any book in your shaves. Please add some books!!!" />
					)}
			</div>
		);
	}
}

export default ShelvesPage;
