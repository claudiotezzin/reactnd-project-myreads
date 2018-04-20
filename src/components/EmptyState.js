import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Label, Button } from 'reactstrap';

const EmptyState = ({ message, showSearchButton }) => {
	return (
		<Row className="empty-state mx-auto">
			<Row>
				<Label className="col-12 label text-muted col-auto">{message}</Label>
			</Row>
			<Row className="justify-content-center">
				{showSearchButton && (
					<Button tag={Link} to="/search" color="primary">
						Search
					</Button>
				)}
			</Row>
		</Row>
	);
};

EmptyState.propTypes = {
	message: PropTypes.string.isRequired,
	showSearchButton: PropTypes.bool
};

EmptyState.defaultProps = {
	showSearchButton: false
};

export default EmptyState;
