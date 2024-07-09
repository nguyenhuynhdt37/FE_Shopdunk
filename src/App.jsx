import Footer from "./layouts/Footter";
import Header from "./layouts/Header";
import AppRouters from "./Routers";
const App = () => {
  return (
    <div className="box-root w-100">
      <Header />
      <div className="w-100 m-0" style={{ paddingTop: "6.4rem" }}>
        <AppRouters />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
