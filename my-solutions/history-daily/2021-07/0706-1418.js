function P({ customerName, tableNumber, foodItem }) {
  this.customerName = customerName
  this.tableNumber = tableNumber
  this.foodItem = foodItem
}
var displayTable = function (orders) {
  let arr = []
  let max = 0
  let tables = []
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i]
    let [customerName, tableNumber, foodItem] = order
    arr[i] = new P({ customerName, tableNumber, foodItem })
    max = Math.max(max, ~~tableNumber)
  }
  // console.log(arr)
  let foods = new Map()
  for (let order of arr) {
    const { tableNumber, foodItem } = order
    // console.log(foodItem)
    if (foods.has(foodItem)) {
      let t = foods.get(foodItem)
      t[tableNumber]++
      foods.set(foodItem, t)
    } else {
      foods.set(foodItem, new Array(max).fill(0))
      let t = foods.get(foodItem)
      t[tableNumber]++
    }
  }
  // console.log(foods)
  let res = [[]]
  
  Array.from(foods).forEach(item => { // 0 customerName 1 tableIndexNumber
    res[0].push(item[0])
  })
  res[0].sort()
  res[0] = ["Tabel", ...res[0]]
  console.log(res)
  for (let i = 1; i < res[0].length; i++) {
    // res[i] = []
  }
};

let res = displayTable(
  [["David", "3", "Ceviche"],
  ["Corina", "10", "Beef Burrito"],
  ["David", "3", "Fried Chicken"],
  ["Carla", "5", "Water"],
  ["Carla", "5", "Ceviche"],
  ["Rous", "3", "Ceviche"]]
)
console.log(res)