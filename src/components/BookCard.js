import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, Button, Row, ButtonGroup } from 'reactstrap';
import LoadingIndicator from 'components/LoadingIndicator';
import BookDetailModal from 'components/BookDetailModal';

class BookCard extends React.Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		isChangingState: PropTypes.bool.isRequired,
		onUpdateBookShelf: PropTypes.func.isRequired
	};

	state = {
		shelfSelected: this.props.shelfId,
		isChangingState: this.props.isChangingState,
		showDetail: false
	};

	onRadioBtnClick(currentSelected) {
		const newShelfId = currentSelected === this.state.shelfSelected ? 0 : currentSelected;

		this.props.onUpdateBookShelf(this.props.book, this.state.shelfSelected, currentSelected);

		this.setState((state) => ({
			shelfSelected: newShelfId,
			isChangingState: true
		}));
	}

	onToggleDetail = () => {
		this.setState({
			showDetail: !this.state.showDetail
		});
	};

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
								src={book.imageLinks.thumbnail}
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
					{this.state.isChangingState && <LoadingIndicator />}
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
