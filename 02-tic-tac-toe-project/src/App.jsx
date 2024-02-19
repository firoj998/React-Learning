import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import Log from "./Components/Log";
import GameOver from "./Components/GameOver.jsx";
import {WINNING_COMBINATIONS} from "./Winning_combination.js"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns){
    let currentPlayer = 'X';
    if( gameTurns.length>0 && gameTurns[0].player === 'X')
    {
      currentPlayer = 'O';
    }
    return currentPlayer;
  }
function App() {
  // const [activePlayer , setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  let  gameBoard = [...initialGameBoard.map(array=>[...array])];

  for (const turn of gameTurns) {
       const {square, player} = turn;
       const {row, col} = square;
       gameBoard[row][col] = player;
 
  }
  let winner;
 
  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol =  gameBoard[combination[0].row][combination[0].column]
    console.log( gameBoard[combination[0].col]);
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)
    {
      winner = firstSquareSymbol;
    }
 }
 const hasDraw = gameTurns.length ===9 && !winner ;
  function handleSelectSquare(rowIndex,colIndex)
  {
    // setActivePlayer((currActivePlayer) => (currActivePlayer === 'X' ? 'O' : 'X'))
    
    setGameTurns((prevTurns)=>{
     const currentPlayer = deriveActivePlayer(prevTurns)
     
      const updatedTurns = [{square:{row:rowIndex,col:colIndex} , player:currentPlayer}, ...prevTurns];
      return updatedTurns;
      
    })
   
  }
  function handleRestart(){
    setGameTurns([]);
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={activePlayer ==='X'}/>
          <Player initialName="Player2" symbol="O" isActive={activePlayer ==='O'}/>
        </ol>
        { (hasDraw ||winner) && <GameOver winner = {winner} onRestart={handleRestart} />}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} 
       />
     
      </div>
      <Log  turns = {gameTurns}/>
    </main>
  )
}

export default App
