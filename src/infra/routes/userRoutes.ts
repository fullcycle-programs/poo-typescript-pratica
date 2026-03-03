import { Router } from "express";

export function createUserRoutes() : Router {
    const router = Router();
    const controller = new (require('../controllers/UserController').UserController)();

    router.get('/', (req, res) => {
        controller.getAllUsers(req, res);
    });

    router.post('/', (req, res) => {
        controller.createUser(req, res); 
    });

    router.get('/:id', (req, res) => {
        controller.getUserById(req, res);
    });

    router.delete('/:id', (req, res) => {
        controller.deleteUser(req, res);
    });

    router.put('/:id', (req, res) => {
        controller.updateUser(req, res);
    });

    return router;

}