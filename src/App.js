import React, { Component } from 'react'
import injectSheet from 'react-jss'
import './main.css'
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
		textAlign: 'center',
		position: 'relative',
		fontFamily: 'Arvo',
		fontWeight: 400,
		color: 'white',
		fontSize: 50,
		maxWidth: 740,
		'&:before': {
			content: "'| '",

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
		maxWidth: 500,
		lineHeight: '1.5em',
		marginBottom: 50
	},
	anchor: {
		visibility: 'hidden',
		position: 'relative',
		bottom: 300
	},
	contentWrapper: {
		padding: theme.spacing.unit * 3
	},
	contentWrapperCenter: {
		padding: theme.spacing.unit * 3,
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center'
	}
})
class App extends Component {
	render() {
		const { classes } = this.props
		return (
			<div id="outerContainer">
				<Navbar />
				<div className={classes.wrapper} id="pageWrap">
					<Splash mountains>
						<h1 className={classes.title}>
							Penguins: the greatest animals on Earth.
						</h1>
					</Splash>
					<Block color="white" img="african">
						<div className={classes.anchor} id="incredible" />
						<div className={classes.contentWrapper}>
							<h2 className={classes.subheading}>They're so incredible.</h2>
							<p className={classes.desc}>
								I just absolutely love penguins. They're by far the most
								superior species in the universe (including humans). This
								penguin, specically, is an African penguin. Defintely a pretty
								cool type of penguin.
							</p>
							<Button>Let's Talk</Button>
						</div>
					</Block>
					<Splash road>
						<div className={classes.anchor} id="awesomeness" />

						<div className={classes.contentWrapperCenter}>
							<h2
								className={classes.subheading}
								style={{ textAlign: 'center' }}
							>
								Admire their supreme awesomeness.
							</h2>
							<p
								className={classes.desc}
								style={{ textAlign: 'center', color: 'white' }}
							>
								Honestly, just take a look at the majestic posture of the
								penguins behind this text and tell me penguins aren't the
								greatest beings this world has to offer.
							</p>
							<WhiteButton style={{ margin: '0 auto' }}>Learn Now</WhiteButton>
						</div>
					</Splash>
					<Block color="#F5F5F5" right img="emperor">
						<div className={classes.anchor} id="look-at-them" />
						<div className={classes.contentWrapper}>
							<h2 className={classes.subheading}>I mean, just look at them!</h2>
							<p className={classes.desc}>
								This emperor penguin perfectly resembles a Greek God. In fact,
								if Zeus were to take form of any animal, you can count on him
								taking the form of an emperor penguin.
							</p>
							<Button>Get Started</Button>
						</div>
					</Block>
					<Ending />
					<Footer />
				</div>
			</div>
		)
	}
}

export default injectSheet(styles)(App)
