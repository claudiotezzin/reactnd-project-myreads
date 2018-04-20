import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, Button, Row, ButtonGroup } from 'reactstrap';
import LoadingIndicator from 'components/LoadingIndicator';
import BookDetailModal from 'components/BookDetailModal';
import { GetShelfIdFromName } from 'utils/helper.js';

class BookCard extends React.Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		onUpdateBookShelf: PropTypes.func.isRequired
	};

	state = {
		shelfSelected: GetShelfIdFromName(this.props.book.shelf),
		showDetail: false
	};

	isUpdating = false;

	onRadioBtnClick(currentSelected) {
		const oldShelfId = GetShelfIdFromName(this.props.book.shelf);

		this.props.onUpdateBookShelf(this.props.book, oldShelfId, currentSelected);
		this.isUpdating = true;
		// this.forceUpdate();
		this.setState((prevState) => ({
			shelfSelected: currentSelected === prevState.shelfSelected ? 0 : currentSelected
		}));
	}

	onToggleDetail = () => {
		this.setState({
			showDetail: !this.state.showDetail
		});
	};

	componentDidUpdate() {
		this.isUpdating = false;
	}

	render() {
		const { book } = this.props;

		return (
			<div>
				{this.state.showDetail && (
					<BookDetailModal
						book={book}
						onToggle={this.onToggleDetail}
						shallOpen={this.state.showDetail}
					/>
				)}

				<Card className="card-container">
					<CardBody className="book-card-body">
						<CardTitle className="card-title">{book.title}</CardTitle>
						<Row>
							<img
								className="book-cover rounded border mx-auto"
								src={book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''}
								alt={book.name}
							/>
						</Row>
					</CardBody>
					<Button
						type="button"
						color="light"
						onClick={() => this.onToggleDetail()}
						className="btn px-3 book-info rounded-circle ml-auto"
					>
						<i className="fa fa-info" aria-hidden="true" />
					</Button>
					{this.isUpdating && <LoadingIndicator />}
					<Row noGutters>
						<ButtonGroup className="btn-block">
							<Button
								className="button-flat btn-reading btn-secondary"
								color="default"
								onClick={() => this.onRadioBtnClick(1)}
								active={this.state.shelfSelected === 1}
							>
								Reading
							</Button>
							<Button
								className="button-flat btn-to-read btn-secondary"
								color="default"
								onClick={() => this.onRadioBtnClick(2)}
								active={this.state.shelfSelected === 2}
							>
								To Read
							</Button>
							<Button
								className="button-flat btn-read btn-secondary"
								color="default"
								onClick={() => this.onRadioBtnClick(3)}
								active={this.state.shelfSelected === 3}
							>
								Read
							</Button>
						</ButtonGroup>
					</Row>
				</Card>
			</div>
		);
	}
}

export default BookCard;
