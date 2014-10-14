var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    arr = [];
    n = n || 0;
    if(n === 0){return array[0];}
    if(n > array.length){
        n = array.length;
     }
     for(i = 0; i < n; i++){
       arr.push(array[i]);
     }
     return arr;
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    arr = [];
    if(n === 0){return null;}
    n = n || Infinity;
    if(n === Infinity){return array[array.length-1];}
    if(n > array.length){
        n = array.length;
     }
     for(i = 0; i < n; i++){
       arr.unshift(array[array.length - 1 - i]);
     }
     return arr;
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    arr = [];
    for(i = 0; i < array.length; i++){
      if(arr.indexOf(array[i]) === -1){
        arr.push(array[i]);
      }
    }
    return arr;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    arr = [];
    for(i = 0; i<array.length; i++){
      arr.push(array[i][key]);
    }
    return arr;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    if(array.indexOf(target) === -1){
      return false;
    }
    return true;
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array, arr) {
    if(!arr){arr = [];}
    for(var i=0; i<array.length; i++){
        if(Array.isArray(array[i])){
            myFunctions.flatten(array[i], arr);
        }else{
            arr.push(array[i]);
        }
    }
     return arr;
  }
};

//concat is the secret sauce




// arr = [];
//     for(i = 0; i < array.length; i++){
      
//       if(!Array.isArray(array[i])){
//         arr.push(array[i]);
//       }
//       else {
//         arr.push(myFunctions.flatten(array[i]));
//         console.log(arr);
//       }
//      }
//     return arr;
module.exports = myFunctions;
