// 배열
var array = [10,11,12];
for (property in array){
    console.log("name: " + property + "; value: " + array[property]);
}

// json 타입
var obj = {x:10, y:11, z:12};
for (property in obj){
    console.log("name: " + property + "; value: " + obj[property]);
}

// 문자열에도 사용 가능
var str = "hello!", spreadOut = "";
 for (var index in str) {
    if(index > 0) { spreadOut += "_"; }
    spreadOut += str[index];
}
console.log( spreadOut ); 