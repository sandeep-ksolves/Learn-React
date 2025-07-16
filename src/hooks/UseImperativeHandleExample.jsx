import { useRef } from 'react';
import CustomInput from './CustomInput';

function UseImperativeHandleExample() {
  const inputRef = useRef();

  return (
    <section>
      <h2>useImperativeHandle</h2>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </section>
  );
}

export default UseImperativeHandleExample;
