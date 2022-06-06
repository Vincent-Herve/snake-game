import { TSnake } from "../../types";

function Snake({ snakeDots }: TSnake): JSX.Element {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          top: dot.top + "%",
          left: dot.left + "%",
        };

        return <div className="snake-dot" key={i} style={style}></div>;
      })}
    </div>
  );
}

export default Snake;
