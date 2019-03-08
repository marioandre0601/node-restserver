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
	urlDB = process.env.MONGO_URI;
	
}

process.env.URLDB = urlDB;
// "mongodb+srv://cluster0-hvsco.mongodb.net/cafe" 