const gallery = require('../models/gallery')

module.exports = {
    find: function(params, callback){
        gallery.find(params,'_id title src', function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },

    findById: function(id, callback){
        gallery.findById(id, function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    }
}