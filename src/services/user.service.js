const bcrypt = require('bcrypt')

class UserService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository
  }

  register = async (userDetails) => {
    userDetails.password = await bcrypt.hash(userDetails.password, 10)
    const user = await this.UserRepository.registerUser(userDetails)
    return user
  }
}

module.exports = UserService