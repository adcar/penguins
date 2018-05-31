import React from 'react'
import injectSheet from 'react-jss'
import antartica from '../img/antartica.jpg'
import penguins from '../img/emperorPenguins.jpg'
import Cited from './Cited'
const styles = theme => ({
	root: {
		position: 'relative',
		zIndex: '-1',
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
		{mountains ? (
			<Cited
				corner
				author={{
					name: 'Filip Zrnzević',
					link: 'https://unsplash.com/@filipz'
				}}
				website={{
					name: 'Unsplash',
					link: 'https://unsplash.com/'
				}}
			/>
		) : (
			<Cited
				corner
				author={{
					name: 'Ian Parker',
					link: 'https://unsplash.com/@evanescentlight'
				}}
				website={{
					name: 'Unsplash',
					link: 'https://unsplash.com/'
				}}
			/>
		)}
	</div>
)

export default injectSheet(styles)(Splash)
