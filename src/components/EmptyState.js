import React from 'react';
import { Row, Label, Button } from 'reactstrap';

const EmptyState = (props) => {
	return (
		<div className="loading-indicator">
			<Row>
				<Label className="text-muted col-auto">
					You don't have any book in your shaves. Please add some books!!!
				</Label>
			</Row>
			<Row className="justify-content-center">
				<Button color="primary">Search</Button>
			</Row>
		</div>
	);
};

export default EmptyState;
