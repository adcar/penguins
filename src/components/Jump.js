import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
	root: {
		textDecoration: 'none',
		textTransform: 'uppercase',
		fontSize: 14,
		color: 'inherit',
		padding: 10,
		margin: '0 10px',
		transition: theme.trans,
		'&:hover': {
			backgroundColor: theme.palette.primary,
			color: 'white',
			transition: theme.trans
		}
	},
	logo: {
		textDecoration: 'none',
		textTransform: 'uppercase',
		fontSize: 14,
		color: 'inherit',
		padding: 10,
		margin: '0 10px'
	}
})
class Jump extends React.Component {
	render() {
		const { classes, children, to } = this.props

		return (
			<a
				href={to}
				className={children.type === 'img' ? classes.logo : classes.root}
				style={{ backgroundColor: 'transparent !important' }}
			>
				{children}
			</a>
		)
	}
}

export default injectSheet(styles)(Jump)
