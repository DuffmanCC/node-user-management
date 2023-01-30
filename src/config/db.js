import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', false);

    mongoose
        .connect(url)
        .then(() => console.log('DB connected'))
        .catch((err) => console.log(err));
};

export default connectDB;
