import React from 'react'
import injectSheet from 'react-jss'

const styles = theme => ({
	root: {
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
			<a href={to} className={classes.root}>
				{children}
			</a>
		)
	}
}

export default injectSheet(styles)(Jump)
