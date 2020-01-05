const express = require('express')
const router = express.Router()

const Gallery = require('../models/Gallery')

router.post('/', (req,res)=>{
  const newPhoto = new Gallery(req.body);
  newPhoto
    .save()
    .then(photo => res.json(photo))
    .catch(err => res.json(err));
})

router.get('/', (req,res)=>{
  Gallery.find().then(gallery => res.json(gallery)).catch(err => res.json(err))
})

router.get('/:id', (req,res)=>{
  Gallery.find({user:req.params.id}).then(gallery => res.json(gallery)).catch(err => res.json(err))
})

router.put('/:id',  (req,res)=>{
  Gallery.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { ...req.body } },
    { new: true }
  )
    .then(gallery => res.json(gallery))
    .catch(err => res.json(err));
})

router.delete("/:id", function(req, res, next) {
  Gallery.findByIdAndDelete(req.params.id)
    .then(gallery => res.json(gallery))
    .catch(err => res.json(err));
});

module.exports = router