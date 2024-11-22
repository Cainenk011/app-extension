const indexController = {
  index: (req, res) => {
    res.render('index', { title: 'Dirección de Extensión Universitaria de la UNLaR' });
  },
};

module.exports = indexController;
