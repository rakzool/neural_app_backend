import { NextFunction, Request, Response, Router } from "express";
import Auth from "../../controllers/auth";

class AuthRouter {
    private _router = Router();
    private _controller = Auth;

    private _configure() {
        this._router.get('/', (req :Request, res :Response, next: NextFunction) => {
            res.status(200).json(this._controller.defaultMethod());
        });
    }


    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }
}


export = new AuthRouter().router;