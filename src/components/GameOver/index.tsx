import { TGameOver } from "../../types";

function GameOver({ startAgain }: TGameOver): JSX.Element {
  return (
    <div className="game-over">
      <button type="button" onClick={startAgain}>
        Start again
      </button>
      <h2>Game Over</h2>
    </div>
  );
}

export default GameOver;
