const User = require('../models/User');
const Spot = require('../models/Spot');

    module.exports = {
        async index(request, response) {
            const { tech } = request.query;
            const spots = await Spot.find({ techs: tech });
            
                return response.json(spots);
        },

        async store(request, response) {
            const { filename } = request.file;
            const { company, price, techs } = request.body;
            const { user_id } = request.headers;
            const user = await User.findById(user_id);

                if(!user) { return response.status(400).json({ error: 'User does not exists!' }); }
                    
                    const spot = await Spot.create({
                        thumbnail: filename,
                        company,
                        price,
                        techs: techs.split(',').map(tech => tech.trim()),
                        user: user_id 
                    });

                        return response.json(spot);
        }
    }