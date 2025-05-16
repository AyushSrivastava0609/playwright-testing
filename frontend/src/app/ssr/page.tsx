type Item = { id: number; title: string };

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/data`,
    { cache: 'no-store' }
  );
  const items: Item[] = await res.json();

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-xl font-semibold">
        Server-Rendered List (App Router)
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
