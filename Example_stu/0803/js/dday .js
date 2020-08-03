// 먼저 현재 날짜 정보를 now에 저장. new 를 통해서, 객체를 생성한 뒤.
var now = new Date();
// 처음 만난 날의 정보를 넣어서, 저장.
var firstDay=new Date("2020-05-22");

// 저장된 오늘 날짜를 밀리초로 변환
var toNow=now.getTime();
// 처음만난 날도 밀리초로 변환
var toFirst=firstDay.getTime();

// 밀리초들은 연산이 가능하다.
var passedTime=toNow-toFirst;

// 연산 된 밀리초를 일로 변환
var passedDay= Math.round(passedTime/(24*60*60*1000));

document.querySelector('#accent').innerText=passedDay+"일";
// 쿼리 셀렉터는 해당 셀렉터를 찾아서 기능 수행. innertext는 해당 셀렉터에 값이 들어가도록 허용.

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days){
    // 처음만날 날에다가 더함.
    var future=toFirst+days*(1000*60*60*24);
    // future값을 이용해서 date객체를 사용해서 저장
    var someday=new Date(future);
    // 계속 구하고자 한 값을 다 담도록 한다,
    var year = someday.getFullYear();
    var month = someday.getMonth();
    var date=someday.getDate();

    document.querySelector('#date'+days).innerText=year+"년 "+month+"월 "+date+"일 "


}