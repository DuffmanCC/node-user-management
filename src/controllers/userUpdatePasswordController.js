import userModel from '#Schemas/userSchema.js';
import { compare } from 'bcrypt';
import { hash } from 'bcrypt';

const userUpdateEmailController = async (req, res) => {
    const { id } = req;

    const existingUserById = await userModel.findById(id).exec();
    if (!existingUserById) return res.status(409).send('User no authorized');

    // check password
    const { newPassword, oldPassword } = req.body;
    const checkPass = await compare(oldPassword, existingUserById.password);
    if (!checkPass) return res.status(401).send('Wrong credentials');

    const hashedPassword = await hash(newPassword, 10);
    existingUserById.password = hashedPassword;

    await existingUserById.save();

    res.send('User password updated');
};

export default userUpdateEmailController;
