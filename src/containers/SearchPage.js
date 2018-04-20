import React from 'react';
import PropTypes from 'prop-types';
import { Row, Label } from 'reactstrap';
import ReactLoading from 'react-loading';
import SingleShelf from 'components/SingleShelf';
import TagsCloud from 'components/TagsCloud';
import EmptyState from 'components/EmptyState';
import { DebounceInput } from 'react-debounce-input';
import * as BooksAPI from 'api/BooksAPI';

class SearchPage extends React.Component {
	static propTypes = {
		myBooks: PropTypes.array.isRequired,
		onUpdateBookShelf: PropTypes.func.isRequired
	};

	state = {
		query: '',
		isSearching: false,
		noResultsFound: false,
		searchShelf: {
			id: 0,
			name: 'Search Result',
			books: []
		}
	};

	availableTags = [
		'Android',
		'Art',
		'Artificial Intelligence',
		'Astronomy',
		'Austen',
		'Baseball',
		'Basketball',
		'Bhagat',
		'Biography',
		'Brief',
		'Business',
		'Camus',
		'Cervantes',
		'Christie',
		'Classics',
		'Comics',
		'Cook',
		'Cricket',
		'Cycling',
		'Desai',
		'Design',
		'Development',
		'Digital Marketing',
		'Drama',
		'Drawing',
		'Dumas',
		'Education',
		'Everything',
		'Fantasy',
		'Film',
		'Finance',
		'First',
		'Fitness',
		'Football',
		'Future',
		'Games',
		'Gandhi',
		'Homer',
		'Horror',
		'Hugo',
		'Ibsen',
		'Journey',
		'Kafka',
		'King',
		'Lahiri',
		'Larsson',
		'Learn',
		'Literary Fiction',
		'Make',
		'Manage',
		'Marquez',
		'Money',
		'Mystery',
		'Negotiate',
		'Painting',
		'Philosophy',
		'Photography',
		'Poetry',
		'Production',
		'Programming',
		'React',
		'Redux',
		'River',
		'Robotics',
		'Rowling',
		'Satire',
		'Science Fiction',
		'Shakespeare',
		'Singh',
		'Swimming',
		'Tale',
		'Thrun',
		'Time',
		'Tolstoy',
		'Travel',
		'Ultimate',
		'Virtual Reality',
		'Web Development',
		'iOS'
	];

	onSearch = (query) => {
		if (query === '') {
			this.setState((prevState) => {
				prevState.isSearching = false;
				prevState.noResultsFound = false;
				prevState.query = query;
				prevState.searchShelf.books = [];
				return prevState;
			});
		} else {
			this.setState({ isSearching: true, query: query });
			BooksAPI.search(query).then((books) => {
				if (books.error === undefined) {
					const newBooksArray = books.map((book) => {
						const bookFound = this.props.myBooks.find(
							(myBook) => myBook.id === book.id
						);
						return bookFound !== undefined ? bookFound : book;
					});

					this.setState((prevState) => {
						prevState.isSearching = false;
						prevState.noResultsFound = false;
						prevState.searchShelf.books = newBooksArray;
						return prevState;
					});
				} else {
					this.setState((prevState) => {
						prevState.isSearching = false;
						prevState.noResultsFound = true;
						prevState.searchShelf.books = [];
						return prevState;
					});
				}
			});
		}
	};

	render() {
		const { searchShelf, query, isSearching, noResultsFound } = this.state;

		return (
			<div className="container main-content">
				<Row className="search-row">
					<Label className="text-muted search-label">Search: </Label>
					<DebounceInput
						className="search-input"
						minLength={1}
						placeholder="Book Title"
						debounceTimeout={500}
						value={query}
						onChange={(event) => this.onSearch(event.target.value)}
					/>
				</Row>

				<TagsCloud tags={this.availableTags} onTagClicked={this.onSearch} />

				{isSearching && (
					<Row className="justify-content-center">
						<ReactLoading type="bubbles" color="#3cd9b8" height={567} width={275} />
					</Row>
				)}

				{!isSearching &&
					searchShelf.books.length > 0 && (
						<SingleShelf
							onUpdateBookShelf={this.props.onUpdateBookShelf}
							books={searchShelf.books}
							shelfName={'none'}
							shelfDisplayName={'Search Result'}
						/>
					)}

				{!isSearching &&
					noResultsFound && (
						<EmptyState message="Ops! We didn't found this book. Try to use our predefined tags below search box" />
					)}
			</div>
		);
	}
}

export default SearchPage;
