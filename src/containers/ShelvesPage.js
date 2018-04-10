import React from 'react';
import { Row } from 'reactstrap';
import BookCard from 'components/BookCard';
import 'styles/shelvespage.css';

class ShelvesPage extends React.Component {
	state = {};

	render() {
		return (
			<div className="shelves-container">
				<Row>
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
				</Row>
			</div>
		);
	}
}

export default ShelvesPage;
