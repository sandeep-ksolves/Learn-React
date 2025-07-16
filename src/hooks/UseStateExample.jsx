import { useState } from 'react';

function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>useState</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </section>
  );
}

export default UseStateExample;
