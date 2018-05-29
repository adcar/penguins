import React from 'react'
import injectSheet from 'react-jss'
import antartica from '../img/antartica.jpg'
import penguins from '../img/emperorPenguins.jpg'
const styles = theme => ({
	root: {
		height: '110%',
		backgroundColor: 'tomato',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed'
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}
})
const gradient = 'linear-gradient(rgb(43, 24, 76, 0.95), rgba(42, 53, 66, 0.9))'
const Splash = ({ classes, children, mountains }) => (
	<div
		className={classes.root}
		style={
			mountains
				? { backgroundImage: `${gradient}, url(${antartica})` }
				: { backgroundImage: `${gradient}, url(${penguins})` }
		}
	>
		<div className={classes.center}>{children}</div>
	</div>
)

export default injectSheet(styles)(Splash)
