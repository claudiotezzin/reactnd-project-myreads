import React from 'react';
import { Row } from 'reactstrap';
import ReactLoading from 'react-loading';

const LoadingIndicator = () => {
	return (
		<div className="loading-indicator-bkg">
			<Row className="mx-auto justify-content-center">
				<ReactLoading type="bubbles" color="#3cd9b8" height={250} width={100} />
			</Row>
		</div>
	);
};

export default LoadingIndicator;
