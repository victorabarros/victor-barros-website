import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ReferralPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to HockeyStack jobs page
    window.location.href = 'https://jobs.ashbyhq.com/hockeystack?utm_source=MbND8Ekw0x';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <p>Redirecting to HockeyStack careers...</p>
    </div>
  );
}
