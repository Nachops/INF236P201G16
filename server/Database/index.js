const mongoose = require("mongoose");

const MONG0_URL = "mongodb+srv://TheSonGori:javi123@proyecto.zfg3413.mongodb.net/?retryWrites=true&w=majority";

const db = async () => {
    try{
        const conn = await mongoose.connect(MONG0_URL);
        console.log("BD Conectada", conn.connection.host);

    }catch(error){
        console.log(error);
    }
}

module.exports = db;
