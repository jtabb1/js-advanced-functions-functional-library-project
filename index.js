
const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      // what does instance of mean below?
      // how does the callback fcn specifically get the index(or key) and collection from this fcn?
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (let i=0; i<newCollection.length; i++) {
        iteratee(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, iteratee) {
      // how does the callback fcn specifically get the index(or key) and collection from this fcn?
      const newArr = [];
      let collectionArr;
      if(Array.isArray(collection)) {
        collectionArr = [ ...collection];
      } else {
        collectionArr = Object.values(collection);
      }

      for (let i=0; i<collectionArr.length; i++) {
        newArr.push(iteratee(collectionArr[i]));
      }
      return newArr;
    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0);
  
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
  
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
    return acc;
    },

    find: function(collection, predicate) {
      if (!Array.isArray(collection)) {
        collection = Object.values(collection);
      }
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      const newArr = [];
      let collectionArr;
      if(Array.isArray(collection)) {
        collectionArr = [ ...collection];
      } else {
        collectionArr = Object.values(collection);
      }

      for (let i = 0; i < collectionArr.length; i++) {
        if (predicate(collectionArr[i])) {
          newArr.push(collectionArr[i]);
        }
      }
      return newArr;

    },

    size: function(collection) {
      let collectionArr;
      if(Array.isArray(collection)) {
        collectionArr = [ ...collection];
      } else {
        collectionArr = Object.values(collection);
      }
      return collectionArr.length;
      //A better way to do it from the official solution:
      //return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, n=1) {
      if (n===1) return array[0];
      const newArr = [];
      for (let i=0; i<n; i++) {
        newArr.push(array[i]);
      }
      return newArr;
      //Another way to do it -> very good
      // return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(array, n=1) {
      const x = array.length;
      return (n===1) ? array[x-1] : array.slice(x-n,x);
      //My way may be a little more readable
      // return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(array) {
      const newArr = [];
      for (let i=0; i<array.length; i++) {
        if (array[i]) newArr.push(array[i]);
      }
      return newArr;
    },

    sortBy: function(array, callback) {
      const copy = [...array];
      return copy.sort((a,b)=>callback(a)-callback(b));
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },
    
    // Thanks again official solns for the below, 
    //    I do not understand this yet:
    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    // Thanks again official solns for the below, 
    //    I do not understand this yet:
    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    quniq: function(arr, isSorted = false, callback = () => {}) {
        arr.slice(1).forEach(et => {
          if (!aOut.includes( et )) {
            aOut.push(et);
          }
        });
        return aOut;
    },

    keys: function(collection) {
      return Object.keys(collection);
    },

    values: function(collection) {
      return Object.values(collection)
    },

    // Thanks again official solns for the below, 
    //    I do not understand this yet:
    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },


    qfunctions: function() {
      // console.log(this)
    }

    }
})()

fi.libraryMethod()

