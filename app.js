const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tasks = [
    {
        id: 1,
        title: 'Default',
        description: 'Default Task Complete',
        completed: false
    }
]

app.get('/', (req, res) => {
    res.send('Welcome to TaskManger API')
})

app.post("/tasks", (req, res) => {
    const { title, description, completed } = req.body;

    if (!title || !description || !completed) {
        res.status(400).json('All the fileds are required.');
    }
    const newtask = {
        id: tasks.length + 1, title, description, complete
    }
    tasks.push(newtask);

    res.status(201).json(newtask)

})


app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;