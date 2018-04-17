import React from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	CardBody,
	CardTitle,
	Button,
	Row,
	ButtonGroup
} from 'reactstrap';

class BookCard extends React.Component {
	static propTypes = {
		book: PropTypes.object.isRequired
	};

	state = { rSelected: this.props.shelfId };

	onRadioBtnClick(currentSelected) {
		this.setState((state) => ({
			rSelected:
				currentSelected === this.state.rSelected ? 0 : currentSelected
		}));
	}

	render() {
		const { book } = this.props;

		return (
			<Card className="card-container mx-auto">
				<CardBody className="book-card-body">
					<CardTitle className="card-title">{book.title}</CardTitle>
					<Row className="">
						<img
							className="book-cover rounded border mx-auto"
							src={book.imageLinks.thumbnail}
							alt="Card cap"
						/>
					</Row>
				</CardBody>
				<Button
					type="button"
					color="light"
					className="btn px-3 book-info rounded-circle ml-auto">
					<i className="fa fa-info" aria-hidden="true" />
				</Button>
				<Row noGutters>
					<ButtonGroup className="btn-block">
						<Button
							className="button-flat btn-reading btn-secondary"
							color="default"
							onClick={() => this.onRadioBtnClick(1)}
							active={this.state.rSelected === 1}>
							Reading
						</Button>
						<Button
							className="button-flat btn-to-read btn-secondary"
							color="default"
							onClick={() => this.onRadioBtnClick(2)}
							active={this.state.rSelected === 2}>
							To Read
						</Button>
						<Button
							className="button-flat btn-read btn-secondary"
							color="default"
							onClick={() => this.onRadioBtnClick(3)}
							active={this.state.rSelected === 3}>
							Read
						</Button>
					</ButtonGroup>
				</Row>
			</Card>
		);
	}
}

export default BookCard;
