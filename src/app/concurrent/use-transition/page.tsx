'use client';
import { useTransition, useState, ReactElement, useEffect } from 'react';

export default function UseTransition() {
  const [value, setValue] = useState(10000);
  const [items, setItems] = useState<ReactElement[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      action();
    });
  }, []);

  const action = () => {
    setItems(
      Array.from({ length: +value }).map((_, index) => <div key={index}>{'Item ' + index}</div>)
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
    startTransition(() => {
      action();
    });
  };

  return (
    <>
      <input type="number" value={value} onChange={handleChange} />
      {isPending ? <div>Calculating...</div> : items}
    </>
  );
}
