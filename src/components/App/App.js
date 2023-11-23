import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='app-content'>
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
