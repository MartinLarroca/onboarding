import express from 'express';

import commentsController from '../controllers/comments';

const router = express.Router();

router.get('/', async (req, res) => {  // fetch all comments
  const response = await commentsController.findAll();
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.get('/:id', async (req, res) => {  // fetch comment with the corresponding id
  const { id } =  req.params;
  const response = await commentsController.findOne(id);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.post('/', async (req, res) => {  // create an comment
  const response = await commentsController.create(req.body);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.put('/:id', async (req, res) => { // update the comment with the corresponding id
  const { id } =  req.params;
  const response = await commentsController.update(req.body, id);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

router.delete('/:id', async (req, res) => {  // delete comment with the corresponding id
  const { id } =  req.params;
  const response = await commentsController.del(id);
  response.hasOwnProperty('message')? res.status(400).send(response) : res.send(response);
});

export default router;