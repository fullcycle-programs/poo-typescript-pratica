import { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface";
import { User } from "../../Domain/Entity/User";    

export class UserRepositoryMemory implements UserRepositoryInterface {
    private users: User[] = []; 

    async save(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async findById(id: number): Promise<User | null> {
        const user = this.users.find(user => user.id === id);
        return user || null;
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async update(user: User): Promise<Boolean> {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
            return true;
        }
        return false;
    }

    async delete(id: number): Promise<Boolean> {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }

}