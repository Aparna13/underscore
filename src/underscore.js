var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
  if(n === undefined){
    return array[0];
  }else {
    var z = array.splice(0, n);
    return z;
  }  
    
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
  if(n === undefined){
    return array.pop();

  }else if(n>array.length){
    return array;
  
  }else {
    var z = array.splice(array.length-n, n);
    return z;
  }  

  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var newArr = [];
    array.forEach(function(n){
      if (newArr.indexOf(n)=== -1) {
        newArr.push(n);   
      }
     
    }); 
     return newArr;
  
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    newArr=[];
    for(var i= 0; i< array.length; i++){
    newArr.push(array[i][key]);
  }
  return newArr;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    if(array.indexOf(target)=== -1){
      return false;
    } else {
      return true;
    }

  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
 flatten: function(array) {
   newArr = [];
   array.forEach(function(x){
     if (Array.isArray(x)){
       newArr = newArr.concat(myFunctions.flatten(x)); //comes from the module.exports
       //returning the nested x
       // newArr = newArr.concat.apply(newArr, x);
     }
     else{
       newArr.push(x);
     }
   });
   return newArr;
 }
 
};
module.exports = myFunctions;
