import { Router } from 'express';
import userRegisterDto from '#Dto/userRegisterDto.js';
import userLoginDto from '#Dto/userLoginDto.js';
import userUpdateDataDto from '#Dto/userUpdateDataDto.js';
import userUpdateEmailDto from '#Dto/userUpdateEmailDto.js';
import userUpdatePasswordDto from '#Dto/userUpdatePasswordDto.js';
import userUnregisterDto from '#Dto/userUnregisterDto.js';
import userJwtDto from '#Dto/userJwtDto.js';
import userRegisterController from '#Controllers/userRegisterController.js';
import userLoginController from '#Controllers/userLoginController.js';
import userProfileController from '#Controllers/userProfileController.js';

const userRouter = Router();

userRouter.post('/register', userRegisterDto, userRegisterController);

userRouter.post('/login', userLoginDto, userLoginController);

userRouter.get('/profile', userJwtDto, userProfileController);

// userRouter.patch(
//     '/update-data',
//     userJwtDto,
//     userUpdateDataDto,
//     userUpdateDataController
// );

// userRouter.patch(
//     '/update-email',
//     userJwtDto,
//     userUpdateEmailDto,
//     userUpdateEmailController
// );

// userRouter.patch(
//     '/update-password',
//     userJwtDto,
//     userUpdatePasswordDto,
//     userUpdatePasswordController
// );

// userRouter.delete(
//     '/unregister',
//     userJwtDto,
//     userUnregisterDto,
//     userUnregisterController
// );

export default userRouter;
