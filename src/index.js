import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './Header'
import registerServiceWorker from './serviceWorker'

//ReactDOM.render(<Header />, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()