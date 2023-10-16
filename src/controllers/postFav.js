const {Favorite} = require('../DB_connection');

const postFav = async(req, res) => {
   try {
    const {id, name, origin, status, image, species, gender} = req.body;
    if(!id || !name || !origin || !status || !image || !species || !gender){
        return res.status(401).send('missing data')
       } 
       await Favorite.findOrCreate({
        where: {
            id, name, origin, status, image, species, gender
        }
       })
       const allFav = await Favorite.findAll()
       return res.json(allFav)
    
   } catch (error) {
    return res.status(500).json({ error: error.message });
   }
}

module.exports= postFav;





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