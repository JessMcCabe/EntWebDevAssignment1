'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const poiSchema = new Schema({
    name: String,
    description: String,

});



poiSchema.statics.findByName = function(name) {
    return this.findOne({ name : name});
};




module.exports = Mongoose.model('Poi', poiSchema);