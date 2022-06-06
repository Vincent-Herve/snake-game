import { BoardActionTypeEnum, DirectionEnum } from "../enums";

export interface ISnakeDot {
  top?: number;
  left?: number;
}

export interface IBoardInitialState {
  direction: DirectionEnum;
  food: number[];
  score: number;
  speed: number;
  snakeDots: ISnakeDot[];
  gameOver: boolean;
}

export interface IBoardAction {
  type: BoardActionTypeEnum;
  payload?: Partial<IBoardInitialState>;
}
