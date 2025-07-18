import UseStateExample from './hooks/UseStateExample';
import UseEffectExample from './hooks/UseEffectExample';
import UseContextExample from './hooks/UseContextExample';
import UseRefExample from './hooks/UseRefExample';
import UseMemoExample from './hooks/UseMemoExample';
import UseCallbackExample from './hooks/UseCallbackExample';
import UseReducerExample from './hooks/UseReducerExample';
import UseLayoutEffectExample from './hooks/UseLayoutEffectExample';
import UseImperativeHandleExample from './hooks/UseImperativeHandleExample';
import UseDebugValueExample from './hooks/UseDebugValueExample';
import UseTransitionExample from './hooks/UseTransitionExample';
import UseDeferredValueExample from './hooks/UseDeferredValueExample';

import Counter from './features/counter/Counter';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Hooks Examples</h1>
      <UseStateExample />
      <UseEffectExample />
      <UseContextExample />
      <UseRefExample />
      <UseMemoExample />
      <UseCallbackExample />
      <UseReducerExample />
      <UseLayoutEffectExample />
      <UseImperativeHandleExample />
      <UseDebugValueExample />
      <UseTransitionExample />
      <UseDeferredValueExample />

      <h1>Redux Example Here</h1>
      <Counter />
    </div>
  );
}

export default App;
