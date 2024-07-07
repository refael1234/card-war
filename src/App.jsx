import { useState } from 'react';
import './App.css';
import './GamePage.css'
import HomePage from './views/HomePage';
import GamePage from './views/GamePage';
import ScorePage from './views/ScorePage';

const pageIndices = {
  HomePage: 0,
  GamePage: 1,
  ScorePage: 2
};

function App() {
  const [player, setPlayer] = useState({ name: '', wins: 0, losses: 0, gamesPlayed: 0, cardDeck: [] });
  const [computer, setComputer] = useState({ wins: 0, losses: 0, gamesPlayed: 0, cardDeck: [] });
  const [currentPage, setCurrentPage] = useState(pageIndices.HomePage);

  function setView() {
    if (currentPage === pageIndices.GamePage) {
      return <GamePage setPlayer={setPlayer} setComputer={setComputer} player={player} computer={computer} setPages={setCurrentPage} />;
    } else if (currentPage === pageIndices.ScorePage) {
      return <ScorePage player={player} computer={computer} setPages={setCurrentPage} />;
    }
    return <HomePage setPages={setCurrentPage} setPlayer={setPlayer} />;
  }

  return (
    <div className="App">
      {setView()}
    </div>
  );
}

export default App;
