import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <Navigation />
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
