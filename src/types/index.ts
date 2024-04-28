import { ISnakeDot } from "../interfaces";

export type TFood = number[];

export type TStart = () => void;

export type TSnake = {
  snakeDots: ISnakeDot[];
};

export type TUseBoardHookOutput = {
  snakeDots: ISnakeDot[];
  isStarted: boolean;
  gameOver: boolean;
  food: TFood;
  score: number;
  handleStartGame: TStart;
};
