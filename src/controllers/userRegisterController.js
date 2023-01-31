import userModel from '#Schemas/userSchema.js';
import { hash } from 'bcrypt';
import uuid4 from 'uuid4';

const userRegisterController = async (req, res) => {
    const { name, surname, email, password } = req.body;

    const existingUserByEmail = await userModel.findOne({ email }).exec();
    if (existingUserByEmail)
        return res.status(409).send('email already registered');

    const hashedPassword = await hash(password, 10);

    const user = new userModel({
        _id: uuid4(),
        name,
        surname,
        email,
        password: hashedPassword,
    });

    await user.save();

    return res.send('User registered');
};

export default userRegisterController;
