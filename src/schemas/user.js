import mongoose from 'mongoose';
const { Schema, model } = mongoose; // not allow direct destructuring form some reason

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 20,
    },
    surname: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 20,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const userModel = model('User', userSchema);

export default userModel;
