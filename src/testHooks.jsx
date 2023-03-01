import React, { useState } from "react";

export const Hook = () => {
  const [state, setState] = useState({
    value1: 20,
    value2: true,
    value3: "string",
  });

  const [count, setCounter] = useState(10);
  return (
    <div>
      <h1>Basic hook</h1>
      <button onClick={() => setState({ ...state, value2: !state.value2 })}>
        Click me
      </button>
      <button onClick={() => setCounter(count - 1)}>Decrement button</button>
      <p>{state.value2}</p>
      {state.value2 ? (
        <div>
          <h2>{count}</h2>
          <p>{state.value1}</p>
          <p>{state.value3}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
