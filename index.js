var express = require('express');

var exp = new express();
exp.use(express.json());

console.log('express instantiated');

var genres = [

    {id: 1, name :"action"},
    {id: 2, name :"adevnture"},
    {id: 3, name :"thriller"}
];

exp.get('/api/video/genres', (req, res) => {
    res.send(genres);
});


exp.get('/api/video/genres/:id', (req, res) => {
    var genre = genres.find( g => parseInt(req.params.id) === g.id);
    if (!genre) 
    return res.status(404).send(`Genre ${req.params.id} cannot be found`);
    res.send(genre);
});

exp.post('/api/video/genres', (req, res) => {
     var genre = { id: genres.length + 1, name: req.body.name };
     genres.push(genre);
     res.send(genre);
});


exp.put('/api/video/genres/:id', (req, res) => {
    var genre = genres.find( g => parseInt(req.params.id) === g.id);
    if (!genre) 
    return res.status(404).send(`genre ${req.params.id} cannot be found`);
    genre.name = req.body.name;
    res.send(genre);

});

exp.delete('/api/video/genres/:id', (req, res) => {
    var genre = genres.find( g => parseInt(req.params.id) === g.id);
    if (!genre) 
    return res.status(404).send(`Genre ${req.params.id} cannot be found`);
    var index = genres.indexOf(genre);
    genre = genres.splice(index, 1);
    res.send(genre);
});


exp.listen(3000, () => console.log("listening on port 3000"));
