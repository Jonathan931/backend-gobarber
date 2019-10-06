import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get(`/`, async (req, res) => {
  const user = await User.create({
    name: 'Jonathan Matheus',
    email: 'jonathan@gmail.com',
    password_hash: '12345667',
  });
  return res.json(user);
});

export default routes;
