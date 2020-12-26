const User = require('../models/User');

const Spot = require('../models/Spot');

module.exports = {

    async index(req, res) {

        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);

    },

    async store(req, res) {

        const { filename } = req.file;

        const { company, price, techs } = req.body;

        const { user_id } = req.headers; //diego.fernandes - 5fe7a98ccaa35816f1ae8e80 & alisson.peres - 5fe7aa8774d01a172f47df3a

        const user = await User.findById(user_id);

        if(!user) {

            return res.status(400).json({ error: 'User Does Not Exists!' })

        }

        const spot = await Spot.create({

            user: user_id,
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim()),

        })

        return res.json(spot);

    }

};