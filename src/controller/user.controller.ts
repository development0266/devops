import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { errorResponseHelper, successResponseHelper } from "../helpers/responseHelper";
import bcrypt from "bcrypt";

const UserRepository = AppDataSource.getRepository(User);

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Generate a salt and hash the password in a single step
        const hashedPwd = await bcrypt.hash(password, 10);

        // Create a new user object with the hashed password
        const newUser = {
            email,
            password: hashedPwd,
        };

        const userData = await UserRepository.save(newUser);

        return successResponseHelper(res, 200, 'User Created Successfully!', userData);

    } catch (error) {
        errorResponseHelper(res, 500, error.message);
    }
};


