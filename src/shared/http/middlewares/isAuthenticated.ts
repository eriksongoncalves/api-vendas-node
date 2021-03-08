import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';
import AuthConfig from '@config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, AuthConfig.jwt.secret);

    const { sub } = decodedToken as ITokenPayload;

    req.user = {
      id: sub
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT Token', 401);
  }
}
