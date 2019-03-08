/**
 * PORT
 */
process.env.PORT = process.env.PORT || 8080;

/**
 *  ENTORNO
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/**
 *  BASE DE DATOS
 */
let urlDB;
if(process.env.NODE_ENV === 'dev'){
	urlDB = 'mongodb://localhost:27017/cafe';
}else{
	urlDB = 'mongodb+srv://marioandre0601:7lpmaXLyq9Lk7kgH@cluster0-hvsco.mongodb.net/cafe?retryWrites=true';
}

process.env.URLDB = urlDB;
// "mongodb+srv://cluster0-hvsco.mongodb.net/cafe" 