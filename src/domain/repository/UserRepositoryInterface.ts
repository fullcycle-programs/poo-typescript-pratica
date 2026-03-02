import { User } from "../../domain/entity/User";

export interface UserRepositoryInterface {
    save(user: User): Promise<User>;
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    update(user: User): Promise<Boolean>;
    delete(id: string): Promise<Boolean>;
}