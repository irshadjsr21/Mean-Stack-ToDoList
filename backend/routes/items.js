const express = require('express');
const router = express.Router();

const Item = require('../models/item');

router.get('/', (req,res)=>{
    Item.find({}, (error, items)=>{
        if(error){
            console.log(error);
            res.json({msg: 'Cannot find Item', type:'error'});
        }
        else{
            res.json(items);
        }
    });
});

router.post('/', (req,res)=>{
    Item.create({
        name: req.body.name,
        is_done: req.body.is_done
    }, (error, item)=>{
        if(error){
            console.log(error);
            res.json({msg: 'Cannot add Item', type:'error'});
        }
        else{
            res.json({msg: 'Item Created Successfully', type: 'success'});
        }
    })
});

router.put('/:id', (req,res)=>{
    Item.findOneAndUpdate({_id: req.params.id}, {$set:{is_done: req.body.is_done}}, (error, item)=>{
        if(error){
            console.log(error);
            res.json({msg: 'Cannot update Item', type:'error'});
        }
        else{
            res.json({msg: 'Item updated Successfully', type: 'success'});
        }
    });
});

router.delete('/:id', (req,res)=>{
     Item.findOneAndRemove({_id: req.params.id}, (error, item)=>{
        if(error){
            console.log(error);
            res.json({msg: 'Cannot delete Item', type:'error'});
        }
        else{
            res.json({msg: 'Item Deleted Successfully', type:'success'});
        }
     })
});

module.exports = router;