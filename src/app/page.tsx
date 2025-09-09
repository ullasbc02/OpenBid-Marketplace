"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch('/api/server', { method: 'GET' });
      if (res.ok) {
        const data = await res.json();
        // You can use data.message here if needed
        router.push('/'); // go to home
      } else {
        // show error
      }
    } catch (error) {
      // handle fetch error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* inputs if needed */}
      <button onClick={handleClick} disabled={loading}>Sign in</button>
    </div>
  );
}
