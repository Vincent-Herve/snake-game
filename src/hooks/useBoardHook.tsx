import { useEffect, useReducer, useRef } from "react";
import { boardDefaultValue } from "../data/boardDefaultValue";
import { BoardActionTypeEnum, DirectionEnum } from "../enums";
import { IBoardInitialState, ISnakeDot } from "../interfaces";
import { boardReducer } from "../reducer/boardReducer";
import { TUseBoardHookOutput } from "../types";
import { getRandomCoordinates } from "../utilities/get-random-coordinates";

function useBoardHook(
  initialValue: IBoardInitialState = boardDefaultValue
): TUseBoardHookOutput {
  const [data, dispatch] = useReducer(boardReducer, initialValue);
  const axe = useRef<"x" | "y">("x");

  const handleStartGame = (): void => {
    dispatch({ type: BoardActionTypeEnum.START_GAME });
  };

  const handleChanged = (payload: Partial<IBoardInitialState>): void => {
    dispatch({ type: BoardActionTypeEnum.CHANGED, payload });
  };

  const isAxeX = (): boolean => axe.current === "x";
  const isAxeY = (): boolean => axe.current === "y";

  const onKeyDown = (e: KeyboardEvent): void => {
    if (
      ((e.code === "ArrowUp" || e.code === "ArrowDown") && isAxeY()) ||
      ((e.code === "ArrowLeft" || e.code === "ArrowRight") && isAxeX())
    ) {
      return;
    }
    switch (e.code) {
      case "ArrowUp":
        handleChanged({ direction: DirectionEnum.UP });
        axe.current = "y";
        break;
      case "ArrowDown":
        handleChanged({ direction: DirectionEnum.DOWN });
        axe.current = "y";
        break;
      case "ArrowLeft":
        handleChanged({ direction: DirectionEnum.LEFT });
        axe.current = "x";
        break;
      case "ArrowRight":
        handleChanged({ direction: DirectionEnum.RIGHT });
        axe.current = "x";
        break;
    }
  };

  useEffect(() => {
    let interval: any = 0;

    const moveSnake = (): void => {
      let snakeDots = [...data.snakeDots];
      let headSnake = { ...snakeDots[snakeDots.length - 1] };

      if (
        typeof headSnake.left === "number" &&
        typeof headSnake.top === "number"
      ) {
        switch (data.direction) {
          case DirectionEnum.LEFT:
            headSnake.left = headSnake.left - 4;
            break;
          case DirectionEnum.RIGHT:
            headSnake.left = headSnake.left + 4;
            break;
          case DirectionEnum.UP:
            headSnake.top = headSnake.top - 4;
            break;
          case DirectionEnum.DOWN:
            headSnake.top = headSnake.top + 4;
            break;
        }
      }

      snakeDots.push(headSnake);
      snakeDots.shift();

      handleChanged({ snakeDots });
    };

    const gameOver = (): void => {
      if (!data.gameOver) {
        handleChanged({ isStarted: false, gameOver: true });
        axe.current = "x";
      }
    };

    const checkIfOutOfBorder = (headSnake: ISnakeDot): void => {
      if (
        headSnake.top !== undefined &&
        headSnake.left !== undefined &&
        (headSnake.top >= 100 ||
          headSnake.left >= 100 ||
          headSnake.top < 0 ||
          headSnake.left < 0)
      ) {
        gameOver();
      }
    };

    const checkIfCollapsed = (headSnake: ISnakeDot): void => {
      const snakeDots = [...data.snakeDots];

      snakeDots.pop();

      snakeDots.forEach((dot) => {
        if (dot.left === headSnake.left && dot.top === headSnake.top) {
          gameOver();
        }
      });
    };

    const checkIfEat = (headSnake: ISnakeDot): void => {
      if (headSnake.top === data.food[0] && headSnake.left === data.food[1]) {
        const snakeDots = [...data.snakeDots];
        snakeDots.unshift({});

        handleChanged({
          food: getRandomCoordinates(),
          snakeDots,
          speed: data.speed > 60 ? data.speed - 5 : data.speed,
          score: data.score + 20,
        });
      }
    };

    if (data.isStarted && !data.gameOver) {
      interval = setInterval(moveSnake, data.speed);
    }

    const headSnake = data.snakeDots[data.snakeDots.length - 1];

    checkIfEat(headSnake);
    checkIfOutOfBorder(headSnake);
    checkIfCollapsed(headSnake);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [data]);

  document.onkeydown = onKeyDown;

  return {
    snakeDots: data.snakeDots,
    food: data.food,
    score: data.score,
    isStarted: data.isStarted,
    gameOver: data.gameOver,
    handleStartGame,
  };
}

export default useBoardHook;
