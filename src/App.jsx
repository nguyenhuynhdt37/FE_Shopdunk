import Footer from "./layouts/Footter/Footer";
import Header from "./layouts/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
const App = () => {
  return (
    <div className="box-root w-100">
      <Header />
      <div className="w-100 m-0" style={{ paddingTop: "6.4rem" }}>
        <HomePage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
