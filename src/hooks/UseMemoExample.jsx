import { useMemo, useState } from 'react';

function UseMemoExample() {
  const [query, setQuery] = useState('');
  const items = ['Banana', 'Apple', 'Orange'];

  const filtered = useMemo(() => {
    return items.filter(i => i.toLowerCase().includes(query.toLowerCase())).sort();
  }, [query]);

  return (
    <section>
      <h2>useMemo</h2>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>{filtered.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
    </section>
  );
}

export default UseMemoExample;
