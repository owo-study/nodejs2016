
/** module.js 파일 **/
var square = require('./square.js');
var width = 10;
var squareArea = square.area(width);
console.log("가로가 " + width + "인 정사각형의 넓이 = " + squareArea );


/** square.js 파일 **/
exports.area = function(width) {
    var result = width * width;
    return result;
};






/** switch.js 파일 **/
var day = "?";
switch (new Date().getDay()) {
    case 0: day = "일"; break;
    case 1: day = "월"; break;
    case 2: day = "화"; break;
    case 3: day = "수"; break;
    case 4: day = "목"; break;
    case 5: day = "금"; break;
    case 6: day = "토"; break;
}
console.log("오늘은 "+day+"요일 입니다.");