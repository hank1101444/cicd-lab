import Fastify, { FastifyServerOptions } from 'fastify';

// git status
// git add .
// git commit -m ""
// git push origin feature/ci-observe
export function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify({
    logger: options.logger ?? true,
    ...options
  });

  app.get('/', async () => {
    return {
      message: 'CI/CD Lab Fastify app is running',
      version: process.env.APP_VERSION || 'dev'
    };
  });

  app.get('/health', async () => {
    return {
      status: 'ok' // fail
    };
  });

  return app;
}
