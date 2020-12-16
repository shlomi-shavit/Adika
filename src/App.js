import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.module.scss';
import './global/global.scss';

// Component
import Header from './component/header/header';
import CategoriesNav from './component/categories-nav/categories-nav';
import SelectedPage from './component/selected-page/selected-page'

function App() {
  return (
    <div className="App">

      <Router>

        <Header />

        <CategoriesNav />

        <SelectedPage />

      </Router>

    </div>
  );
}

export default App;
