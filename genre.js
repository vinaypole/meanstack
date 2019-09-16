var express = require('express');

var genres = [

    {id: 1, name :"action"},
    {id: 1, name :"adevnture"},
    {id: 1, name :"thriller"}
];

class Genre 
{   
    constructor(exp)
    {
      this._exp = exp;
    }

    GetAllGenres()
    {
        this._exp.getget('/api/video/genres', (req, res) => {

            res.send(genres);
        
        });        
    }
}



