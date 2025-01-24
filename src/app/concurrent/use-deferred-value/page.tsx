import { useState, useDeferredValue, useMemo } from 'react';

export const App = () => {
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  const expensiveCalculation = useMemo(() => {
    let result = '';
    for (let i = 0; i < 10000; i++) {
      result += deferredValue[i % deferredValue.length];
    }
    return result;
  }, [deferredValue]);

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Current Value: {value}</p>
      <p>Deferred Value: {deferredValue}</p>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
    </>
  );
};
