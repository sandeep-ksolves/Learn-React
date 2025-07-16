import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'inc': return { count: state.count + 1 };
    case 'dec': return { count: state.count - 1 };
    default: return state;
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <section>
      <h2>useReducer</h2>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
    </section>
  );
}

export default UseReducerExample;
