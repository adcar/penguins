import React, { Component } from 'react'
import injectSheet from 'react-jss'
import './icb.css'
import Splash from './components/Splash'
import Block from './components/Block'
import Ending from './components/Ending'
import Button from './components/Button'
import WhiteButton from './components/WhiteButton'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const styles = theme => ({
	wrapper: {
		height: '100%'
	},
	title: {
		position: 'relative',

		fontFamily: 'Arvo',
		fontWeight: 400,
		color: 'white',
		fontSize: 50,
		width: 740,
		'&:before': {
			content: "'| '",
			position: 'absolute',
			left: -23,
			color: '#E0E0E0'
		},
		'&:after': {
			content: "' |'",
			color: '#E0E0E0'
		}
	},
	subheading: {
		fontFamily: 'Arvo',
		fontWeight: 400,
		fontSize: 30,
		backgroundImage: theme.accentGradient,
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent'
	},
	desc: {
		width: 500,
		lineHeight: '1.5em',
		marginBottom: 50
	},
	anchor: {
		visibility: 'hidden',
		position: 'relative',
		bottom: 300
	}
})
class App extends Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.wrapper}>
				<Navbar />
				<Splash mountains>
					<h1 className={classes.title}>
						Penguins: the greatest animals on Earth.
					</h1>
				</Splash>
				<Block color="white" img="african">
					<div className={classes.anchor} id="incredible" />
					<h2 className={classes.subheading}>They're so incredible.</h2>
					<p className={classes.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
						nec purus sollicitudin, tincidunt sem in, scelerisque ligula. In et
						enim rutrum, facilisis tellus at, volutpat tellus. Curabitur sit
						amet nisl diam. Sed a lacus nulla. Morbi eget nisl finibus, gravida
						nulla quis, congue justo. Nullam quis orci at magna vehicula
						elementum. Aliquam aliquam orci augue, sed posuere lorem mattis in.
						Pellentesque efficitur ultricies nibh, eget venenatis neque
						sollicitudin id. Suspendisse accumsan est sem, nec volutpat felis
						euismod ac.
					</p>
					<Button>Let's Talk</Button>
				</Block>
				<Splash road>
					<div className={classes.anchor} id="awesomeness" />
					<h2 className={classes.subheading} style={{ textAlign: 'center' }}>
						Admire their supreme awesomeness.
					</h2>
					<p
						className={classes.desc}
						style={{ textAlign: 'center', color: 'white' }}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
						nec purus sollicitudin, tincidunt sem in, scelerisque ligula. In et
						enim rutrum, facilisis tellus at, volutpat tellus. Curabitur sit
						amet nisl diam. Sed a lacus nulla.
					</p>
					<WhiteButton>Learn Now</WhiteButton>
				</Splash>
				<Block color="#F5F5F5" right img="emperor">
					<div className={classes.anchor} id="look-at-them" />
					<h2 className={classes.subheading}>I mean, just look at them!</h2>
					<p className={classes.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
						nec purus sollicitudin, tincidunt sem in, scelerisque ligula. In et
						enim rutrum, facilisis tellus at, volutpat tellus. Curabitur sit
						amet nisl diam. Sed a lacus nulla. Morbi eget nisl finibus, gravida
						nulla quis, congue justo. Nullam quis orci at magna vehicula
						elementum. Aliquam aliquam orci augue, sed posuere lorem mattis in.
						Pellentesque efficitur ultricies nibh, eget venenatis neque
						sollicitudin id. Suspendisse accumsan est sem, nec volutpat felis
						euismod ac.
					</p>
					<Button>Get Started</Button>
				</Block>
				<Ending />
				<Footer />
			</div>
		)
	}
}

export default injectSheet(styles)(App)
