import express from 'express';

import tweetsController from '../controllers/tweets';

const router = express.Router();

router.get('/', async (req, res) => {  // fetch all tweets
  const response = await tweetsController.findAll();
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.get('/:id', async (req, res) => {  // fetch tweet with the corresponding id
  const { id } =  req.params;
  const response = await tweetsController.findOne(id);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.post('/', async (req, res) => {  // create an tweet
  const response = await tweetsController.create(req.body);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.put('/:id', async (req, res) => { // update the tweet with the corresponding id
  const { id } =  req.params;
  const response = await tweetsController.update(req.body, id);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.delete('/:id', async (req, res) => {  // delete tweet with the corresponding id
  const { id } =  req.params;
  const response = await tweetsController.del(id);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

export default router;