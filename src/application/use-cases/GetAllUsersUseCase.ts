import { User } from "../../Domain/Entity/User";
import { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface"; 

export class GetAllUsersUseCase {
    
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(): Promise<User[]> { 
        return await this.userRepository.findAll();
    }
         
}