import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'

const appJsx = (
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Layout>
			<App />
		</Layout>
	</BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
