/*
 1. 세미콜론 ; 
    -컴퓨터에게 문장 마침 알림 역할
    -한줄에 코드 문장이 1개일때 생략 가능.
    -한줄에 코드문장이 2개 이상일때는 코드문장마다 ; 마침.

    2. 데이터 타입
    typeof data : data의 타입/형식 을 알 수 있다
    -HTML 언어는 문자열

    3. 문자열 처리
     1. "" , '' , ``
     -백틱 문자열 템플릿
     `문자열${JS코드} 문자열${JS코드} 문자열${JS코드} 문자열${JS코드}`

     2. 변수호출 이나 연산 는 문자처리 안됨
*/
console.log('사과');
console.log('바나나'); console.log('포도');

//2.
console.log(typeof '사과'); //string : 문자
console.log(typeof 10); //number : 숫자
console.log(typeof true); //boolean : 논리
console.log(typeof [1, 2]); //object : 객체 (array포함)

//3.
console.log('유재석'); //문자
console.log("35000"); //문자
// console.log("유재석') // 불가능 따옴표 맞춰야함
console.log(`유재석"30"`);

//4
let 나이 = 40;
console.log('유재석'+'강호동'); //문자열+문자열 연결 연산자 유재석강호동
console.log('유재석'+ 나이); //문자열+숫자(변수) 연결연산자 유재석40
console.log('${`유재석`}${`강호동`}'); //${data}${data}
console.log('${`유재석`}${`30`}'); //${data}${data}
console.log(`유재석${나이}`); // `문자열${JS코드}문자열${JS코드}`

//4-2
let 직원1= '유재석';
let 직원2= '강호동';

let ageHTML1 = "<ol> <li>"+직원1+"</li> <li>"+직원2+"</li> </ol>";
document.write(ageHTML1);

let ageHTML2 = `<ol> <li>${직원1}</li> <li>${직원2}</li> </ol>`;
document.write(ageHTML2);

//5
let 차량번호 = '250어7142'
console.log(차량번호[1]);
console.log(차량번호.length);
let 잘라낸차량번호 = 차량번호.split('어'); //특정 문자 기준으로 잘라내서 배열로 반환
console.log(잘라낸차량번호);

//예1 > 2명의 사원정보를 이름, 입력받아 값 저장해 HTML 테이블형식 출력
let 사원1= prompt('사원1 사원명:');
let 사원2 =prompt('사원2 사원명:');


//3.ㅗ싀 gudtlrdml answkdufdmf wjwkdgksms qoduf 
// 1.HTML 에서 표현하고자하는 HTML마크업 만들어서 복붙하자
// 2. ``qorxlr xpavmfflt dptj qustnfmf ghcnftl ${변수명}
let talbeHTML = 
`<table>
<tr>
    <th>번호</th> <th>이름</th>
</tr>
<tr>
    <th>1</th> <th>${사원1}</th>
</tr>
<tr>
    <th>2</th> <th>${사원2}</th>
</tr>
</table>`
//4. HTML 문자열이 지정된 변수를 HTML에 출력하자
document.write(talbeHTML);