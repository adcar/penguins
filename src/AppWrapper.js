import React from 'react'
import App from './App'
import { ThemeProvider } from 'react-jss'
const theme = {
	spacing: {
		unit: 10
	},
	accentGradient: 'linear-gradient(to right, #ff0844, #ffb199)',
	gradient: `linear-gradient(to bottom right, rgba(43, 24, 76, 0.8), rgba(42, 53, 66, 0.9))`,
	shadow: 'rgba(0, 0, 0, 0.25) 1px 4px 18px 10px',
	trans: 'all 0.25s ease-out',
	breakpoints: {
		sm: '@media screen and (min-width: 480px)',
		md: '@media screen and (min-width: 720px)',
		lg: '@media screen and (min-width: 1100px)'
	},
	palette: {
		primary: '#2b184c',
		secondary: '#2a3542',
		mix: '#2B2747'
	}
}

export default () => (
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
)
