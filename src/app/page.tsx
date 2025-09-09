'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

export default function WelcomePage() {
  

  

  return (
    <div>
      <Header />
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '4rem',
        }}
      >
        {/* Using reusable Button component */}
        <Button name="register" value="Register" route="/register" />
        <Button name="login" value="Login" route="/login" />

        
        
      </main>
      <Footer />
    </div>
  );
}
