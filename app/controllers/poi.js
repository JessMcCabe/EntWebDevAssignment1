'use strict';



const POI = require('../models/poi');
const User = require('../models/user');

const POIList = {
    home: {
        handler: function(request, h) {
            return h.view('home', { title: 'Points Of Interest' });
        }
    },
    list: {
        handler: async function(request, h) {
            const pois = await POI.find().populate('donor').lean();
            return h.view('listpois', {
                title: "POI''s to Date",
                pois: pois
            });
        }
    },
    submit: {
        handler: async function(request, h) {
            try{
                const id = request.auth.credentials.id;
                const user = await User.findById(id);
                const data = request.payload;
                const newPOI = new POI({
                    name: data.name,
                    description: data.description,
                    authority: user._id
                });
                await newPOI.save();
                return h.redirect('/list');
            } catch(err){
                return h.view('main', { errors: [{ message: err.message }] });

            }
        }
    }

};

module.exports = POIList;