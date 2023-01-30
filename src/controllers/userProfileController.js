import userModel from '#Schemas/userSchema.js';
import { compare } from 'bcrypt';
import { jwtVerify } from 'jose';

const userProfileController = async (req, res) => {
    const { id } = req;

    const existingUserById = await userModel.findById(id).exec();
    if (!existingUserById) return res.status(409).send('User no authorized');

    const { _id, name, surname, email } = existingUserById;

    res.send({ _id, name, surname, email });
};

export default userProfileController;
