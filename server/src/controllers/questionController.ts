import type { Request, Response } from 'express';
// import question model
import Question from '../models/Question.js';

// gets a set of random questions
export const getRandomQuestions = async (_req: Request, res: Response) => {
  console.log('grq');
  try {
    const questions = await Question.aggregate([
      { $sample: { size: 10 } },
      { $project: { __v: 0 } }]);
    res.status(200).json(questions);
  } catch (err: any) {
    console.error('Error fetching random questions:', err);
    res.status(500).json({ error: err.message });
  }
};
