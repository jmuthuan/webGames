import './App.css';
import './components/Cards.css'
//import './components/CardGame.css'
//import Cards from './components/Cards';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchGames from './controllers/SearchGames';
import CardGame from './components/CardGame';
import Filters from './components/Filters';
import AsideNav from './components/AsideNav';
import Header from './components/Header';

function App() {
  return (
    <div className="App">            
        <Header />
        <main>
        <AsideNav />
        <Filters />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchGames />} />
            <Route path='/games/:slug' element={<CardGame />} />
          </Routes>
        </BrowserRouter>
      </main>

    </div>
  );
}

export default App;
