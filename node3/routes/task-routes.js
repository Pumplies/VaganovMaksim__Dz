const express = require('express')
const router = express.Router()

const {
    getTasks,
    postTasks,
    deleteTasks,
    updateTasks,
    auth,
    postAuth,
    register,
    postRegis
} = require('../controllers/task-controller')

//Переход по ссылкам
router.get('/', getTasks)

//Получение данных
router.post('/', postTasks)

//Удаление данных
router.delete('/:tasks/:id', deleteTasks)

//Обновление данных
router.put('/:userId/:id', updateTasks);

//Страница авторизаций
router.get('/auth', auth)

//Авторизация
router.post('/auth', postAuth)

//Страница регистраций
router.get('/registration', register)

//Сохранение юсера в БД
router.post('/registration', postRegis)

module.exports = router

