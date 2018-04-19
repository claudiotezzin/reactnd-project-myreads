import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Label, Button } from 'reactstrap';

const EmptyState = ({ message }) => {
	return (
		<div className="loading-indicator">
			<Row>
				<Label className="text-muted col-auto">{message}</Label>
			</Row>
			<Row className="justify-content-center">
				<Button tag={Link} to="/search" color="primary">
					Search
				</Button>
			</Row>
		</div>
	);
};

EmptyState.propTypes = {
	message: PropTypes.string.isRequired
};
export default EmptyState;
