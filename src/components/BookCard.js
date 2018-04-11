import React from 'react';
import {
	Card,
	CardBody,
	CardTitle,
	Button,
	Row,
	ButtonGroup
} from 'reactstrap';
import 'styles/css/bookcard.css';

class BookCard extends React.Component {
	state = { rSelected: 0 };

	onRadioBtnClick(currentSelected) {
		this.setState((state) => ({
			rSelected:
				currentSelected === this.state.rSelected ? 0 : currentSelected
		}));
	}

	render() {
		return (
			<Card className="card-container mx-auto">
				<Button
					type="button"
					color="light"
					className="btn px-3 book-info rounded-circle ml-auto">
					<i className="fa fa-info" aria-hidden="true" />
				</Button>

				<CardBody className="book-card-body">
					<CardTitle className="card-title">Card title</CardTitle>
					<Row>
						<img
							className="book-cover border border-primary mx-auto"
							src="http://via.placeholder.com/150x250"
							alt="Card cap"
						/>
					</Row>
				</CardBody>
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
