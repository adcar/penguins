import React from 'react'
import injectSheet from 'react-jss'
import LogoGreyscale from '../img/logo-greyscale.svg'

const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 100
	},
	link: {
		color: '#fb6976',
		textDecoration: 'none',
		textTransform: 'uppercase',
		fontSize: 12,
		padding: 10,
		margin: '0 10px'
	},
	logo: {
		display: 'none',
		width: '150px',
		[theme.breakpoints.md]: {
			display: 'block'
		}
	}
})
const Footer = ({ classes, children }) => (
	<footer className={classes.root}>
		<img alt="Penguins logo" src={LogoGreyscale} className={classes.logo} />
		<div className={classes.links}>
			<a
				href="https://en.wikipedia.org/wiki/Emperor_penguin"
				className={classes.link}
			>
				Emperor
			</a>
			<a
				href="https://en.wikipedia.org/wiki/African_penguin"
				className={classes.link}
			>
				African
			</a>
			<a
				href="https://en.wikipedia.org/wiki/Gentoo_penguin"
				className={classes.link}
			>
				Gentoo
			</a>
			<a
				href="https://en.wikipedia.org/wiki/King_penguin"
				className={classes.link}
			>
				King
			</a>
		</div>
	</footer>
)

export default injectSheet(styles)(Footer)
