export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#1B4F72',
      color: 'white',
      fontFamily: 'system-ui'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        RepliQ
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.8 }}>
        Google Yorumlarına AI ile Otomatik Yanıt
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="/dashboard" style={{
          padding: '0.75rem 2rem',
          backgroundColor: '#27AE60',
          color: 'white',
          borderRadius: '0.75rem',
          textDecoration: 'none',
          fontWeight: 600
        }}>
          14 Gün Ücretsiz Başlat
        </a>
      </div>
    </main>
  );
}
