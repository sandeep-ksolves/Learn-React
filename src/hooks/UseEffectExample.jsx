import { useEffect, useState } from 'react';

function UseEffectExample() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(setUser);
  }, []);

  return (
    <section>
      <h2>useEffect</h2>
      {user ? <p>{user.name}</p> : <p>Loading...</p>}
    </section>
  );
}

export default UseEffectExample;
