import { boardDefaultValue } from "../data/boardDefaultValue";
import { BoardActionTypeEnum } from "../enums";
import { IBoardAction, IBoardInitialState } from "../interfaces";

export function boardReducer(data: IBoardInitialState, action: IBoardAction) {
  switch (action.type) {
    case BoardActionTypeEnum.START_AGAIN: {
      return {
        ...boardDefaultValue,
      };
    }

    case BoardActionTypeEnum.CHANGED: {
      return {
        ...data,
        ...action.payload,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
