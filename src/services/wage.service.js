class WageService {
  constructor(UserRepository, WageRepository) {
    this.UserRepository = UserRepository,
    this.WageRepository = WageRepository
  }

  async getAllWageEntries (wageId) {
    const wages = await this.WageRepository.getAllWage()
    return wages
  }

  async calculateWage (wagePerHour, hoursThisMonth) {
    return wage = wagePerHour * hoursThisMonth
  }

  async getWage (userId) {
    const { wagePerHour, hoursThisMonth } = await this.UserRepository.getUser
    const totalSalary = wagePerHour * hoursThisMonth

    await this.WageRepository.updateUserWage(userId, { totalSalary })
    return totalSalary
  }
}

module.exports = WageService