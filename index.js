const server = require("./src/app")
const { conn } = require('./src/DB_connection');
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT || 3001;

conn.sync({force: false}).then(() => {
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
});

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;
//     // if(url.includes("/rickandmorty/character")){
//     //     const id = Number(url.split('/').pop())
//     //     const character = characters.find((char)=> {
//     //         return char.id === id
//     //     })
//     if(url.includes("/rickandmorty/character")){
//         const id = Number(url.split('/').pop())
//         getCharById(res,id)
//     }
// })
// .listen(PORT, "localhost")

