import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { analyzeRouter } from './routes/analyze';
import { procedureRouter } from './routes/procedure';
import { suggestRouter } from './routes/suggest';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: { error: 'Too many requests, please try again later.' },
});
app.use('/api/', limiter);

app.get('/health', (_req, res) => {
  res.json({ status: 'healthy', service: 'ai-service' });
});

app.use('/api/ai', analyzeRouter);
app.use('/api/ai', procedureRouter);
app.use('/api/ai', suggestRouter);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`AI Service running on port ${PORT}`);
});
