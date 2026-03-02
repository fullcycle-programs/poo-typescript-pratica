import { User } from "../../Domain/Entity/User";

export interface UserRepositoryInterface {
    save(user: User): Promise<User>;
    findById(id: number): Promise<User | null>;
    findAll(): Promise<User[]>;
    update(user: User): Promise<Boolean>;
    delete(id: number): Promise<Boolean>;
}