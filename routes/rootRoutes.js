import express from 'express';
import auth from './child-routes/auth';

const app = express();

// AUTHENTICATION
app.use('/auth', auth);

export default app;