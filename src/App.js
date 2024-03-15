import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='sc-eDLKkx eTbKOW !px-40'>
      {/* <Navbar />
      <GameZone /> */}
      <div className='flex justify-between flex-wrap'>
        <div className='mb-16'>
          <Card />
        </div>
        <div className='mb-16'>
          <Card />
        </div>
        <div className='mb-16'>
          <Card />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
