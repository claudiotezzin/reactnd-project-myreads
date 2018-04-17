import React from 'react';
import SingleShelf from 'components/SingleShelf';
import ShelvesFilter from 'components/ShelvesFilter';
import * as BooksAPI from 'api/BooksAPI';

class ShelvesPage extends React.Component {
	state = {
		shownShelf: 0, // 0 - All, 1 - Reading, 2 - To read, 3 - Read
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
				return this.setState((prevState) => ({
					readingShelf: {
						...prevState.readingShelf,
						books: readingBooks
					},
					wantToReadShelf: {
						...prevState.wantToReadShelf,
						books: wantToReadBooks
					},
					readShelf: {
						...prevState.readShelf,
						books: readBooks
					}
				}));
			});
		});
	}

	onFilterChanged = (currentFilterSelected) => {
		this.setState({ shownShelf: currentFilterSelected });
	};

	render() {
		const {
			readingShelf,
			wantToReadShelf,
			readShelf,
			shownShelf
		} = this.state;

		return (
			<div className="container shelves-container">
				<ShelvesFilter
					shownShelf={shownShelf}
					shelves={[readingShelf, wantToReadShelf, readShelf]}
					onFilterChanged={this.onFilterChanged}
				/>

				{(shownShelf === 0 || shownShelf === readingShelf.id) &&
					readingShelf.books.length > 0 && (
						<SingleShelf shelf={readingShelf} />
					)}

				{(shownShelf === 0 || shownShelf === wantToReadShelf.id) &&
					wantToReadShelf.books.length > 0 && (
						<SingleShelf shelf={wantToReadShelf} />
					)}

				{(shownShelf === 0 || shownShelf === readShelf.id) &&
					readShelf.books.length > 0 && (
						<SingleShelf shelf={readShelf} />
					)}
			</div>
		);
	}
}

export default ShelvesPage;
