import React from 'react'
import injectSheet from 'react-jss'
import Cited from './Cited'
import emperor from '../img/emperorPenguin.jpg'
import african from '../img/africanPenguin.jpg'
const styles = theme => ({
	root: {
		position: 'relative',
		height: 250,
		width: '90vw',
		backgroundColor: theme.palette.mix,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		borderWidth: '0px',
		borderBottomWidth: '5px',
		borderStyle: 'solid',
		borderColor: theme.palette.mix,
		borderImage: `${theme.accentGradient} 100`,
		boxShadow: theme.shadow,
		[theme.breakpoints.lg]: {
			height: 800,
			width: 400
		}
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
const Card = ({ classes, children, img, theme }) => {
	if (img === 'african') {
		return (
			<div
				className={classes.root}
				style={{ backgroundImage: `${theme.gradient}, url(${african})` }}
			>
				<Cited
					author={{
						name: 'jean wimmerlin',
						link: 'https://unsplash.com/@jwimmerli'
					}}
					website={{ name: 'Unsplash', link: 'https://unsplash.com/' }}
				/>
				<span className={classes.title}>African Penguins</span>
			</div>
		)
	} else {
		return (
			<div
				className={classes.root}
				style={{
					backgroundImage: `${theme.gradient}, url(${emperor})`
				}}
			>
				<Cited
					author={{
						name: 'Ian Parker',
						link: 'https://unsplash.com/@evanescentlight'
					}}
					website={{
						name: 'Unsplash',
						link: 'https://unsplash.com/'
					}}
				/>
				<span className={classes.title}>Emperor Penguins</span>
			</div>
		)
	}
}

export default injectSheet(styles)(Card)
