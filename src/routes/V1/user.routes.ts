import Router from 'express';
import { userController } from '../../modules/user/user.controller';

const router = Router();

router.get('/users', userController.getUsers);

router.post('/users', (req, res) => {
  res.send('Create a new user');
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Get user with ID: ${id}`);
});

router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Update user with ID: ${id}`);
});

router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Delete user with ID: ${id}`);
});

export default router;