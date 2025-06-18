const { StatusCodes } = require("http-status-codes")

const { UserService } = require("../services")
const UserRepository = require("../repositories/user.repository")

const userService = new UserService(new UserRepository)

const register = async(req, res) => {
  await userService.register(req.body)
  res.status(StatusCodes.OK).json({ message: "Registered" })
}

const login = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const getUser = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}
const getAllUsers = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const updateProfile = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const deleteProfile = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

module.exports = {
  register,
  login,
  getUser,
  getAllUsers,
  updateProfile,
  deleteProfile
}