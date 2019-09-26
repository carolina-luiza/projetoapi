const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
      async cadastrar(req, res) {
        const user = await User.create(req.body);
        return res.json(user);
      },
      async listar(req, res) {
        const users = await User.find({});
        return res.json(users);
      },
      async encontrar(req, res) {
        const user = await User.findOne({ _id: req.params.id });
        return res.json(user);
      },
      async atualizar(req, res) {
        const user = await User.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        return res.json(user);
      },
      async deletar(req, res) {
        await User.deleteOne({ _id: req.params.id });
        return res.json({
          message: "Excluido com sucesso!"
        });
      }
}