import React from 'react';
import PropTypes from 'prop-types';
import { Row, Badge, Button, Collapse } from 'reactstrap';

class TagsCloud extends React.Component {
	state = {
		collapseTags: false
	};

	static propTypes = {
		tags: PropTypes.array.isRequired
	};

	toggle() {
		this.setState({ collapseTags: !this.state.collapseTags });
	}

	onTagClicked(tag) {
		this.toggle();
		this.props.onTagClicked(tag);
	}

	render() {
		const { collapseTags } = this.state;
		const { tags } = this.props;

		return (
			<Row className="tags-row">
				<Button
					color="primary"
					className={`mx-auto ${!collapseTags ? 'open-tags' : 'close-tags'}`}
					onClick={() => this.toggle()}
					style={{ marginBottom: '1rem' }}
				/>
				<Collapse className="collapse-tags-panel" isOpen={collapseTags}>
					{tags.map((tag) => (
						<Badge
							onClick={() => this.onTagClicked(tag)}
							key={tag}
							id="tag"
							href=""
							color="light"
							pill
						>
							{tag}
						</Badge>
					))}
				</Collapse>
			</Row>
		);
	}
}

export default TagsCloud;
