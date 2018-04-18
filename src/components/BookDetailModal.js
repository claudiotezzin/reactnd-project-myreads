import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const BookDetailModal = ({ onToggle, shallOpen, book }) => {
	return (
		<div>
			<Modal isOpen={true} toggle={onToggle} className="modal-dialog-centered">
				<ModalHeader toggle={onToggle}>{book.title}</ModalHeader>
				<ModalBody>{book.description}</ModalBody>
				<ModalBody>Auhtors: {book.authors.join(', ')}</ModalBody>
				<ModalBody>Publisher: {book.publisher}</ModalBody>
				<ModalBody className="row no-gutters">
					Rating:{' '}
					<ReactStars className="rating-stars" value={book.averageRating} edit={false} />
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={() => window.open(book.previewLink, '_blank')}>
						Preview
					</Button>{' '}
				</ModalFooter>
			</Modal>
		</div>
	);
};

BookDetailModal.propTypes = {
	shallOpen: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired,
	book: PropTypes.object.isRequired
};

export default BookDetailModal;
