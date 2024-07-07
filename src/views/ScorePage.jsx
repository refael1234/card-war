import React, { useState, useEffect } from 'react';

export default function ScorePage({ player, computer, setPages }) {
  const [winner, setWinner] = useState("no one");
  const [winLose, setWinLose] = useState("LOSE");
  const [difference, setDifference] = useState(0);
  const [playerScore, setPlaterScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  useEffect(() => {
    if ((player.wins - computer.wins) > difference) {
      setWinner(player.name);
      setWinLose("WIN");
      setDifference (player.wins - computer.wins)
      setPlaterScore(1)
      
    } else if ((computer.wins - player.wins) > difference) {
      setWinner("computer");
      setWinLose("LOSE");
      setDifference (computer.wins - player.wins)
      setComputerScore(1)
      
    } else {
      setWinner("computer");
      setWinLose("LOSE");
      setComputerScore(1)
      
    }
  }, [player.wins, computer.wins]);

  console.log(winner);

  function startNewWar() {
    setPages(1);
  }

  return (
    <div className="score-page">
      <h3>{winLose}</h3>
      <h2>{playerScore}  - {computerScore}</h2>

      <h5>the winner is: {winner}</h5>
      <h5>total: {player.wins}  - {computer.wins}</h5>
      
      <button onClick={startNewWar}>again?</button>
      
    </div>
  );
}
