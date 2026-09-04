export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f4f7f6', margin: 0, padding: 0 }}>
      
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0070f3' }}>MyLogo 🚀</div>
        <div style={{ display: 'flex', gap: '20px', color: '#555' }}>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#111', marginBottom: '20px', fontWeight: '800' }}>
          Next.js Website is <span style={{ color: '#0070f3' }}>Live!</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '600px', lineHeight: '1.6', marginBottom: '30px' }}>
          Aapka code bilkul sahi tarike se execute ho chuka hai aur yeh iska live output hai. Yeh layout fully responsive aur clean hai.
        </p>
        
        {/* Simple Action Button */}
        <button style={{ backgroundColor: '#0070f3', color: '#fff', border: 'none', padding: '12px 30px', fontSize: '1rem', borderRadius: '5px', cursor: 'pointer', fontWeight: '600', boxShadow: '0 4px 14px rgba(0,112,243,0.3)' }}>
          Explore More
        </button>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#ffffff', color: '#888', borderTop: '1px solid #eaeaea' }}>
        <p>© {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
      </footer>

    </div>
  );
}
