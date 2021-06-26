import Routes from "./components/Routes";
import Footer from "./components/Footer";
import "./App.styles.scss";

function App() {
  return (
    <>
      <Routes />
      <div className="footerStyle">
        <Footer />
      </div>
    </>
  );
}

export default App;
