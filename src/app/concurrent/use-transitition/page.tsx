'use client';
import {  useDeferredValue, useMemo, useState } from 'react';


export default function UseTransition() {
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  const expensiveCalculation = useMemo(() => {
    let result = '';
    for (let i = 0; i < 1000000; i++) {
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
}
