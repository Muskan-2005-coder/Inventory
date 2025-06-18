const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository
  }

  register = async (userDetails) => {
    userDetails.password = await bcrypt.hash(userDetails.password, 10)
    const user = await this.UserRepository.registerUser(userDetails)

    const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY)
    return { user, token }
  }
}

module.exports = UserService