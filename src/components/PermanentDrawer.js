import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const drawerWidth = 240;

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	appFrame: {
		height: 430,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%'
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`
	},
	'appBar-left': {
		marginLeft: drawerWidth
	},
	drawerPaper: {
		position: 'relative',
		width: drawerWidth
	},
	drawerLogo: {
		left: 0,
		top: 0,
		height: '10rem',
		width: drawerWidth,
		backgroundColor: theme.palette.primary.main
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3
	}
});

class PermanentDrawer extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.appFrame}>
				<AppBar
					position="absolute"
					className={classNames(
						classes.appBar,
						classes['appBar-left']
					)}>
					<Toolbar>
						<Typography variant="title" color="inherit" noWrap>
							Permanent drawer
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					classes={{
						paper: classes.drawerPaper
					}}>
					<div className={classes.drawerLogo} />
					TESTANDO
				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Typography>
						{'You think water moves fast? You should see ice.'}
					</Typography>
				</main>
			</div>
		);
	}
}

PermanentDrawer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PermanentDrawer);
