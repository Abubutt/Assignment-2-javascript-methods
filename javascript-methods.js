// MAP //
Array.prototype.myMap = function(callbackFn) {
    this.forEach((element,index) => {
      this[index] = callbackFn(element);
    });
  };
  
  // FILTER //
  Array.prototype.myFilter = function(callbackFn) {
    // Place your code here.
    let result = [];
    this.forEach(element => {
      if(callbackFn(element)){
        result.push(element);
      }
    });
    return result;
  
  };
  
  // SOME //
  Array.prototype.mySome = function(callbackFn) {
    // Place your code here.
    this.forEach(element => {
      if(callbackFn(element)){
        return true;
      }
    });
    return false;
  };
  
  // EVERY //
  Array.prototype.myEvery = function(callbackFn) {
    // Place your code here.
    this.forEach(element => {
      if(callbackFn(element) == false){
        return false;
      }
    });
    return true;
  };
  
  // REDUCE //
  Array.prototype.myReduce = function(callbackFn) {
    // Place your code here.
  };
  
  // INCLUDES //
  Array.prototype.myIncludes = function(searchElement) {
    // Place your code here.
  };
  
  // INDEXOF //
  Array.prototype.myIndexOf = function(searchElement) {
    // Place your code here.
  };
  
  // LASTINDEXOF //
  Array.prototype.myLastIndexOf = function(searchElement) {
    // Place your code here.
  };
  
  // KEYS //
  Object.myKeys = function(object) {
    // Place your code here.
  };
  
  // VALUES //
  Object.myValues = function(object) {
    // Place your code here.
  };

  