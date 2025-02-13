// app/counter/page.tsx
'use client';  // Client Componentを使う宣言

import { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>カウンター (Client Component)</h2>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </section>
  );
}
