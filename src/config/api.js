// Render backend URL — set VITE_API_URL on Vercel to your Render service URL
export const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD
    ? 'https://icgi-project24.onrender.com'
    : 'http://localhost:5000');
