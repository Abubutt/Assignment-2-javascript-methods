// MAP //
Array.prototype.myMap = function(callbackFn) {
    let result = []
    this.forEach((element,index) => {
      result.push(callbackFn(element));
    });
    return result;
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
  Array.prototype.myReduce = function(callbackFn, initialValue) {
	if(initialValue != undefined) {
		callbackFn(initialValue, this[0])
	}
    for(let i = 1; i < this.length; i++) {
		callbackFn(this[i-1], this[i])
	}
  };

  // INCLUDES //
  Array.prototype.myIncludes = function(searchElement) {
    for(let i = 0; i < this.length; i++) {
		if(this[i] == searchElement) {
			return true;
		}
	}
	return false;
  };
  
  // INDEXOF //
  Array.prototype.myIndexOf = function(searchElement) {
    for(let i = 0; i < this.length; i++) {
		if(this[i] == searchElement) {
			return i;
		}
	}
	 
	return -1;
  };
  
  // LASTINDEXOF //
  Array.prototype.myLastIndexOf = function(searchElement) {
    for (let i = this.length - 1; i > -1; i--) {
      if (this[i] == searchElement) {return i;}
    }
    return -1;
  };
  
  // KEYS //
  Object.myKeys = function(object) {
    let keyArr = [];
    for (var key in object){
      keyArr.push(key);
    }
    return keyArr;
  };
  
  // VALUES //
  Object.myValues = function(object) {
    let varArr = [];
    for (var key in object){
      varArr.push(object[key]);
    }
    return varArr;
  };
  