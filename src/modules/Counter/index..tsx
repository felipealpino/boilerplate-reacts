import React, { Fragment, useCallback, useState } from 'react';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const memoizedCallback = useCallback(() => {
    setCounter(oldState => oldState + 1);
  }, []);

  return (
    <Fragment>
      <h1>Counter: {counter}</h1>
      <button onClick={memoizedCallback}>Increment</button>
    </Fragment>
  );
};

export default Counter;
