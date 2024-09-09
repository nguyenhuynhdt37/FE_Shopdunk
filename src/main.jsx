import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import GlobalStyle from './components/GlobalStyle'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css' // Import CSS của theme light
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <GlobalStyle>
          <App />
        </GlobalStyle>
      </Router>
    </Provider>
  </React.StrictMode>
)
