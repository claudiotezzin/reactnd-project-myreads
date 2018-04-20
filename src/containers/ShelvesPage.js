import React from 'react';
import PropTypes from 'prop-types';
import SingleShelf from 'components/SingleShelf';
import ShelvesFilter from 'components/ShelvesFilter';
import EmptyState from 'components/EmptyState';
import { Shelves } from 'utils/helper.js';

class ShelvesPage extends React.Component {
	static propTypes = {
		myBooks: PropTypes.array.isRequired,
		onUpdateBookShelf: PropTypes.func.isRequired
	};

	state = {
		shownShelf: 0 // 0 - All, 1 - Reading, 2 - To read, 3 - Read
	};

	onFilterChanged = (currentFilterSelected) => {
		this.setState({ shownShelf: currentFilterSelected });
	};

	render() {
		const { shownShelf } = this.state;
		const { readingShelf, wantToReadShelf, readShelf } = Shelves;

		readingShelf.books = this.props.myBooks.filter((book) => book.shelf === 'currentlyReading');
		wantToReadShelf.books = this.props.myBooks.filter((book) => book.shelf === 'wantToRead');
		readShelf.books = this.props.myBooks.filter((book) => book.shelf === 'read');

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
							onUpdateBookShelf={this.props.onUpdateBookShelf}
							books={readingShelf.books}
							shelfName={readingShelf.name}
							shelfDisplayName={readingShelf.displayName}
						/>
					)}

				{(shownShelf === 0 || shownShelf === wantToReadShelf.id) &&
					wantToReadShelf.books.length > 0 && (
						<SingleShelf
							onUpdateBookShelf={this.props.onUpdateBookShelf}
							books={wantToReadShelf.books}
							shelfName={wantToReadShelf.name}
							shelfDisplayName={wantToReadShelf.displayName}
						/>
					)}

				{(shownShelf === 0 || shownShelf === readShelf.id) &&
					readShelf.books.length > 0 && (
						<SingleShelf
							onUpdateBookShelf={this.props.onUpdateBookShelf}
							books={readShelf.books}
							shelfName={readShelf.name}
							shelfDisplayName={readShelf.displayName}
						/>
					)}

				{// Empty state if there is no book
				readingShelf.books.length <= 0 &&
					wantToReadShelf.books.length <= 0 &&
					readShelf.books.length <= 0 && (
						<EmptyState
							showSearchButton={true}
							message="You don't have any book in your shaves. Please add some books!!!"
						/>
					)}
			</div>
		);
	}
}

export default ShelvesPage;
