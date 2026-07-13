// Pure-JS "bundler" stand-in — no native binaries (unlike esbuild/Vite), so it isn't
// subject to Android's W^X restriction on executing app-written files. Verifies
// PocketHost's build-step -> output-dir detection -> static-serve pipeline in isolation
// from that separate, ecosystem-wide native-binary limitation.
const fs = require('fs');
fs.mkdirSync('dist', { recursive: true });
const greeting = process.env.VITE_GREETING || '(not set)';
fs.writeFileSync('dist/index.html', `<!doctype html>
<html><head><title>Pure-JS build test</title></head>
<body style="font-family: sans-serif; padding: 40px; text-align: center;">
  <h1>Built by a pure-JS script, served by PocketHost</h1>
  <p>No native binaries involved in this build (unlike esbuild/Vite).</p>
  <p>Build-time env var (VITE_GREETING): <strong>${greeting}</strong></p>
</body></html>`);
console.log('Wrote dist/index.html with VITE_GREETING=' + greeting);
