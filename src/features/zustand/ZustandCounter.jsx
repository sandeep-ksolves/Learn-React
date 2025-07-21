import useCounterStore from './counterStore';

function ZustandCounter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div style={{ border: '1px solid #ccc', padding: 10, marginTop: 20 }}>
      <h2>Zustand Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ZustandCounter;
