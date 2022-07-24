function isSameTwoArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true
}

/**
 * 获取几个字母中最小的那个
 * @param  {...any} strings 
 * @returns 
 */
function isSmallString(...strings) {
    return strings.sort().shift()
}

function equalPairs(grid) {
    const rows = grid.map(item => {
        return item
    })
    const columns = [];
    for (let i = 0; i < grid.length; i++) {
        columns[i] = [];
        for (let j = 0; j < grid.length; j++) {
            columns[i].push(grid[j][i])
        }
    }
    let res = 0;
    rows.forEach(item => {
        columns.forEach(e => {
            if (isSameTwoArray(item, e)) res ++
        })
    })

    return res;
}

// console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]))


class FoodRatings {
    constructor(foods, cuisines, ratings) {
        this.foodMap = new Map()
        this.cuisineMap = new Map()
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i];
            const cuisine = cuisines[i]
            const obj = {};
            const cuisineMap = this.cuisineMap.get(cuisine) || new Set()
            obj.cuisine = cuisine;
            obj.rating = ratings[i]
            cuisineMap.add(food)
            this.foodMap.set(food, obj)
            this.cuisineMap.set(cuisine, cuisineMap)
        }
    }

    getRating(food) {
        return ((this.foodMap.get(food)).rating)
    } 

    changeRating(food, newRating) {
        const map = this.foodMap.get(food) || {};
        map.rating = newRating;
        this.foodMap.set(food, map);
    }

    highestRated(cuisine) {
        const cuisines = [...this.cuisineMap.get(cuisine)]
        const foods = cuisines.map(foodName => {
            return [foodName, this.getRating(foodName)]
        })
        const max = Math.max(...foods.map(i => i[1]))
        const strs = foods.filter(i => i[1] === max).map(i => i[0])
        return strs.sort()[0]
    }
}

let instance = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7])
instance.highestRated("korean")
instance.highestRated("japanese")
instance.changeRating("sushi", 16)
instance.highestRated("japanese")
instance.changeRating("ramen", 16)
instance.highestRated("japanese")