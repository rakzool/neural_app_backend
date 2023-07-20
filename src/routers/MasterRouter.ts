import { Router } from "express";
import AuthRouter from "./auth/authRouter";

class MasterRouter {
    private _router = Router();
    private _authRoute = AuthRouter;

    get router() {
        return this._router;
    }

    constructor(){
        this._configure();
    }

    private _configure(){
        this._router.use('/auth', this._authRoute);
    }
}

export = new MasterRouter().router;