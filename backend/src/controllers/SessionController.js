// Métodos disponíveis para uso dentro de um Controller para essa aplicação:
// Index - Listagem de Sessões para esse Controller;
// Show - Listagem de uma única Sessão para esse Controller;
// Store - Criação de uma Sessão para esse Controller;
// Update - Alteração de uma Sessão para esse Controller;
// Destroy - Remover ou Deletar uma Sessão para esse Controller.

const User = require('../models/User');

    module.exports = {

        async store(req, res) {
            
            const { email } = req.body;

                let user = await User.findOne({ email });

                    if(!user) {

                        user = await User.create({ email }); 
                    
                    }

                        return res.json(user);

        }

    };