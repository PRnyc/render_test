const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS for all routes

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>'); 
});

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const note = notes.find(note => note.id === id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }          
    res.json(note);
    }); 

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;   
    notes = notes.filter(note => note.id !== id);
    res.status(204).end(); // No content to return  
});

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(note => parseInt(note.id))) : 0;
  return (maxId + 1).toString(); // Ensure id is a string
};

app.post('/api/notes', (req, res) => {
const body = req.body;
if (!body || !body.content) {  
    return res.status(400).json({ error: 'Content is missing' });
}  


const note = {
    content: body.content,
    important: body.important || false, // Default to false if not provided
    id: generateId() // Generate a new id
};
notes = notes.concat(note); // Add the new note to the notes array
    res.json(note);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 