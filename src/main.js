document.getElementById('app').innerHTML = `
  <div style="font-family: sans-serif; padding: 40px; text-align: center;">
    <h1>Built by Vite, served by PocketHost</h1>
    <p>This page was produced by <code>npm run build</code> running on the phone,
       then served as static output — no source files, only the bundled dist/ folder.</p>
    <p>Build-time env var (VITE_GREETING): <strong>${import.meta.env.VITE_GREETING || '(not set)'}</strong></p>
  </div>
`;
