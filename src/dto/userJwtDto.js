import { jwtVerify } from 'jose';

const userJwtDto = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return status(401).send('no register user');

    const jwt = authorization.split(' ')[1];

    try {
        const encoder = new TextEncoder(); // node internal method

        const { payload } = await jwtVerify(
            jwt,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );

        console.log(payload);

        req.id = payload.id;

        next();
    } catch (err) {
        return res.status(401).send('user not found');
    }
};

export default userJwtDto;
