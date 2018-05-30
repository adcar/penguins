import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Card from './Card.js'
const styles = theme => ({
	root: {
		height: 800,
		[theme.breakpoints.lg]: {
			height: 600
		},
		backgroundColor: 'tomato',
		display: 'flex',
		justifyContent: 'stretch',
		alignItems: 'center'
	},
	flex: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	inner: {
		margin: '0 auto',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'column',
		[theme.breakpoints.lg]: {
			flexDirection: 'row !important',
			height: 1000
		}
	}
})

const Block = ({ classes, children, color, right, img }) => {
	return (
		<div
			className={classes.root}
			style={{
				backgroundColor: color
			}}
		>
			<div
				className={classes.inner}
				style={{ flexDirection: right ? 'column-reverse' : null }}
			>
				<div>
					{right ? (
						<div className={classes.flex}>
							<div>{children}</div>
						</div>
					) : (
						<Card img={img} />
					)}
				</div>
				{right ? (
					<Card img={img} />
				) : (
					<div className={classes.inner}>
						<div className={classes.flex}>
							<div>{children}</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

Block.propTypes = {
	color: PropTypes.string.isRequired
}

export default injectSheet(styles)(Block)
