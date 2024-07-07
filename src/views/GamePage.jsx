import { useEffect, useState } from "react";
import Card from "../components/Card";
import { generateCardsDeck, randomizeArray } from "../services/arrayUtils";

export default function GamePage({ setPlayer, setComputer, player, computer, setPages }) {
  const [deck, setDeck] = useState(() => generateCardsDeck());

  useEffect(() => {
    const playerDeck = [];
    const computerDeck = [];
    randomizeArray(playerDeck, computerDeck, deck);

    setPlayer({ ...player, cardDeck: playerDeck });
    setComputer({ ...computer, cardDeck: computerDeck });
  }, [deck, setPlayer, setComputer]);

  useEffect(() => {
    if (player.cardDeck.length === 1 || computer.cardDeck.length === 1) {
      setPages(2); // Move to ScorePage
    }
  }, [player.cardDeck.length, computer.cardDeck.length, setPages]);

  function drawCards() {
    if (player.cardDeck.length > 0 && computer.cardDeck.length > 0) {
      const playerCard = player.cardDeck.shift();
      const computerCard = computer.cardDeck.shift();
      if (playerCard > computerCard) {
        setPlayer((prev) => ({ ...prev, wins: prev.wins + 1, gamesPlayed: prev.gamesPlayed + 1 }));
        setComputer((prev) => ({ ...prev, losses: prev.losses + 1, gamesPlayed: prev.gamesPlayed + 1 }));
      } else if (playerCard < computerCard) {
        setPlayer((prev) => ({ ...prev, losses: prev.losses + 1, gamesPlayed: prev.gamesPlayed + 1 }));
        setComputer((prev) => ({ ...prev, wins: prev.wins + 1, gamesPlayed: prev.gamesPlayed + 1 }));
      } else {
        setPlayer((prev) => ({ ...prev, gamesPlayed: prev.gamesPlayed + 1 }));
        setComputer((prev) => ({ ...prev, gamesPlayed: prev.gamesPlayed + 1 }));
      }
    }
  }

  return (
    <div className="game-page">
      <div className="score-container">
        <div className="computer-score">COMPUTER</div>
        <div className="player-score">YOU</div>
      </div>
      <div className="card-display">
        {player.cardDeck.length > 0 && computer.cardDeck.length > 0 && (
          <>
            <Card number={computer.cardDeck[0]} />
            <Card number={player.cardDeck[0]} />
          </>
        )}
      </div>
      <button onClick={drawCards} className="next-button">Next</button>
    </div>
  );
}
