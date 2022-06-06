import { DirectionEnum } from "../enums";
import { IBoardInitialState } from "../interfaces";
import { getRandomCoordinates } from "../utilities/get-random-coordinates";

export const boardDefaultValue: IBoardInitialState = {
  direction: DirectionEnum.RIGHT,
  food: getRandomCoordinates(),
  score: 0,
  speed: 200,
  snakeDots: [
    {
      top: 0,
      left: 0,
    },
    {
      top: 0,
      left: 4,
    },
  ],
  gameOver: false,
};
