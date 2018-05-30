import React from 'react'
import injectSheet from 'react-jss'
import Jump from './Jump'
import { bubble as Menu } from 'react-burger-menu'
import Logo from '../img/logo.svg'
import LogoWhite from '../img/logo-white.svg'

const styles = theme => ({
	root: {
		zIndex: 1,
		height: 100,
		position: 'fixed',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%',
		transition: 'all 0.25s ease-out'
	},
	icon: {
		display: 'block',
		cursor: 'pointer',
		[theme.breakpoints.md]: {
			display: 'none'
		}
	},
	links: {
		display: 'none',
		[theme.breakpoints.md]: {
			display: 'block'
		}
	},
	item: {
		padding: theme.spacing.unit
	},
	logo: {
		width: '150px'
	}
})
const menuStyles = {
	bmMenu: {
		backgroundColor: '#2B2747',
		color: 'white',
		height: '100%'
	},
	bmMorphShape: { fill: '#2B2747' },
	bmItemList: {
		boxSizing: 'border-box',
		padding: 20,
		color: 'white',
		width: '100%',
		display: 'flex',
		flexDirection: 'column'
	}
}
class Navbar extends React.Component {
	state = {
		scrolled: false,
		open: false
	}
	componentDidMount() {
		window.addEventListener('scroll', () => {
			this.setState({
				open: false
			})
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
	handleClick(e) {
		// this.setState(prevState => ({ open: !prevState.open }))
		this.setState({
			open: !this.state.open
		})
	}
	handleStateChange(state) {
		this.setState({ open: state.isOpen })
	}
	render() {
		const { classes } = this.props
		const { scrolled, open } = this.state

		return (
			<div>
				<Menu
					style={{ color: 'red' }}
					isOpen={open}
					onStateChange={this.handleStateChange.bind(this)}
					styles={menuStyles}
				>
					<Jump to="#incredible" className={classes.item}>
						Incredible
					</Jump>
					<Jump to="#awesomeness" className={classes.item}>
						Awesomeness
					</Jump>
					<Jump to="#look-at-them" className={classes.item}>
						Look at them!
					</Jump>
				</Menu>
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
					<svg
						onClick={this.handleClick.bind(this)}
						className={classes.icon}
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
					>
						<path
							d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
							fill={scrolled ? '#fb6976' : 'white'}
						/>
					</svg>

					<Jump to="#">
						{scrolled ? (
							<img alt="Penguins logo" src={Logo} className={classes.logo} />
						) : (
							<img
								alt="Penguins logo"
								src={LogoWhite}
								className={classes.logo}
							/>
						)}
					</Jump>

					<div className={classes.links}>
						<Jump to="#incredible">Incredible</Jump>
						<Jump to="#awesomeness">Awesomeness</Jump>
						<Jump to="#look-at-them">Look at them!</Jump>
					</div>
				</nav>
			</div>
		)
	}
}

export default injectSheet(styles)(Navbar)
