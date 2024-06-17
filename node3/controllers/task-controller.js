const Task = require('../models/tasks')
const Users = require('../models/accounts')
const createPath = require('../helpers/create-path')

const getTasks = (req, res) => {

    if (req.query.userId) {
        const title = 'Index'
        const userId = req.query.userId;

        Task
            .find({ userID: userId })
            .sort({ createdAt: -1 })
            .then((tasks) => res.render(createPath('index'), { tasks, title }))
            .catch((error) => {
                console.log(error);
                res.render(createPath('error'), { title: 'Error' })
            })
    }
    else {
        const title = 'Auth'
        res.redirect('/auth');
    }

}

const postAuth = (req, res) => {
    const { nameUser, pass } = req.body

    Users
        .findOne({ login: nameUser, password: pass })
        .then((user) => {
            if (user) {
                res.redirect(`/?userId=${user._id}`);

            } else {
                res.render(createPath('error'), { title: 'Error' });
            }
        })
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), { title: 'Error' });
        });
}

const postTasks = (req, res) => {
    const { text } = req.body
    const userID = req.query.userId
    const state = false
    const task = new Task({ text, state, userID });

    task
        .save()
        .then((result) => res.redirect(`/?userId=${userID}`))
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), { title: 'Error' })
        })
}

const postRegis = (req, res) => {
    const { login, password } = req.body
    const account = new Users({ login, password });

    account
        .save()
        .then((result) => {
            res.redirect(`/auth`);

        })
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), { title: 'Error' });
        });
}

const deleteTasks = (req, res) => {
    const userID = req.params.userId
    console.log(userID);
    Task
        .findByIdAndDelete(req.params.id)
        .then(result => {
            res.redirect(`/?userId=${userID}`)
        })
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), { title: 'Error' })
        })
}

const updateTasks = (req, res) => {
    Task
        .findByIdAndUpdate(req.params.id, { state: true })
        .then(() => res.redirect('/'))
        .catch(error => {
            console.error('Error updating task:', error);
            res.status(500).render('error', { title: 'Error' });
        });
}

const auth = (req, res) => {
    const title = 'Authorization'
    res.render(createPath('auth'), { title })
}

const register = (req, res) => {
    const title = 'Registration'
    res.render(createPath('registration'), { title })
}

module.exports = {
    getTasks,
    postTasks,
    deleteTasks,
    updateTasks,
    auth,
    postAuth,
    register,
    postRegis
}