import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const getCounterColor = () => {
    if (count <= 4) {
      return 'green';
    } else if (count <= 9) {
      return 'blue';
    } else {
      return 'red';
    }
  };

  return (
    <div><center>
      <h1 style={{ color: getCounterColor() }}>{count}</h1>
	 
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
	  </center>
    </div>
  );
}

export default App;
