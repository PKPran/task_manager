const express = require('express');
const app = express();
const { User, Task } = require("../models");

app.use(express.json());

// Create a new user
app.post("/users", async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).send(user);
});

// Create a new task for a user
app.post("/users/:userId/tasks", async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    if (!user) {
        return res.status(404).send({ error: "User not found" });
    }
    const task = await Task.create({ ...req.body, userId: user.id });
    res.json(task);
});

// Get all tasks for a user
app.get("/users/:userId/tasks", async (req, res) => {
    const tasks = await Task.findAll({ where: { userId: req.params.userId } });
    res.json(tasks);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})