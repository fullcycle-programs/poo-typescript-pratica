import { json, Request, Response } from "express";
import { GetAllUsersUseCase } from "../../application/use-cases/GetAllUsersUseCase";
import { CreateUserUserCase } from "../../application/use-cases/CreateUserUserCase";
import { UserRepositoryMemory } from "../repository/UserRepositoryMemory";
import { FindUserByIdUseCase } from "../../application/use-cases/FindUserByIdUseCase";
import { UpdateUserUseCase } from "../../application/use-cases/UpdateUserUsecase";
import { CreateUserDTO } from "../../application/dtos/CreateUserDTO";
import { EditUserDTO } from "../../application/dtos/EditUserDTO";
import { DeleteUserUseCase } from "../../application/use-cases/DeleteUserUsecase";

export class UserController {

    private userRepo: UserRepositoryMemory;
    
    constructor() {
        this.userRepo = new UserRepositoryMemory();
    }

    async getAllUsers(req: Request, res: Response) {        
        const userCase = new GetAllUsersUseCase(this.userRepo);
        const users = await userCase.execute();
        res.json({ users });
    }

   async createUser(req: Request, res: Response) {      
        const userCase = new CreateUserUserCase(this.userRepo); 
        const userData = req.body;  
        const dto = new CreateUserDTO(userData.name, userData.email, userData.password);        
        const user = await userCase.execute(dto);
        res.status(201).json({ message: 'User created successfully', user });
    }

    async getUserById(req: Request, res: Response) {
        const userCase = new FindUserByIdUseCase(this.userRepo);
        const id = req.params.id;
        
        if (typeof id !== 'string') {
            return res.status(400).json({ message: 'Invalid ID' });
        }
        
        const user = await userCase.execute(id);
        res.json({ message: `User with ID ${id} retrieved successfully`, user });
    }

    async deleteUser(req: Request, res: Response) {
        const userId = req.params.id;
        const userCase = new DeleteUserUseCase(this.userRepo);
        if (typeof userId !== 'string') {
            return res.status(400).json({ message: 'Invalid ID' });
        }
        await userCase.execute(userId);
        res.json({ message: `User with ID ${userId} deleted successfully` });   
    }

    async updateUser(req: Request, res: Response) {
        const userId = req.params.id;
        const userCase = new UpdateUserUseCase(this.userRepo);
        const userData = req.body;
        const dto = new EditUserDTO(userData.id, userData.name, userData.email);
        const updatedUser = await userCase.execute(dto);
        res.json({ message: `User with ID ${userId} updated successfully`, user: updatedUser });
    }

}