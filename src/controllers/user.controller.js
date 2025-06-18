const { StatusCodes } = require("http-status-codes")

const { UserService } = require("../services")
const UserRepository = require("../repositories/user.repository")
const { cookieOptions } = require("../config/auth.config")
const logger = require("../utils/logger")

const userService = new UserService(new UserRepository)

const register = async(req, res) => {
  const { token, user } = await userService.register(req.body)
  res.cookie('jwt_token', token, cookieOptions)
  res.status(StatusCodes.OK).json({ message: user, token: token })
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