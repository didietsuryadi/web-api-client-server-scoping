module.exports = {
  getSkills: function (req, res) {
    var skills = ['Arsitect','Engineer','Programmer']
    res.json(skills)
  },
  getMeals: function (req,res) {
    var meals = ['Burger','Sandwich','Salad with peanuts sauce','Pizza']
    res.json(meals)
  }
}
