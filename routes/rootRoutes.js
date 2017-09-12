import express from 'express';
import user from './child-routes/user';
import profile from './child-routes/profile';
import feedback from './child-routes/feedback';
import updates from './child-routes/updates';

const app = express();

// AUTHENTICATION
app.use('/user', user);


// PROFILE

app.use('/profile', profile);


// FEEDBACK

app.use('/feedback', feedback);


// UPDATES

app.use('/updates', updates);

export default app;