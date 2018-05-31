import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
const styles = theme => ({
	root: {
		position: 'absolute',
		color: 'white'
	},
	link: {
		color: 'inherit'
	}
})
const Cited = ({ classes, children, author, website, corner, theme }) => (
	<span
		className={classes.root}
		style={
			corner
				? { bottom: 5, left: 5 }
				: {
						top: 10,
						right: 10,
						color: '#E0E0E0',
						fontSize: 10
				  }
		}
	>
		Photo by{' '}
		<a href={author.link} className={classes.link}>
			{author.name}
		</a>{' '}
		on{' '}
		<a href={website.link} className={classes.link}>
			{website.name}
		</a>
	</span>
)
Cited.propTypes = {
	author: PropTypes.object.isRequired,
	website: PropTypes.object.isRequired,
	corner: PropTypes.bool
}

export default injectSheet(styles)(Cited)
