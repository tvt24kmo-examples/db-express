const express = require('express');
const router=express.Router();
const book=require('../models/book_model');

router.get('/', function(request, response){
    book.getAll(function(err,data){
        if(err){
            response.send(err);
        }
        else {
            response.json(data);
        }
    })
});

router.get('/:id', function(request, response){
    book.getById(request.params.id, function(err, data){
        if(err){
            response.send(err);
        }
        else {
            //palautetaan arrayn ainoa objekti
            response.json(data[0]);
        }
    })
});

router.post('/', function(request, response){
    book.add(request.body, function(err, data){
        if(err){
            response.send(err);
        }
        else {
            //palautetaan koko array
            //response.json(data);
            response.json(data.affectedRows);
        }
    })
});

router.put('/:id',function(request, response){
    book.update(request.params.id, request.body, function(err, data){
        if(err){
            response.send(err);
        }
        else {
            //palautetaan koko array
            //response.json(data);
            response.json(data.affectedRows);
        }
    })
});

router.delete('/:id', function(request, response){
    book.delete(request.params.id, function(err, data){
        if(err){
            response.send(err);
        }
        else {
            //palautetaan koko array
            //response.json(data);
            response.json(data.affectedRows);
        }
    })
});

module.exports=router;