'use strict';




const User = require('../models/user');

const Poi = {
    home: {
        handler: function(request, h) {
            return h.view('home', { title: 'POI Home' });
        }
    }

};

module.exports = Poi;