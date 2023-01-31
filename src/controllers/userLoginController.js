import userModel from '#Schemas/userSchema.js';
import { compare } from 'bcrypt';
import { SignJWT } from 'jose';

const userRegisterController = async (req, res) => {
    const { email, password } = req.body;

    const existingUserByEmail = await userModel.findOne({ email }).exec();
    if (!existingUserByEmail) return res.status(401).send('Wrong credentials');

    console.log('test1');

    const checkPass = await compare(password, existingUserByEmail.password);
    if (!checkPass) return res.status(401).send('Wrong credentials');

    console.log('test2');

    const jwtConstructor = new SignJWT({
        id: existingUserByEmail._id,
    });

    const encoder = new TextEncoder();

    const jwt = await jwtConstructor
        .setProtectedHeader({
            alg: 'HS256',
            typ: 'JWT',
        })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

    return res.send({ jwt });
};

export default userRegisterController;
