// global이 생략 가능
global.console.log("아니 이럴수가? ");
console.log("global을 안붙여도 된다니?");
console.log(" ");


// 전역(global) 변수
console.log("파일:" + __filename);
console.log("경로:" + __dirname);


// log와 관련된 console객체의 메소드
console.info("info Level의 로그");
console.log("일반적으로 사용하는 로그");
console.warn("warn Level의 로그");
console.error("error Level의 로그");
// console.trace('Show me');


// log 메소드의 Format String
console.log("%d + %d = %s", 1, 1, "귀요미");


// time()~timeEnd()를 이용한 시간 측정 + setInterval()
console.time("delay");
var count = 3;
console.log("카운트 다운 시작합니다.");
var countDown = setInterval(function(){
    console.log("%d", count);
    count -= 1;
    if (count < 1){
        clearInterval(countDown);
        console.timeEnd("delay");
    }
}, 1000);


// setTimeout()과 setInterval()도 전역 함수
setTimeout(function() {
    console.log();
}, 5000);


// process 객체
console.log("-- process 객체 멤버 변수 --");
console.log(process.version);
console.log(process.versions);
console.log(process.arch);
console.log(process.platform);
console.log(process.env);
console.log("-- process 객체 메소드 --");
console.log(process.memoryUsage());
console.log(process.uptime());
