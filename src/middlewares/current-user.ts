import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return next();

  const token = authHeader.split(" ")[1];

  if (!token) return next();

  try {
    const payload = jwt.verify(token, process.env.JWT_KEY!) as UserPayload;
    console.log(payload, "payload");

    req.currentUser = payload;
  } catch (err) {
    console.log(err);
  }

  next();
};
