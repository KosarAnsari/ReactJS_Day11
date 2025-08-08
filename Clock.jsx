import { useState, useEffect } from 'react';

const Clock = ({ color }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <h3
        style={{
          color: color,
          backgroundColor: '#000',
          width: '100px',
          padding: '10px',
          borderRadius: '6px',
        }}
      >
        {time}
      </h3>
    </>
  );
};
export default Clock;
