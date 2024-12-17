import express from 'express';
const router = express.Router();
// import {
//   getRandomQuestions
// } from '../../controllers/questionController.js';
router.get('/random', (req, res) => {
    console.log(req.body);
    res.status(200).send('randomRoute');
});
export default router;
