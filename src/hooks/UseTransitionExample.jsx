import { useState, useTransition } from 'react';

function UseTransitionExample() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);

    startTransition(() => {
      const bigList = Array.from({ length: 10000 }, (_, i) => `${val} ${i}`);
      setList(bigList);
    });
  };

  return (
    <section>
      <h2>useTransition</h2>
      <input value={input} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>{list.slice(0, 5).map((item, i) => <li key={i}>{item}</li>)}</ul>
    </section>
  );
}

export default UseTransitionExample;
