import { createProxyMiddleware } from "http-proxy-middleware";
module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://127.0.0.1:8000', // Replace this with your backend server address
        changeOrigin: true,
      })
    );
  };
