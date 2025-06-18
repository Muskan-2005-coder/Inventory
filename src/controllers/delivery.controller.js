const { StatusCodes } = require("http-status-codes")

const getAllDeliveries = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const createDelivery = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const getDeliveryStatus = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}
const updateDelivery = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const assignDelivery = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const getEta = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const getRestockSuggestion = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const getHeatmap = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

module.exports = {
  getAllDeliveries,
  createDelivery,
  getDeliveryStatus,
  updateDelivery,
  assignDelivery,
  getEta,
  getRestockSuggestion,
  getHeatmap
}