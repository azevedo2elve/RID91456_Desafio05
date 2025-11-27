import { Router } from 'express';

const routers = Router();

routers.get('/', (req, res) => {
  res.send('Welcome to the Biblioteca API');
});

export default routers;