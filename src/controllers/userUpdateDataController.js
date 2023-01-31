import userModel from '#Schemas/userSchema.js';

const userUpdateDataController = async (req, res) => {
    const { id } = req;

    const existingUserById = await userModel.findById(id).exec();
    if (!existingUserById) return res.status(409).send('User no authorized');

    const { name, surname } = req.body;
    existingUserById.name = name;
    existingUserById.surname = surname;

    await existingUserById.save();

    res.send('User updated');
};

export default userUpdateDataController;
