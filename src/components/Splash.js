import React from 'react'
import injectSheet from 'react-jss'
import antartica from '../img/antartica.jpg'
import penguins from '../img/emperorPenguins.jpg'
const styles = theme => ({
	root: {
		height: '110%',
		backgroundColor: theme.palette.mix,
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
const Splash = ({ classes, children, mountains, theme }) => (
	<div
		className={classes.root}
		style={
			mountains
				? { backgroundImage: `${theme.gradient}, url(${antartica})` }
				: { backgroundImage: `${theme.gradient}, url(${penguins})` }
		}
	>
		<div className={classes.center}>{children}</div>
	</div>
)

export default injectSheet(styles)(Splash)
