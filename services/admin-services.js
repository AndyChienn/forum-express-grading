const { Restaurant, Category } = require('../models')

const adminServices = { // 修改這裡
  getRestaurants: (req, cb) => {
    return Restaurant.findAll({
      raw: true,
      nest: true, // 增加這裡
      include: [Category] // 增加這裡
    })
      .then(restaurants => cb(null, { restaurants }))
      .catch(err => cb(err))
  }
}
module.exports = adminServices
