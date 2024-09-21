import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './input.css'
import './markdown.scss'
import 'github-markdown-css/github-markdown.css'
import GlobalStyle from './components/GlobalStyle'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css' // Import CSS của theme light
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.js'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <GlobalStyle>
            <App />
          </GlobalStyle>
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
