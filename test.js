require('./javascript-methods')
//test myMap
const array1 = [1, 4, 9, 16];
const map1 = array1.myMap(Math.sqrt);
console.log('myMap: ',map1); // [ 1, 2, 3, 4 ]

//test myFilter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.myFilter(word => word.length > 6);
console.log('myFilter: ',result); //  [ 'exuberant', 'destruction', 'present' ]

//test mySome
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log('mySome: ', array.mySome(even)); //true

//test myEvery
const isBelowThreshold = (currentValue) => currentValue < 40;
const arr = [1, 30, 39, 29, 10, 13];
console.log('myEvery: ',arr.every(isBelowThreshold)); // true

// myReduce
const array2 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log('myReduce: ',sumWithInitial); // 10

// myInclude
const pets = ['cat', 'dog', 'bat'];
console.log('myInclude: ',pets.includes('cat')); // true

//myIndex 
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log('myIndex: ', beasts.indexOf('bison')); // 1

//myLastIndexOf
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log('myLastIndexOf: ', animals.lastIndexOf('Dodo')); //3

//myKey
const array3 = ['a', 'b', 'c'];
const it = array3.keys();
console.log('myKey: '); 
for (const key of it) {
  console.log(key); // 0  1  2
}

//myValues
const array4 = ['a', 'b', 'c'];
const iterator = array4.values();
console.log('myValues: '); 
for (const value of iterator) {
  console.log(value); // a  b  c
}