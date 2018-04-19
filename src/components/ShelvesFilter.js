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

	const isEmpty = shelves.filter((shelf) => shelf.books.length > 0).length === 0;

	return (
		<ButtonGroup size="md">
			{!isEmpty && (
				<Button
					className="filter-button btn-all"
					color="default"
					outline
					onClick={() => onFilterChanged(0)}
					active={shownShelf === 0}
				>
					All{' '}
					<Badge color="secondary" className="badge-books-count">
						{getTotalBooks()}
					</Badge>
				</Button>
			)}
			{shelves.map(
				(shelf) =>
					shelf.books.length > 0 && (
						<Button
							className={`filter-button ${
								shelf.id === 1
									? 'btn-reading'
									: shelf.id === 2 ? 'btn-to-read' : 'btn-read'
							}`}
							color="default"
							outline
							key={shelf.id}
							onClick={() => onFilterChanged(shelf.id)}
							active={shownShelf === shelf.id}
						>
							{`${shelf.displayName} `}
							<Badge color="secondary" className="badge-books-count">
								{shelf.books.length}
							</Badge>
						</Button>
					)
			)}
		</ButtonGroup>
	);
};

ShelvesFilter.propTypes = {
	shelves: PropTypes.array.isRequired,
	shownShelf: PropTypes.number.isRequired
};

export default ShelvesFilter;
