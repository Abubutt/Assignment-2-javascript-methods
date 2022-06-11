// MAP // update myMap (test was givin undefined)
Array.prototype.myMap = function(callbackFn) {
  const arr = [];
  for( let i = 0; i < this.length; i++){ 
      if(this[i] === undefined) {continue;} 
      //add the new values in the array
      arr[i] = callbackFn(this[i],i, this); 
  }
  return arr;
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
  // Place your code here.
  let result = [];
  this.forEach(element => {
    if (callbackFn(element)) {
      result.push(element);
    }
  });
  return result;

};

// SOME // update myMap (test was givin false)
Array.prototype.mySome = function(callBack) {
  for (let element of this) {
      if (callBack(element))
          return true;
  }
  return false;
}

// EVERY // I cleaned the code
Array.prototype.myEvery = function (callbackFn) {
  // Place your code here.
  this.forEach(element =>(callbackFn(element) == true));
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (initialValue != undefined) {
    callbackFn(initialValue, this[0])
  }
  for (let i = 1; i < this.length; i++) {
    callbackFn(this[i - 1], this[i])
  }
};

// INCLUDES // j
Array.prototype.myIncludes = function (searchElement) {
  for (let i = 0; i < this.length; i++) {
    return (this[i] == searchElement)
  }
};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == searchElement) {
      return i;
    }
  }

  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {
  for (let i = this.length - 1; i > -1; i--) {
    if (this[i] == searchElement) {
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function (object) {
  let keyArr = [];
  for (var key in object) {
    keyArr.push(key);
  }
  return keyArr;
};

// VALUES //
Object.myValues = function (object) {
  let varArr = [];
  for (var key in object) {
    varArr.push(object[key]);
  }
  return varArr;
};





 