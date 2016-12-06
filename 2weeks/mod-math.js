function private_func(){
    console.log("[mod-math.js] is Loaded");
}
private_func();


exports.multifly = function(aa, bb){
    return aa*bb;
};


function factorial( n ){
    return (n > 1) ? n * factorial(n-1) : 1 ;
}
exports.factorial = factorial;
