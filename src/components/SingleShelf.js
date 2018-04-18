import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Label } from 'reactstrap';
import BookCard from 'components/BookCard';

const SingleShelf = ({ shelf, onUpdateBookShelf }) => {
	return (
		<div>
			<Row>
				<Col>
					<hr />
				</Col>
				<Label className="col-auto">{shelf.name}</Label>
				<Col>
					<hr />
				</Col>
			</Row>
			<Row>
				{shelf.books.map((book) => (
					<BookCard
						onUpdateBookShelf={onUpdateBookShelf}
						key={book.id}
						book={book}
						shelfId={shelf.id}
					/>
				))}
			</Row>
		</div>
	);
};

SingleShelf.propTypes = {
	shelf: PropTypes.object.isRequired,
	onUpdateBookShelf: PropTypes.func.isRequired
};

export default SingleShelf;
