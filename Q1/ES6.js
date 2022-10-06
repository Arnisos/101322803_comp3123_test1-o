const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
function lowerCase(array){
    let myPromise = new Promise(function(myResolve, myReject) {  
        
        try {
            
            let result = []
            for(let i = 0; i<array.length; i++){
                if(typeof array[i] === 'string'){
                    result.push(array[i].toLowerCase())
                }
            }
            myResolve(result)
        } catch(err){
            myReject(err)
        }
    })
    myPromise.then(
        function(value) {console.log(value)},
        function(error) {console.log(error)}
    )
    
}
lowerCase(mixedArray)