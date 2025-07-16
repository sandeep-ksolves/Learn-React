import { useEffect, useState, useDebugValue } from 'react';

function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useDebugValue(online ? 'Online' : 'Offline');

  useEffect(() => {
    const handler = () => setOnline(navigator.onLine);
    window.addEventListener('online', handler);
    window.addEventListener('offline', handler);
    return () => {
      window.removeEventListener('online', handler);
      window.removeEventListener('offline', handler);
    };
  }, []);

  return online;
}

export default useOnlineStatus;
