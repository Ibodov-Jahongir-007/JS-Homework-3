// 1
let arr = ["peach", "Apple", "banana", "apricot", "kiwi", "orange", "ananas"]
let filterArr = arr.filter(item => item[0].toLowerCase() === 'a')
let arrLength = arr.reduce((first, second) => first + second.length,0)
let pushArr = prompt("Add a word to massive")
arr.push(pushArr)
console.log("Первое задание");
console.log("Arr length (not length of elem)",arrLength);
console.log(arr);
console.log(filterArr);

//2
console.log("Второе задание");
let num1 = [3, 6, [7, 5]]
let num2 = [2, 9, [1,[4]]]

let newNum1 = num1.flat()
let newNum2 = num2.flat()
let newNum3 = newNum2.flat()
let result = newNum1.concat(newNum3)
console.log(result.sort());

//3
console.log("Третье задание");
let numbers = [23, 44, "Alex", "John", 3, 23, 10]
let names = ["Stark", "Tayler", "Adams"]
let newNum = numbers.splice(2, 2)
let proverka = names.includes("Constantin")
if(proverka === false) {
    names.push("Constantin")
} 
names.push(...newNum)
console.log(numbers);
console.log(names);
