function receivesAFunction(callback){
    if(typeof callback==='function'){
        return callback()
    }

}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log('named function')
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log('anonymous function')
    }
}

    
