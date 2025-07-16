import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>I'm a {theme} button</button>;
}

function UseContextExample() {
  return (
    <section>
      <h2>useContext</h2>
      <ThemeContext.Provider value="dark">
        <ThemedButton />
      </ThemeContext.Provider>
    </section>
  );
}

export default UseContextExample;
