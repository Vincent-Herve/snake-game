import React from "react";
import { TStart } from "../../types";

function index({ onStart }: { onStart: TStart }): JSX.Element {
  return (
    <div className="start">
      <button type="button" onClick={onStart}>
        Start game
      </button>
    </div>
  );
}

export default index;
