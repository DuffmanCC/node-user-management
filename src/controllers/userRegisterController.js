import userModel from '#Schemas/userSchema.js';
import { hash } from 'bcrypt';

const userRegisterController = async (req, res) => {
    const { _id, name, surname, email, password } = req.body;

    const existingUserById = await userModel.findById(_id);
    if (existingUserById) return res.status(409).send('user ID duplicated');

    const existingUserByEmail = await userModel.findOne({ email }).exec();
    if (existingUserByEmail)
        return res.status(409).send('email already registered');

    const hashedPassword = await hash(password, 10);

    const user = new userModel({
        _id,
        name,
        surname,
        email,
        password: hashedPassword,
    });

    await user.save();

    return res.send('User registered');
};

export default userRegisterController;
