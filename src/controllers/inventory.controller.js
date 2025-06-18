const { StatusCodes } = require("http-status-codes")

const getAllInventory = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const addNewItem = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const getItem = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}
const updateItem = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const deleteItem = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const getLowStockItems = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const getRestockSuggestion = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const getHeatmap = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

module.exports = {
  getAllInventory,
  addNewItem,
  getItem,
  updateItem,
  deleteItem,
  getLowStockItems,
  getRestockSuggestion,
  getHeatmap
}