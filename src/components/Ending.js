import React from 'react'
import injectSheet from 'react-jss'
import Penguin from './Penguin'
const styles = theme => ({
	root: {
		height: 600,
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.lg]: {
			flexDirection: 'row',
			alignItems: 'flex-end'
		},
		justifyContent: 'center',
		alignItems: 'center',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		marginBottom: 100
	},
	greyHeading: {
		paddingLeft: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 10,
		textAlign: 'center',
		position: 'relative',
		color: '#838a96',
		fontWeight: 400,
		fontFamily: 'Arvo',
		fontSize: 40,
		maxWidth: 500,
		'&:before': {
			content: "'|'",
			paddingRight: 20,
			color: '#fb6976'
		},
		'&:after': {
			content: "'|'",
			paddingLeft: 20,
			color: '#fb6976'
		}
	},
	penguin: {
		width: 100
	}
})
const Ending = ({ classes, children }) => (
	<div className={classes.root}>
		<h2
			className={classes.greyHeading}
			style={{ marginRight: 50, alignSelf: 'center' }}
		>
			This amazing penguin says goodbye!
		</h2>
		<Penguin style={{ marginLeft: 50 }} className={classes.penguin} />
	</div>
)

export default injectSheet(styles)(Ending)
