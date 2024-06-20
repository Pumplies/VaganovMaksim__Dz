const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;
const db = 'mongodb+srv://Pumplies:Maximka20051120@cluster0.dfi8dij.mongodb.net/quiz?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(db)
    .then(() => console.log('DB Connect'))
    .catch((error) => console.log(error));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // Добавлено для обработки данных формы
app.use(express.json()); // Добавлено для обработки JSON-запросов

const Questions = require('./models/question-model');
const createPath = require('./helpers/create-path');

app.get('/', async (req, res) => {
    try {
        const questions = await Questions.find();
        res.render('index', { title: 'Главная страница', questions });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving questions');
    }
});

app.post('/submit-answers', async (req, res) => {
    const userAnswers = req.body;
    try {
        const allQuestions = await Questions.find();
        let score = 0;
        allQuestions.forEach((question, index) => {
            const correctAnswerIndex = question.rightans.toString();
            const userAnswer = userAnswers[index.toString()];
            console.log('Comparing answers:', userAnswer, correctAnswerIndex);
            if (userAnswer === correctAnswerIndex) {
                score++;
            }
         });
        console.log('User score:', score);
        res.json({ score });
    } catch (error) {
        console.error(error);
    }
});

app.use((req, res) => {
    const title = 'Error';
    res.render(createPath('error'), { title });
});

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`localhost:${PORT}`);
});
