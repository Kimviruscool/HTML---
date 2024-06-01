/* 복습예제1 : 주차장 차량 검색대
조건1 : let carArray = ['250어3010', '142가1231']
조건2 : let locationArray = ['A1' , 'B3']
조건3 : caArray , locationArray 인덱스가 같은 정보의 차량
조건4 : 차량번호 입력받아 내 차량 위치 찾기

JS문법
- prompt() -console.log
- 변수란?
- 배열내 데이터찾기
    indexOf(), contains{}
- if
*/
/*
let carArray = ['250어3010', '142가1231']
let locationArray = ['A1' , 'B3']

let carNum = prompt('차량번호'); //1. 차량번호 입력받아 변수에 저장

let carIndex = carArray.indexOf(carNum) //2. 입력받은 차량번호의 배열내 인덱스 찾기
//3. 논리조건
if(carIndex == -1){ //3-1 만약에 carIdex가 -1이면
    console.log('입력한 차량번호는 주차 내역에 없습니다.');
}else{ //3-2 아니면 
    let carlocation = locationArray[carIndex]; 
        console.log(`입력한 차량번호의 주차 위치 : ${carlocation}`);
}
*/

/* 복습예제2 : 틱택토/삼목 게임
    9칸이 존재하고 연속된 3칸 만들면 승리
    -설계 : 9칸 판넬 필요, 9칸 배열 생성
    판넬 상태 : B(비어있는상태) O(플레이어1) X(플에이어2)
    승리 체크 
    (연속된 판넬의 3개의 모양이 같을경우 B제외)
    - 가로로이기는수 : [0]==[1]==[2],[3]==[4]==[5],[6]==[7]==[8] 
    - 세로로이기는수 : [0]==[3]==[6],[1]==[4]==[7],[2]==[5]==[8] 
    -대각선으로 이기는수 : [0]==[4]==[8],[2]==[4]==[6]

*/

//1. 9판 배열
let gamepane = ['b','b','b','b','b','b','b','b','b']
//2. 9칸 배열 출력
let html = ` ${gamepane[0]}  ${gamepane[1]} ${gamepane[2]}<br/>
             ${gamepane[3]}  ${gamepane[4]} ${gamepane[5]}<br/>
             ${gamepane[6]}  ${gamepane[7]} ${gamepane[8]}
             `

//3 . 구성된 html 출력
document.querySelector('#gamepane').innerHTML=html;

// --p1 입력받고  2. 승리 체크 3. p2입력받고 4.승리체크 이후 반복(무승부)

for(let i = 0; i<=6; i+=3){
    if(gamepane[i] == gamepane[i+1] && gamepane[i+1] == gamepane[i+2] ){}
}


for(let i = 0; i<=2; i++){
    if(gamepane[i] == gamepane[i+3] && gamepane[i+3] == gamepane[i+6] ){}
}

if(gamepane[0] == gamepane[4] && gamepane[4] == gamepane[8] ){}
if(gamepane[2] == gamepane[4] && gamepane[4] == gamepane[6] ){}

if(gamepane.indexOf('b') == -1){}

