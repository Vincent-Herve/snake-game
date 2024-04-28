import { boardDefaultValue } from "../data/boardDefaultValue";
import { BoardActionTypeEnum } from "../enums";
import { IBoardAction, IBoardInitialState } from "../interfaces";

export function boardReducer(state: IBoardInitialState, action: IBoardAction) {
  switch (action.type) {
    case BoardActionTypeEnum.START_GAME: {
      return {
        ...boardDefaultValue,
        isStarted: true,
      };
    }

    case BoardActionTypeEnum.CHANGED: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
