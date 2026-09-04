export default function DarkHome() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: '3rem', margin: '0', background: 'linear-gradient(to right, #0070f3, #ff0080)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Welcome Back
      </h1>
      <p style={{ color: '#888', marginTop: '15px' }}>Error-free code ready for production.</p>
    </div>
  );
}
