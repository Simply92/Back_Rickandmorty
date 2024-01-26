const { Favorite, User } = require("../DB_connection");

const postFav = async (req, res) => {
  
  try {
    const { id, name, origin, status, image, species, gender, user } = req.body;

    const usuario = await User.findOne({ where: { email: user } });
  

    if (usuario) {
      // Verificar si el favorito ya existe
      // Crear el nuevo favorito
      const createFavPromise = await Favorite.create({
        id,
        name,
        origin,
        status,
        image,
        species,
        gender,
      });

      // Asociar el favorito al usuario
      const addFavoritePromise = await usuario.addFavorite(createFavPromise);

      // Esperar a que ambas operaciones se completen
      await Promise.all([createFavPromise, addFavoritePromise]);
      const favAll = await Favorite.findAll()

      return res.status(200).json(favAll);
    } else {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;





// let myFavorites = [];

// const postFav = (req, res) => {
//     const character = req.body
//     myFavorites.push(character)
//     return res.status(200).json(myFavorites) 
// }

// const deleteFav = (req, res) => {
//     const {id} = req.params;
//     myFavorites = myFavorites.filter((char) => char.id !== id)
//     return res.status(200).json(myFavorites)
// }

// module.exports= {
//     postFav, 
//     deleteFav
// }