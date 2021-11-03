import express from 'express';

import userController from '../controllers/users';

const router = express.Router();

router.get('/', async (req, res) => {  // fetch all users
  const response = await userController.findAll();
  res.send(response);
});

router.get('/:id', async (req, res) => {  // fetch user with the corresponding id
  const { id } =  req.params;
  const response = await userController.findOne(id);
  res.send(response)
});

router.post('/', async (req, res) => {  // create an user
  const response = await userController.create(req.body);
  res.send(response);
});

router.put('/:id', async (req, res) => { // update the user with the corresponding id
  const { id } =  req.params;
  const response = await userController.update(req.body, id);
  res.send(response)
});

router.delete('/:id', async (req, res) => {  // delete user with the corresponding id
  const { id } =  req.params;
  const response = await userController.del(id);
  res.send(response)
});

export default router;