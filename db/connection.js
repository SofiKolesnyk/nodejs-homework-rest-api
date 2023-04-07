const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDb = async () => {
try {
    await mongoose.connect(process.env.MONGO_URL, {dbName: 'db-contacts'});

    console.log(`Database connection successful`);
} catch (error) {
    console.log(error.message);
    process.exit(1);
}
};

module.exports = { connectDb };