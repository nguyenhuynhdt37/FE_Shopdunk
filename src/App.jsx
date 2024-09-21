import Footer from './layouts/Footter'
import Header from './layouts/Header'
import AppRouters from './Routers'
import ScrollToTopButton from './components/ScrollToTopButton'
import CheckToken from './components/CheckToken'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className="box-root w-100 relative">
      <Header />
      <div className="w-full m-0 bg-backgroudDefault">
        <AppRouters />
      </div>
      <footer>
        <Footer />
      </footer>
      <ScrollToTopButton />
      <Contact />
      <CheckToken />
    </div>
  )
}

export default App
