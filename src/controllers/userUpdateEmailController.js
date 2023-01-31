import userModel from '#Schemas/userSchema.js';
import { compare } from 'bcrypt';

const userUpdateEmailController = async (req, res) => {
    const { id } = req;

    const existingUserById = await userModel.findById(id).exec();
    if (!existingUserById) return res.status(409).send('User no authorized');

    // check password
    const { email, password } = req.body;
    const checkPass = await compare(password, existingUserById.password);
    if (!checkPass) return res.status(401).send('Wrong credentials');

    existingUserById.email = email;

    await existingUserById.save();

    res.send('User email updated');
};

export default userUpdateEmailController;
