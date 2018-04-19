import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Label } from 'reactstrap';
import BookCard from 'components/BookCard';

const SingleShelf = ({ shelfName, books, onUpdateBookShelf, shelfDisplayName }) => {
	const singleShelfName = shelfDisplayName !== undefined ? shelfDisplayName : shelfName;

	return (
		<div>
			<Row>
				<Col>
					<hr />
				</Col>
				<Label className="col-auto">{singleShelfName}</Label>
				<Col>
					<hr />
				</Col>
			</Row>
			<Row className="justify-content-center">
				{books.map((book) => (
					<BookCard
						onUpdateBookShelf={onUpdateBookShelf}
						key={book.id}
						book={book}
						isChangingState={false}
					/>
				))}
			</Row>
		</div>
	);
};

SingleShelf.propTypes = {
	shelfName: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	onUpdateBookShelf: PropTypes.func.isRequired
};

export default SingleShelf;
