'use strict';

// Array~~

// 1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2]; //좀 더 쓰는 방법임

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]);
console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of   자바에서는 못보던 방식인듯
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
/**
 fruits.forEach(function(fruit, index)){
  console.log(fruit, index);
 }
 */

fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('lemon', 'peach');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('melon', 'cherry');
console.log(fruits);

// shift: remove an item from the begining
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('strawbarry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1);//원하는 인덱스부터 지정하는 숫자까지 지워버림 만약 지정하는 숫자 없으면 뒤로 싹다 지움
console.log(fruits);
fruits.splice(1, 0, 'apple', 'watermelon'); //지우고 나서 뒤에 추가도 가능
console.log(fruits);

// combine two arrays
const fruits2 = ['kiwi', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index 몇번째 인덱스에 있는지
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('coconut'));

// includes 배열에 있는지 없는지 
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));

// lastIndexOf  
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple')); //배열 앞에 있는 인덱스부터 찾아서 알려줌
console.log(fruits.lastIndexOf('coconut')); //마지막에 가까운 것을 알려줌