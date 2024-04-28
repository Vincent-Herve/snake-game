import Food from "./components/Food";
import Start from "./components/Start";
import Snake from "./components/Snake";
import useBoardHook from "./hooks/useBoardHook";

function App(): JSX.Element {
  const { snakeDots, food, isStarted, gameOver, score, handleStartGame } =
    useBoardHook();
  return (
    <>
      {gameOver && <h2 className="game-over">Game Over</h2>}
      {!isStarted && <Start onStart={handleStartGame} />}
      {!gameOver && isStarted && (
        <div className="game-area">
          <Snake snakeDots={snakeDots} />
          <Food food={food} />
        </div>
      )}
      {(isStarted || gameOver) && (
        <div className="score">
          {isStarted ? "Score " : "Last score "} : {score}
        </div>
      )}
    </>
  );
}

export default App;
