const { Favorite, User } = require("../DB_connection"); 

const deleteFav = async (req, res) => {
  const { id } = req.params;
  const { user } = req.query;

  try {
    const usuario = await User.findOne({ where: { email: user } });

    const fav = await Favorite.findOne({ where: { id: id } });

    await usuario.removeFavorite(fav);

    const favorites = await usuario.getFavorites();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;