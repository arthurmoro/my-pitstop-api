import { Photo } from "../../../entities/Photo";
import { User } from "../../../entities/User";
import { UserRepository } from "../../../repository/User/UserRepository";

export class UserSignup {

  constructor(private userRepository: UserRepository) { };

  async execute(user: User): Promise<void> {
    if (user.profilePhoto) {
      //TODO upload photo
      user.profilePhoto = new Photo(user.profilePhoto);
    }

    await this.userRepository.createUser(user);
  }
}