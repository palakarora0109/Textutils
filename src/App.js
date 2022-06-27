import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title={"Textutils"}/>

    <div className='container'>
      <Textform 
      heading={"Enter the text to analyze"}/>
    </div>

    <div className="container">
      <About about={"About Us"}/>
    </div>
    </>
  );
}

export default App;
