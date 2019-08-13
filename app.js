const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest: 'upload/'})
const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static(__dirname + '/public'));
app.post('/upload', upload.single('file'), (req,res,next) => {
    return res.json(req.file);
});

app.listen(3000, ()=> {
    console.log("Working on Port:3000");
})