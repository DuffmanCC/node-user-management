import { Type } from '@sinclair/typebox';

export const _id = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'invalid type _id, must be a string',
        format: 'invalid format _id, must be a id with uuid4 format',
    },
});

export const name = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'must have at least 2 characteres',
        maxLength: 'max long is 20',
    },
});

export const surname = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'must have at least 4 characteres',
        maxLength: 'max long is 50',
    },
});

export const email = Type.String({
    format: 'email',
    errorMessage: {
        type: 'email type must be a string',
        format: 'email format must be a RFC 5322 email format',
    },
});

export const password = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'password type must be a string',
        format: 'password format must have at least one upper case, lower case, one number',
        minLength: 'must have at least 10 characteres',
        maxLength: 'max long is 25',
    },
});
