const express = require('express');
const router=express.Router();
const user=require('../models/user_model');

router.get('/', function(request, response){
    user.getAll(function(err,data){
        if(err){
            response.send(err);
        }
        else {
            response.json(data);
        }
    })
});

router.get('/:id', function(request, response){
    user.getById(request.params.id, function(err, data){
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
    user.add(request.body, function(err, data){
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
    user.update(request.params.id, request.body, function(err, data){
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
    user.delete(request.params.id, function(err, data){
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