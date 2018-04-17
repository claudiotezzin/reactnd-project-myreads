import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Badge } from 'reactstrap';

const ShelvesFilter = ({ shelves, shownShelf, onFilterChanged }) => {
	const getTotalBooks = () => {
		let totalCount = 0;
		for (const shelf of shelves) {
			totalCount += shelf.books.length;
		}
		return totalCount;
	};

	return (
		<ButtonGroup size="md">
			<Button
				className="filter-button btn-all"
				color="default"
				outline
				onClick={() => onFilterChanged(0)}
				active={shownShelf === 0}>
				All{' '}
				<Badge color="secondary" className="badge-books-count">
					{getTotalBooks()}
				</Badge>
			</Button>
			{shelves.map((shelf) => (
				<Button
					className={
						shelf.id === 1
							? 'filter-button btn-reading'
							: shelf.id === 2
								? 'filter-button btn-to-read'
								: 'filter-button btn-read'
					}
					color="default"
					outline
					key={shelf.id}
					onClick={() => onFilterChanged(shelf.id)}
					active={shownShelf === shelf.id}>
					{`${shelf.name} `}
					<Badge color="secondary" className="badge-books-count">
						{shelf.books.length}
					</Badge>
				</Button>
			))}
		</ButtonGroup>
	);
};

ShelvesFilter.propTypes = {
	shelves: PropTypes.array.isRequired,
	shownShelf: PropTypes.number.isRequired
};

export default ShelvesFilter;
