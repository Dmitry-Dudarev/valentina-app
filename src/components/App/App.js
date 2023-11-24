import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';

function App() {
  return (
    <div className="app">
      <div className='app-content'>
      <Header />
      <Routes>
        {/* <Route path='/' element={} /> */}
      </Routes>
      </div>
    </div>
  );
}

export default App;
