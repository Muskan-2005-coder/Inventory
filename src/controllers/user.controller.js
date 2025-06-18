const { StatusCodes } = require("http-status-codes")

const { UserService } = require("../services")
const UserRepository = require("../repositories/user.repository")
const { cookieOptions } = require("../config/auth.config")
const logger = require("../utils/logger")

const userService = new UserService(new UserRepository)

const register = async (req, res) => {
  const { user, token } = await userService.register(req.userData)

  res.cookie('token', token, cookieOptions)
  res.setHeader('Authorization', `Bearer ${token}`);
  res.status(StatusCodes.CREATED).json({ message: "User Created Successfully", user })
}

const login = async (req, res) => {
  const { user, token } = await userService.login(req.userData)

  res.cookie('token', token, cookieOptions)
  res.setHeader('Authorization', `Bearer ${token}`);
  res.status(StatusCodes.OK).json({ message: "User Login Successful", user})
}

const getUser = async (req, res) => {
  const user = await userService.getUser({ userId: req.userId })
  res.status(StatusCodes.OK).json({ message: "Data Fetched successfully", user })
}

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers()
  res.status(StatusCodes.OK).json({ message: "All Users Fetched Successfully", total: users.length, data: users })
}

const updateProfile = async (req, res) => {
  const updatedUser = await userService.updateProfile(req.userId, req.userData)
  res.status(StatusCodes.OK).json({ message: "Profile Updated Successfully!", updatedUser })
}

const updatePassword = async (req, res) => {
  const user = userService.updatePassword(req.userId, req.userData)
  res.status(StatusCodes.OK).json({ message: "Password Successfully Updated", user})
}

const logout = async (req, res) => {
  res.clearCookie('token', cookieOptions)
  res.setHeader('Authorization', '')
  res.status(StatusCodes.OK).json({ message: "Logged out successfully" })
}

const ADdeleteProfile = async (req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

// All admin privileged Routes will start with AD (will add later)

module.exports = {
  register,
  login,
  getUser,
  getAllUsers,
  updateProfile,
  ADdeleteProfile,
  updatePassword,
  logout
}