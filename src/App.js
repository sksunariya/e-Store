import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Testimonials from '../src/components/Testimonials';

function App() {
  return (

    <div >
      <div className='bg-slate-900'>
        <Navbar/>
      </div>

      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
      </div>

    </div>

  );
}

export default App;
