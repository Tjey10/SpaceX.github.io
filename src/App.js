import Sections from './Component/Sections';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Data from './Data';
import './App.css';

function App() {

  const sections= Data.map(Dat => {
    return(
      <Sections

        Dat={Dat}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <>
         {sections}
      </>
      <Footer/>
    </div>
  );
}

export default App;
