import express from 'express';

const app = express();

app.use(express.json());

app.use('/api/users', require('./infra/routes/userRoutes').createUserRoutes());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});