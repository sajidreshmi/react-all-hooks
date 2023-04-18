import React, { useReducer } from "react";

const actions = {
  INCREMENT: 'INCREMENT',
  TOGGLETEXT: 'toggleShowText'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { count: state.count + 1, showText: state.showText };
    case actions.TOGGLETEXT:
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: actions.INCREMENT });
          dispatch({ type: actions.TOGGLETEXT });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
