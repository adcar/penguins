import React from 'react'
import injectSheet from 'react-jss'
import emperor from '../img/emperorPenguin.jpg'
import african from '../img/africanPenguin.jpg'
const gradient = 'linear-gradient(rgb(43, 24, 76, 0.8), rgba(42, 53, 66, 0.9))'
const styles = theme => ({
	root: {
		height: 800,
		width: 400,
		backgroundColor: 'tomato',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		borderWidth: '0px',
		borderBottomWidth: '5px',
		borderStyle: 'solid',
		borderColor: 'tomato',
		borderImage: `${theme.accentGradient} 100`,
		boxShadow: theme.shadow
	},
	title: {
		color: 'white',
		fontFamily: 'Arvo',
		paddingTop: 100,
		fontSize: 20,
		'&:before': {
			content: "'|'",
			paddingRight: 20
		},
		'&:after': {
			content: "'|'",
			paddingLeft: 20
		}
	}
})
const Card = ({ classes, children, img }) => {
	if (img === 'african') {
		return (
			<div
				className={classes.root}
				style={{ backgroundImage: `${gradient}, url(${african})` }}
			>
				<span className={classes.title}>African Penguins</span>
			</div>
		)
	} else {
		return (
			<div
				className={classes.root}
				style={{ backgroundImage: `${gradient}, url(${emperor})` }}
			>
				<span className={classes.title}>Emperor Penguins</span>
			</div>
		)
	}
}

export default injectSheet(styles)(Card)
