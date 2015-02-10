// promise: handle async event in elegent matter

function delay(time) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('Hello World');
    }, time);
  });
}

var p = delay(1000);
p.then(function(val){
  // resolved    
  console.log('After 1000 ms: ' + val);
}, function(val) {
  // rejected
  console.log('Something wrong if come here');
});

function showSplash2() {
  console.log('showSplash');
  return new Promise(function(resolve) {
    setTimeout(function(){resolve();}, 1000);
  });
}
function hideSplash2() {
  console.log('hideSplash');
  return new Promise(function(resolve) {
    setTimeout(function(){resolve();}, 1000);
  });
}
function initialize2() {
  console.log('initialize');
  return new Promise(function(resolve) {
    setTimeout(function(){resolve();}, 1000);
  });
}

function main2() {
  showSplash2().then(function() {
    return initialize2();
  }).then(function() {
    return hideSplash2();
  });
}
main2();

