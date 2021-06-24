import { Request, Response, NextFunction} from 'express';

export const validateReq = function validateReq(req: Request, res: Response, next: NextFunction) {
    
    if (req.params.id) {
        next();
    }
    return res.status(400).send('bad request');

  
}

