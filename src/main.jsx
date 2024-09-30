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
import { SnackbarProvider } from 'notistack'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            maxSnack={3}
            autoHideDuration={2500}
            classes={{
              containerRoot: 'mt-24',
            }}
            style={{ fontSize: '1.2rem' }}
          >
            <GlobalStyle>
              <App />
            </GlobalStyle>
          </SnackbarProvider>
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
