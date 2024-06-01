/*

f12 개발자도구 application localstorage

JS실행시점 : HTTP 를 이용한 html을 요청했을때 > html열렸을때(HTML에서 js를 포함하고 있기때문에)
- F5(새로고침) : 현재 HTTP(주소) 재요청 > HTML > JS (메모리 초기화 ) 
- JS에 있는 메모리 영구 저장 (외부 이용)
- 1. DATABASE(DB) 2. 브라우저(프로그램) 3.자바(서버프로그램)

브라우저 저장소 (보안 취약)
1. localStorage 객체 : 브라우저 꺼져도 데이터 유지 , 유저가 직접 삭제 , (활용 : 자동로그인)
2. sessionStorage 객체 : 프로그램(브라우저) 꺼지면 데이터 사라짐 (활용 : 검색엔진, 임시데이터)
 -속성
  .setItem('key', value); :세션/쿠키 에 key 와 value를 쌍으로 데이터 저장
  .getItem('key'); : 세션/쿠키 에 value 호출
    -value : 문자 데이터형식만 가능.

    객체 <----> 문자
    1. JSON.stringify({}) : 객체 > 문자
    2. JSON.parse("") : 문자 > 객체

    -데이터 타입/형식 과 값 다르다.
    "3" : 값이 숫자이지만 데이터타입/형식 문자
    "{이름 : '유재석'}" 값은 객체 이지만 데이터타입/형식 문자
*/

//1. 
localStorage.setItem("이름","유재석");
console.log(localStorage.getItem('이름'));

sessionStorage.setItem('나이', '40');
console.log(sessionStorage.getItem('나이'));

//2. 
localStorage.setItem('객체', {이름: "유재석", 나이 : "40"});
console.log(sessionStorage.getItem('객체'));


console.log("{'이름' : '유재석'}");
console.log(JSON.stringify('{"이름" : "유재석"}'))
console.log(JSON.parse('{"이름" : "유재석"}'));

//4. 
localStorage.setItem('저장소' , JSON.stringify({국어 : 30 , 영어 : 50 }));
console.log(JSON.parse(localStorage.getItem('저장소')));
