import { useRef, useLayoutEffect, useState } from 'react';

function UseLayoutEffectExample() {
  const boxRef = useRef();
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(boxRef.current.getBoundingClientRect().height);
  }, []);

  return (
    <section>
      <h2>useLayoutEffect</h2>
      <div ref={boxRef} style={{ padding: 20, background: 'lightblue' }}>Box</div>
      <p>Height: {height}px</p>
    </section>
  );
}

export default UseLayoutEffectExample;
