import Food from "./components/Food";
import GameOver from "./components/GameOver";
import Snake from "./components/Snake";
import { boardDefaultValue } from "./data/boardDefaultValue";
import useBoardHook from "./hooks/useBoardHook";

function App(): JSX.Element {
  const { data, handleStartAgain } = useBoardHook(boardDefaultValue);

  return (
    <>
      {data.gameOver && <GameOver startAgain={handleStartAgain} />}
      {!data.gameOver && (
        <div className="game-area">
          <Snake snakeDots={data.snakeDots} />
          <Food food={data.food} />
        </div>
      )}
      <div className="score">Score: {data.score}</div>
    </>
  );
}

export default App;
