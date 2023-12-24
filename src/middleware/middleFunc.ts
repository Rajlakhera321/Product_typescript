import express, { Request, Response, NextFunction } from "express";
const app = express();

const func = (req: Request, res: Response, next: NextFunction) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.protocol + '://' + req.get('host') + req.originalUrl;

    console.log(`[${timestamp}] ${method} ${url}`);

    next();
};
export { func };