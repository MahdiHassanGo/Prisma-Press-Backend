import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const createToken = (payload: JwtPayload, secret: string, options?: SignOptions): string => {
    const token =  jwt.sign(payload, secret, options);

    return token
};

export const jwtUtils = {
    createToken,
};