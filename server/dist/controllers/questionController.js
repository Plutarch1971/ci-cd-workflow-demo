// import question model
import Question from '../models/Question.js';
// gets a set of random questions
export const getRandomQuestions = async (_req, res) => {
    console.log('grq');
    try {
        const questions = await Question.aggregate([
            { $sample: { size: 10 } },
            { $project: { __v: 0 } }
        ]);
        res.status(200).json(questions);
    }
    catch (err) {
        console.error('Error fetching random questions:', err);
        res.status(500).json({ error: err.message });
    }
};
