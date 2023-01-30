import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import { _id, name, surname, email, password } from './dtoTypes.js';

/**
 * User schema
 */
const schema = Type.Object(
    {
        email: email,
        password: password,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'No valid format',
        },
    }
);

const ajv = new Ajv({ allErrors: true });

/**
 * add custom format
 */
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

/**
 * pass formats
 */
addFormats(ajv, ['email']).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

/**
 * validate schema
 */
const validateSchema = ajv.compile(schema);

/**
 * create middleware
 */
const userUpdateEmailDto = (req, res, next) => {
    const isValid = validateSchema(req.body);

    if (!isValid) {
        const errors = validateSchema.errors;

        return res
            .status(400)
            .send({ errors: errors.map((error) => error.message) });
    }

    res.sendStatus(200);
};

export default userUpdateEmailDto;
