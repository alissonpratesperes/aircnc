const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({

    thumbnail: String,

    company: String,

    price: Number,

    techs: [String],

    user: {

        type: mongoose.Schema.Types.ObjectId,

        ref: 'User'

    }

}, {

    toJSON: {

        virtuals: true,

    },

});

    SpotSchema.virtual('thumbnail_url').get(function() {

        return `http://192.168.0.101:3333/files/${this.thumbnail}` ////Esse endereço é pego de dentro da Seção "Connection" do Expo, precisa ser alterado manualmente para que funcione de acordo.

    });

        module.exports = mongoose.model('Spot', SpotSchema);