 
import { User } from "../../domain/entity/User";
import { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface";
import { EditUserDTO } from "../dtos/EditUserDTO";

export class UpdateUserUseCase {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(dto: EditUserDTO): Promise<Boolean> {
        const existingUser = await this.userRepository.findById(dto.id);
        if (!existingUser) {
            throw new Error("User not found");
        }   

        const u = new User( dto.id, dto.name,   dto.email, existingUser.password);
         
        if (!u) {
            throw new Error("User not found");
        }   
        return await this.userRepository.update(u);
    } 

}