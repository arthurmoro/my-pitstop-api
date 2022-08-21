import { User } from "../../entities/User"

export interface UserRepository {
  getUserById(id: string): Promise<User | null>
  getUserByEmail(email: string): Promise<User>
  createUser(user: User): Promise<void>
  updateUser(user: User, id: string): Promise<void>
}