class WageService {
  constructor(UserRepository, WageRepository) {
    this.UserRepository = UserRepository,
    this.WageRepository = WageRepository
  }

  async getAllWageEntries (wageId) {
    const wages = await this.WageRepository.getAllWage()
    return wages
  }

  async calculateWage (userId) {
    const { wagePerHour, hoursThisMonth } = await this.UserRepository.getUser
    const wage = wagePerHour * hoursThisMonth

    
  }
}

module.exports = WageService