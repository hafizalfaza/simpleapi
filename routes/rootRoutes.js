import express from 'express';
import user from './child-routes/user';

const app = express();

// AUTHENTICATION
app.use('/user', user);

export default app;