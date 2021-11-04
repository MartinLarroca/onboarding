import express from 'express';

import usersController from '../controllers/users';

const router = express.Router();

router.get('/', async (req, res) => {  // fetch all users
  const response = await usersController.findAll();
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.get('/:id', async (req, res) => {  // fetch user with the corresponding id
  const { id } =  req.params;
  const response = await usersController.findOne(id);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.post('/', async (req, res) => {  // create an user
  const response = await usersController.create(req.body);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.put('/:id', async (req, res) => { // update the user with the corresponding id
  const { id } =  req.params;
  const response = await usersController.update(req.body, id);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.delete('/:id', async (req, res) => {  // delete user with the corresponding id
  const { id } =  req.params;
  const response = await usersController.del(id);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

export default router;