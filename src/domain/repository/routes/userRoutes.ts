import { Router } from "express";

export function createUserRoutes() : Router {
    const router = Router();
    router.get('/', (_, res) => {
        res.json({ users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }] });
    });

    router.post('/', (req, res) => {
        res.json({ message: 'User created successfully', user: req.body });
    });

    router.get('/:id', (req, res) => {
        const userId = req.params.id;
        res.json({ user: { id: userId, name: `User ${userId}` } });
    });

    router.delete('/:id', (req, res) => { const userId = req.params.id;
        res.json({ message: `User with id ${userId} deleted successfully` });
    });

    router.put('/:id', (req, res) => { const userId = req.params.id;
        res.json({ message: `User with id ${userId} updated successfully`, user: req.body });
    });

    return router;

}