import { randomUUID } from "node:crypto";
import { User } from "../../domain/entity/User";
import { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class CreateUserUserCase {
    
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(data : CreateUserDTO): Promise<User> { 
        const uuid = randomUUID();

        const user = new User(
            uuid,
            data.name, 
            data.email, 
            data.password
        );

        await this.userRepository.save(user);
        return user;
    }
}