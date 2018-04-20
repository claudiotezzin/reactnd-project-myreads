import React from 'react';
import PropTypes from 'prop-types';
import { Row, Label } from 'reactstrap';

const LoadingBooks = ({ message }) => {
	return (
		<div className="loading-indicator mx-auto">
			<Row>
				<Label className="col-12 text-primary col-auto">{message}</Label>
			</Row>
			<Row className="justify-content-center">
				<svg width="16px" height="12px">
					<polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
					<polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
				</svg>
			</Row>
		</div>
	);
};

LoadingBooks.propTypes = {
	message: PropTypes.string.isRequired
};

export default LoadingBooks;
