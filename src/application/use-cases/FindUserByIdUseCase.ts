import { User } from "../../domain/entity/User";
import { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface"; 

export class FindUserByIdUseCase {
    
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(id: string): Promise<User | null> { 
        const u = await this.userRepository.findById(id);
        if (!u) {
            throw new Error("User not found");
        }
        return u;
    }
         
}