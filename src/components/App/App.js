import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';

function App() {
  // видимость боковой панели меню навигации
  const [isNavigationVisible, setNavigationVisible] = React.useState(false);

  // функция для изменения видимости боковой панели меню
  const changeNavigationVisibility = () => {
    setNavigationVisible(!isNavigationVisible)
  };

  return (
    <div className="app">
      <div className="app-container">
        <Header changeNavigationVisibility={changeNavigationVisibility} />
        <Navigation isNavigationVisible={isNavigationVisible} changeNavigationVisibility={changeNavigationVisibility} />
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
