import Footer from "./layouts/Footter";
import Header from "./layouts/Header";
import AppRouters from "./Routers";
const App = () => {
  return (
    <div className="box-root w-100">
      <Header />
      <div className="w-full m-0 bg-backgroudDefault">
        <AppRouters />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
