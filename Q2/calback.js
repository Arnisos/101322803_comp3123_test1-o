
const resolvedPromise = new Promise(function(resolve, reject) {
    let success ={'message': 'delayed success!'}
    setTimeout(function() {resolve(success)}, 500)
    console.log(success)
})

const myPromise = new Promise(function(myResolve, myReject) {
    let success ={'message': 'delayed success!'}
    setTimeout(function(){ myReject('{ error: delayed exception! }') }, 500);
  }).catch(function(e){
    console.log(e)
  });
  