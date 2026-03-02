 
import { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface";

export class DeleteUserUseCase {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(id: string): Promise<Boolean> {
        return await this.userRepository.delete(id);
    } 

}