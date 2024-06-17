const express = require('express')
const mongoose = require('mongoose')
const app = express()

const createPath = require('./helpers/create-path')
const overide = require('method-override')
const taskRoutes = require('./routes/task-routes')

const PORT = 7000;
const db = 'mongodb+srv://Pumplies:Maximka20051120@cluster0.dfi8dij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

//Подключение бд
mongoose
    .connect(db)
    .then((res) => console.log('DB Connect'))
    .catch((error) => console.log(error))

//Подключение к серверу
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log('Сервер запущен');
})


app.use(express.urlencoded({ extended: false }))
app.use(overide('_method'));
app.use(express.json());
app.use(taskRoutes)
app.use('/style', express.static('style'));

//Использование в html файле <%
app.set('view engine', 'ejs');

//Обработка ошибки
app.use((req, res) => {
    const title = 'Error'
    res.render(createPath('error'), {title})
})

