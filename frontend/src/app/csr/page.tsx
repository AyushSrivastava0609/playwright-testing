'use client';

import { useEffect, useState } from 'react';

type Item = { id: number; title: string };

export default function Page() {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`)
      .then((r) => r.json())
      .then(setItems);
  }, []);

  if (!items) return <p className="p-8">Loading…</p>;

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-xl font-semibold">
        Client-Rendered List (App Router)
      </h2>
      <ul className="list-disc pl-5">
        {items.map((it) => (
          <li key={it.id} className="text-gray-700">
            {it.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
