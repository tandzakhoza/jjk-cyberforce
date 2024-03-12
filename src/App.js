import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import mybg from './images/bg5.JPG'


function App() {
  const bgstyle = {
    backgroundImage: `url(${mybg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'Cover',
    height: '100%',
    margin: 'auto'
  }

  return (
    <div style={bgstyle} className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
