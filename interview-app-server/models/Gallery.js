const mongoose = require('mongoose');  

const gallerySchema = new mongoose.Schema({  
    title: { type: String, required: true },
    src: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        require: true
    },
    created: {
        type: Date,
        default: new Date()
    }      
});

module.exports = mongoose.model('Gallery', gallerySchema);