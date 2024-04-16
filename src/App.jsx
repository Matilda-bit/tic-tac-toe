import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx"
import { useState } from "react";
import Log from "./components/Log.jsx";
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X') ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPLayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPLayer = 'O'
      }

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex}, player: currentPLayer },
        ...prevTurns,
      ];
      return updateTurns;
    })
  }

  return (

    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
      
        </ol>
        <GameBoard 
        onSelectSquare={handleSelectSquare} 
        turns={gameTurns} />
        <Log />

      </div>

      coming soon...
      </main>
  )
}

export default App;
