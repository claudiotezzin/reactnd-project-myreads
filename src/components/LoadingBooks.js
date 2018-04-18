import React from 'react';
import { Row, Label } from 'reactstrap';

const LoadingBooks = () => {
	return (
		<div className="loading-indicator">
			<Row>
				<Label className="text-primary col-auto">
					We are getting your books from the respective shelves...
				</Label>
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

export default LoadingBooks;
