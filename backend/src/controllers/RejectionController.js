const { store } = require("./SessionController");

module.exports = {

    async store(req, res) {

        return res.json({ ok: true });

    }

};