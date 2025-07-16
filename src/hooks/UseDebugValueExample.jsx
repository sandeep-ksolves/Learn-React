import useOnlineStatus from './useOnlineStatus';

function UseDebugValueExample() {
  const online = useOnlineStatus();

  return (
    <section>
      <h2>useDebugValue</h2>
      <p>Status: {online ? 'Online' : 'Offline'}</p>
    </section>
  );
}

export default UseDebugValueExample;
