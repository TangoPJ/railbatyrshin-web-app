import express, { Request, Response } from 'express';
import next from 'next';
import { PORT } from './config';

const dev: boolean = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port: number = Number(PORT) || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
