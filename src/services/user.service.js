class UserService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository
  }

  register = async (userDetails) => {
    const user = await this.UserRepository.registerUser(userDetails)
    return user
  }
}