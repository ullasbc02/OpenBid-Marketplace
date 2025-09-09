'use client';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/api/auth/register');
  };

  const handleLoginClick = () => {
    router.push('/api/auth/login');
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem' }}>
      <h1>Welcome to OpenBid Marketplace!</h1>
      <button
        onClick={handleRegisterClick}
        style={{
          marginTop: '2rem',
          padding: '0.75rem 2rem',
          fontSize: '1.2rem',
          cursor: 'pointer',
          borderRadius: '6px',
          border: 'none',
          background: '#0070f3',
          color: '#fff'
        }}
      >
        Register
      </button>
      <button
        onClick={handleLoginClick}
        style={{
          marginTop: '2rem',
          padding: '0.75rem 2rem',
          fontSize: '1.2rem',
          cursor: 'pointer',
          borderRadius: '6px',
          border: 'none',
          background: '#0070f3',
          color: '#fff'
        }}
      >
        Login
      </button>
    </main>
  );
}