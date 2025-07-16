import { useRef, useEffect } from 'react';

function UseRefExample() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section>
      <h2>useRef</h2>
      <input ref={inputRef} placeholder="Focus on mount" />
    </section>
  );
}

export default UseRefExample;
