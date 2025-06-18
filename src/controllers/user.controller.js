const { StatusCodes } = require("http-status-codes")

const register = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
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