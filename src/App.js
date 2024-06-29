import './App.css';
import Footer from './Components/Footer_good';
import Header from './Components/Header';
import Main from './Components/Main_Component';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
