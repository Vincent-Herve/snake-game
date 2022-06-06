import { IBoardInitialState, ISnakeDot } from "../interfaces";

export type TFood = {
  food: number[];
};

export type TGameOver = {
  startAgain: () => void;
};

export type TSnake = {
  snakeDots: ISnakeDot[];
};

export type TUseBoardHookOutput = {
  data: IBoardInitialState;
  handleStartAgain: () => void;
};
