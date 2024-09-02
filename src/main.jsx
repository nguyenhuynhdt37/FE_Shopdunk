import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import GlobalStyle from './components/GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom'
// import "antd/dist/antd.css";
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
