import { User } from "../../Domain/Entity/User";
import { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class CreateUserService {
    
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(data : CreateUserDTO): Promise<User> { 
        
        const user = new User(
            data.id, 
            data.name, 
            data.email, 
            data.password
        );

        await this.userRepository.save(user);
        return user;
    }
}