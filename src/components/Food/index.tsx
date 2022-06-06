import apple from "../../img/apple.png";
import { TFood } from "../../types";

function Food({ food }: TFood): JSX.Element {
  return (
    <img
      src={apple}
      className="food-dot"
      style={{ top: food[0] + "%", left: food[1] + "%" }}
      alt=""
    />
  );
}

export default Food;
