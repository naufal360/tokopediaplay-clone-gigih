import mongoose from "mongoose";

const mongodbConn = (mongo_url) => {
        mongoose.connect(mongo_url, {
            socketTimeoutMS: 1000,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(()=> console.log('MongoDB Connected Successfully'))
        .catch((err) => console.log(err.message));    
};

export default mongodbConn;

