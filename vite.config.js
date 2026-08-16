import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { search } from 'duck-duck-scrape'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'custom-middleware',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          // 1. Logger Endpoint: Frontend sends data to be logged in terminal
          if (req.url === '/api/log' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk.toString());
            req.on('end', () => {
              try {
                const data = JSON.parse(body);
                console.log('\n--- [FRONTEND LOG] ---');
                console.log(typeof data === 'string' ? data : JSON.stringify(data, null, 2));
                console.log('----------------------\n');
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
              } catch (e) {
                console.error('Log error:', e);
                res.statusCode = 400;
                res.end();
              }
            });
            return;
          }

          // 2. Search Endpoint: Runs DDG search on server and logs results
          if (req.url.startsWith('/api/web-search') && req.method === 'GET') {
            const url = new URL(req.url, 'http://localhost');
            const query = url.searchParams.get('q');

            if (!query) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'No query' }));
              return;
            }

            console.log(`\n🔍 Performing Web Search for: "${query}"`);

            try {
              // Add a small delay to avoid rate limiting (2 seconds)
              await new Promise(resolve => setTimeout(resolve, 2000));

              const results = await search(query, {
                safeSearch: 0,
                // Add timeout to prevent hanging
                timeout: 10000
              });

              const minimalResults = (results.results || []).slice(0, 4).map(r => ({
                title: r.title,
                url: r.url,
                description: r.description
              }));

              console.log('✅ Found ' + minimalResults.length + ' results.');
              // Log the first result as sample
              if (minimalResults.length > 0) {
                console.log('Sample result:', minimalResults[0].title);
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(minimalResults));
            } catch (err) {
              console.error('⚠️ Search failed:', err.message);
              console.log('Continuing without web search results...');
              // Return empty array instead of error to allow LLM to still respond
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify([]));
            }
            return;
          }

          next();
        });
      }
    }
  ],
})
