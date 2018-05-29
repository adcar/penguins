import React from 'react'
import injectSheet from 'react-jss'
import Jump from './Jump'
const styles = theme => ({
	root: {
		height: 100,
		position: 'fixed',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%',
		transition: 'all 0.25s ease-out'
	}
})

class Navbar extends React.Component {
	state = {
		scrolled: false
	}
	componentDidMount() {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 10) {
				this.setState({
					scrolled: true
				})
			} else {
				this.setState({
					scrolled: false
				})
			}
		})
	}
	render() {
		const { classes } = this.props
		const { scrolled } = this.state
		return (
			<nav
				className={classes.root}
				style={
					scrolled
						? {
								backgroundColor: 'white',
								boxShadow: '2px 4px 4px rgba(0,0,0,0.25)',
								color: '#fb6976'
						  }
						: {
								backgroundColor: 'transparent',
								boxShadow: 'none',
								color: 'white'
						  }
				}
			>
				<Jump to="#">
					<img alt="placeholder" src="https://via.placeholder.com/100x50" />
				</Jump>
				<div>
					<Jump to="#our-purpose">Our Purpose</Jump>
					<Jump to="#navigation">Navigation</Jump>
					<Jump to="#our-commitment">Our Commitment</Jump>
				</div>
			</nav>
		)
	}
}

export default injectSheet(styles)(Navbar)
