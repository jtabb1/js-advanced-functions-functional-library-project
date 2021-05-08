
// Really deep, starting to get it.  
// Need to map out everything with the recursions, etc.
// 


function qunpack(receiver, arr) {
    console.log('doing qunpack now:');
    for (let val of arr)
      receiver.push(val)
  }
  
  let i1=100,i2=200,i3=300,i4=400;
  function qflatten(collection, shallow, newArr=[]) {
    console.log(`i1 = ${++i1}`);
    console.log(`called qflatten: ${i1-100} net time(s): +1`);
    console.log('collection:');
    console.log(collection);
    console.log('newArr:');
    console.log([...newArr]);
    console.log(`The collection is an array: ${Array.isArray(collection)}`);
  if (!Array.isArray(collection)) {
    newArr.push(collection)
    console.log(`i1 = ${--i1}`);
    console.log(`called qflatten: ${i1-100} net time(s): -1`);
    return newArr;
  }
    if (shallow) {
      for (let val of collection)
        console.log('before shallow iteration');
        console.log(`i4 = ${++i4}`);
        Array.isArray(val) ? qunpack(newArr, val) : newArr.push(val)
    } else {
      for (let val of collection) {
        console.log('starting iteration');
        console.log(collection);
        console.log(val);
        console.log([...newArr]);
        console.log(`i2 = ${++i2}`);
        qflatten(val, false, newArr)
        console.log('iteration after qflatten');
        console.log(collection);
        console.log(val);
        console.log([...newArr]);
        console.log(`i3 = ${++i3}`);
      }
    }
    console.log(`i1 = ${--i1}`);
    console.log(`called qflatten: ${i1-100} net time(s) {this is the last time}`);
    return newArr
  }
  
  console.log([1, [2, 3], [[4, 5]]]);
  console.log(qflatten([1, [2, 3], [[4, 5]]]));
  
  //
  //
  
  let x = [1, [2, 3], [[4, 5]]];
  console.log(x);
  console.log(qflatten(x));
  /* */

  /* Alt way

  //
//
function qunpack(receiver, arr) {
  console.log('doing qunpack now:');
  for (let val of arr)
    receiver.push(val)
}

let i1=101,i2=200,i3=300,i4=400;
function qflatten(collection, shallow, newArr=[]) {
  console.log(`i1 = ${++i1}`);
  console.log(`called qflatten: ${i1-100} net time(s)`);
  console.log('array check');
  console.log(collection);
  console.log([...newArr]);
if (!Array.isArray(collection)) {
  newArr.push(collection)
  console.log([...newArr]);
  console.log(`i1 = ${--i1}`);
  console.log(`called qflatten: ${i1-100} net time(s)`);
  return newArr;
}
  if (shallow) {
    for (let val of collection)
      console.log('before shallow iteration');
      console.log(`i4 = ${++i4}`);
      Array.isArray(val) ? qunpack(newArr, val) : newArr.push(val)
  } else {
    for (let val of collection) {
      console.log('starting iteration');
      console.log(collection);
      console.log(val);
      console.log([...newArr]);
      console.log(`i2 = ${++i2}`);
      qflatten(val, false, newArr)
      console.log('iteration after qflatten');
      console.log(collection);
      console.log(val);
      console.log([...newArr]);
      console.log(`i3 = ${++i3}`);
    }
  }
  console.log(`i1 = ${--i1}`);
  console.log(`called qflatten: ${i1-100} net time(s) {this is the last time}`);
  return newArr
}

console.log([1, [2, 3], [[4, 5]]]);
console.log(qflatten([1, [2, 3], [[4, 5]]]));

//
//


let x = [1, [2, 3], [[4, 5]]];
console.log(x);
console.log(qflatten(x));

/* */

  