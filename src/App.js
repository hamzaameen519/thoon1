import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="sc-eDLKkx eTbKOW !px-40">
      <Navbar />

      <div className="my-40 flex justify-between flex-wrap">
        <div className="mb-16">
          <Card />
        </div>
        <div className="mb-16">
          <Card />
        </div>
        <div className="mb-16">
          <Card />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
