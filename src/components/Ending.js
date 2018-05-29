import React from 'react'
import injectSheet from 'react-jss'
import Penguin from './Penguin'
const styles = theme => ({
	root: {
		height: 600,
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		marginBottom: 100
	},
	greyHeading: {
		position: 'relative',
		color: '#838a96',
		fontWeight: 400,
		fontFamily: 'Arvo',
		fontSize: 40,
		width: 500,
		'&:before': {
			position: 'absolute',
			left: -28,
			content: "' |'",
			paddingRight: 20,
			color: '#fb6976'
		},
		'&:after': {
			content: "'| '",
			paddingLeft: 20,
			color: '#fb6976'
		}
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
		<Penguin style={{ marginLeft: 50 }} />
	</div>
)

export default injectSheet(styles)(Ending)
