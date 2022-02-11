const moongose = require('mongoose');

//connection to the database
const dbConnection = async () => {
    try {
        await moongose.connect('mongodb://localhost:27017/graphqlTest', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('conexión exitosa');
    } catch (error) {
        console.log(error);
        throw new error('error al iniciar la base de datos');
    }
};

module.exports = {
    dbConnection
};
