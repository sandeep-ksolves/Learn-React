import { useState, useDeferredValue, useMemo } from 'react';

function UseDeferredValueExample() {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    return Array.from({ length: 10000 }, (_, i) => `${deferredInput} ${i}`);
  }, [deferredInput]);

  return (
    <section>
      <h2>useDeferredValue</h2>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <ul>{list.slice(0, 5).map((item, i) => <li key={i}>{item}</li>)}</ul>
    </section>
  );
}

export default UseDeferredValueExample;
