import express from 'express';
import user from './child-routes/user';
import profile from './child-routes/profile';
import feedback from './child-routes/feedback';

const app = express();

// AUTHENTICATION
app.use('/user', user);


// PROFILE

app.use('/profile', profile)


// FEEDBACK

app.use('/feedback', feedback);

export default app;