'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">shadcn/ui Button Demo</h1>
      <Button onClick={() => setCount((c) => c + 1)}>
        Clicked {count} time{count !== 1 ? 's' : ''}
      </Button>
    </div>
  );
}
