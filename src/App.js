import logo from './logo.svg';
import './App.css';
import Main from './component/main.js'
import Navbar from './component/navbar.js';
import Footer from './component/footer.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
