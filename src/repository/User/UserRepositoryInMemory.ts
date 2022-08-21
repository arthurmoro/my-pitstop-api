import { User } from "../../entities/User";
import { UserRepository } from "./UserRepository";

export class UserRepositoryInMemory implements UserRepository {
  private users: User[] = []

  async getUserById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async getUserByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async createUser(user: User): Promise<void> {
    this.users.push(user);
  }
  async updateUser(user: User, id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

}