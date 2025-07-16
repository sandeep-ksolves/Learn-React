import { useCallback, useState } from 'react';

function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <section>
      <h2>useCallback</h2>
      <p>{count}</p>
      <Button onClick={handleClick} />
    </section>
  );
}

export default UseCallbackExample;
