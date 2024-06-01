/*
실습 2 : 웹 가계부 만들기
[요구사항]
1. 항목마다 날짜 항목명 금액 3가지를 저장
2. 등록된 금액 총합계를 하단에 표시
3. 출력은 <table> 사용해주세요. 

+추가 요구사항
1. 테이블에 항목 내역을 아래와 같이 출력 해주세요
날짜        항목        금액
2024-05-23  콜라        1000
2024-05-24  사이다      5000

2. 전체 내역에 해당 특정 항목 삭제 할수 있도록 버튼 기능 추가


3. 금액의 천단위 마다 ,(쉼표) 처리 해주세요.
tolocalstring()

(설계)

[백엔드]
1. 메모리구성
(배열 3개 구성)
  let datelist = []
  let namelist = []
  let moneylist = []
  
2. 기능구성
2개 
add(){} 1. 입력/저장 함수
total(){} 2. 총합계 함수

3.기능 구현
1. 입력/저장 함수
[로직 순서]
1. 날짜 항목명 금액을 입력받는다
2. 입력받은 데이터를 각 배열에 저장한다
3. 안내메세지

2. 총합계 함수
[로직 순서]
1. 배열에 있는걸 가져와서 더한다
2. 총합계를 보여준다

[프론트엔드]
1. HTML구성
 1. 날짜 항목명 금액 input 칸 3개
 2. 입력 처리 버튼
 3. 출력용 table하나

2. HTMl 구현

[프론트엔드/백엔드 연동]
1. add()버튼 클릭시
2. total() : 등록처리가 되었을때
*/

let datelist = []
let namelist = []
let moneylist = []

function add(){
    let dateinput = document.querySelector('#dateinput');
    let nameinput = document.querySelector('#nameinput');
    let moneyinput = document.querySelector('#moneyinput');

    let date = dateinput.value;
    let name = nameinput.value;
    let money = Number(moneyinput.value);

    datelist.push(date);
    namelist.push(name);
    moneylist.push(money);

    alert('항목 저장 성공');

    //total();
    print();
}

function total(){

let sum = 0;
//i부터 0부터 마지막 인덱스까지 = 배열을 순차적으로 순회(하나씩 금액 호출)
for(let i = 0; i<moneylist.length; i++){
    //배열의 i번째 인덱스의 금액 호출
    sum += moneylist[i];
    }
    //호출 했던 곳으로 데이터 보내주기 = 반환
    return sum;
}

function print(){
        //HTML에 출력 총합계
    // 어디에
    let moneytable = document.querySelector('#moenytable');
    // 무엇을
    
    let html = '';

    //1.테이블의 제목부분
    html += `        
    <tr>
    <th>날짜</th>
    <th>항목</th>
    <th>금액</th>
    <th>비고</th>
    </tr>`

    //2 테이블의 내용 부분 : 항목 내역 들 = 배열내 전체 반복문
    for(let i = 0; i<moneylist.length;i++){
        //각 i번째 인덱스의 항목 정보를 각 호출
        let currentMoney = moneylist[i];
        let currentName = namelist[i];
        let currentdate = datelist[i];

        html += `        
        <tr>
        <td>${currentdate}</td>
        <td>${currentName}</td>
        <td>${currentMoney.toLocaleString()}</td>
        <td><button onclick="remove(${i})">삭제</button></td>
        </tr>`
    }


    //3. 하단 부분 총합계
    html += `
    <tr>
    <td colspan="2">합계</td>
    <td colspan="2">${total()}</td>
    </tr>`

    //대입
    moneytable.innerHTML = html;
}

//삭제:인덱스를 이용한 삭제 구현
//인덱스 사용 배열내 중복 삭제
function remove(deleteidex){

    // let deleteidex = 0

    //1. 배열내 특정 인덱스의 요소 삭제
    datelist.splice(deleteidex ,1);
    moneylist.splice(deleteidex , 1);
    namelist.splice(deleteidex , 1);

    //2. 삭제가 되면 배열의 상태가 변경 되므로
    //배열 상태를 다시 출력 - 화면 업데이트
    print();
}