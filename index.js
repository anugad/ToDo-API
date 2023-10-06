// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql2');
// const app = express();
// const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(cors());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456789',
//   database: 'todo_app',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL: ' + err.stack);
//     return;
//   }
//   console.log('Connected to MySQL as id ' + db.threadId);
// });

// db.query(
//   `CREATE TABLE IF NOT EXISTS tasks (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     task TEXT
//   )`,
//   (err) => {
//     if (err) {
//       console.error('Error creating tasks table: ' + err);
//     }
//   }
// );

// app.post('/api/tasks', (req, res) => {
//   const newTask = req.body.task;
//   db.query('INSERT INTO tasks (task) VALUES (?)', [newTask], (err, results) => {
//     if (err) {
//       console.error('Error inserting task: ' + err);
//       res.status(500).json({ success: false, message: 'Error adding task' });
//     } else {
//       res.status(200).json({ success: true, message: 'Task added successfully' });
//     }
//   });
// });

// app.get('/api/tasks', (req, res) => {
//   db.query('SELECT * FROM tasks', (err, results) => {
//     if (err) {
//       console.error('Error fetching tasks: ' + err);
//       res.json({ success: false, message: 'Error fetching tasks' });
//     } else {
//       res.json({ tasks: results });
//     }
//   });
// });

// // Add a new route for updating a task
// app.put('/api/tasks/:id', (req, res) => {
//   const taskId = req.params.id;
//   const updatedTaskText = req.body.task;

//   db.query(
//     'UPDATE tasks SET task = ? WHERE id = ?',
//     [updatedTaskText, taskId],
//     (err, results) => {
//       if (err) {
//         console.error('Error updating task: ' + err);
//         res.json({ success: false, message: 'Error updating task' });
//       } else {
//         res.json({ success: true, message: 'Task updated successfully' });
//       }
//     }
//   );
// });


// app.delete('/api/tasks/:id', (req, res) => {
//   const taskId = req.params.id;
//   db.query('DELETE FROM tasks WHERE id = ?', [taskId], (err, results) => {
//     if (err) {
//       console.error('Error deleting task: ' + err);
//       res.json({ success: false, message: 'Error deleting task' });
//     } else {
//       res.json({ success: true, message: 'Task deleted successfully' });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });















// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const userRoutes = require('./src/routes/userRoutes');
// const port = process.env.PORT || 5000;

// // Middlewares
// app.use(bodyParser.json());
// app.use(cors());

// // Routes
// const taskRoutes = require('./src/routes/taskRoutes');
// app.use('/api', taskRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });





























// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const passport = require('passport'); // Include Passport
require(''); // Update the path

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize()); // Initialize Passport

// Routes
const taskRoutes = require('./src/routes/taskRoutes');
const userRoutes = require('./path/to/userRoutes'); // Update the path

app.use('/api', taskRoutes);
app.use('/auth', userRoutes); // Use '/auth' for user authentication routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
