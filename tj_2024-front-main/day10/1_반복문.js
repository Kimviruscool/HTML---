/*
JS제어문(반복문)
for문
- 조건충족일때 특정 범위내 코드를 반복 실행
-for형태
for(초기값; 조건문; 증감식){반복실행코드;}
1. 초기값: 반복을 할때 반복의 카운터/횟수 체크하는 변수의 처음값
2. 조건문 : 반복실행문이 실행되는 조건 이므로 true {} 실행 아니면 for 종료
3. 증감식 : 반복변수의 증가 혹은 감소 변화 연산식
반복변수 = 반복변수+1 / 반복변수 += 1 / 반복변수++
4. 실행코드 : 조건문이 true 일때 실행할 코드
-흐름 순서
1. 초기값 > 2.조건문 > 3.실행코드 > 4.증감식 > 
            5.조건문 > 6.실행코드 > 7.증감식 >
            8. 조건문 > 9. 실행문 > 10. 증감식 
            ----- 조건문에 false가 될때까지 반복
            ----  false 이면 for{} 탈출/종료 한다.

- 어디서부터 어디까지 몇씩 증가/감소 하면서 무엇을 실행하는지?

- 배열 과 반복문
배열의 인덱스는 순차적인 순서가 존재한다
1. 배열 순회(한바퀴 돔)
    -반복 변수를 index 처럼 사용.
    for(let index = 0; index < 배열변수.length; index++){};
2. 향상된 for문 
    1. for(let 반복변수 in 배열변수){} : 배열변수내 인덱스를 순차적으로 하나씩 반복변수에 대입 반복
    2. for(let 반복변수 of 배열변수){} : 배열변수내 데이터를 순차적으로 하나씩 반복변수에 대입 반복
3. 스트림 반복문 함수 : forEach , map(), fliter

-for 중첩
for(){
    for(){}
}

- 무한루프 / 종료없는 반복
for( ; ; ){} : 공백
while(ture){}
- 의미없는 반복은 메모리에 과부화
- 조건문(if) 와 break; 사용


- 반복문 키워드
1. break //가장 가까운 for문의 {}를 탈출/종료/끝내기
2. continue; // 가장 가까운 for문의 증감식으로 이동

*/
//1. 동일한 코드를 입력하기 위해서는 Ctrl c + Ctrl v하면 된다. 복붙한계가 있음

console.log('콜라 구매');
console.log('콜라 구매');
console.log('콜라 구매');
console.log('콜라 구매');
console.log('콜라 구매'); //5번 반복
//1부터 5까지 1씩 증가하며 '콜라 구매' 출력
for( let 반복변수 = 1 ; 반복변수 <= 5 ; 반복변수++ ){
console.log('콜라구매');
}

//2. 1~10 출력
for(let i=1 ; i <= 10 ; i++){console.log(i);}

//3. 1~10 숫자의 누적합계
//3-1 누적값 저장하는 변수는 1번만 선언해야 하므로 for 밖에 선언
let sum = 0;
for(let i=1 ; i <= 10 ; i++){
    console.log(i)
    sum = sum+i ; // sum += i
    console.log(sum);
}

//4. 1~100까지의 7배수만 누적 합계
let sum2 = 0;
for(let i = 1; i <= 100 ; i+=7)
    {sum2 += i;}
console.log(`sum : ${sum2}`);

//5. 반복문을 이용한 구구단 중에 2단 출력하시오 예) 2X1=2 ~~~ 2X9 = 18
console.log(`2 X 1 = 2`);
console.log(`2 X 2 = 4`);
console.log(`2 X 3 = 6`);
console.log(`2 X 4 = 8`);
console.log(`2 X 5 = 10`);
console.log(`2 X 6 = 12`);
console.log(`2 X 7 = 14`);
console.log(`2 X 8 = 16`);
console.log(`2 X 9 = 18`); // 곱 : 1부터 9까지 1씩 증가하면서 연산후 출력

for(let 곱 = 1; 곱 <= 9; 곱++){
    console.log(`2 X ${곱} = ${2*곱}`);
}

//6. 배열의 데이터 개수 3개 인덱스 : 0~2 
let 과일상자 = ['사과', '포도', '딸기'];
// 인덱스는 0부터 2까지 1씩증가. 
for(let index = 0; index <= 2; index++){console.log(과일상자[index]); }
//인덱스는 0부터 배열명.length -까지
for(let index = 0; index <= 과일상자.length-1;index++){console.log(과일상자[index]); }

//7.
for(let index in 과일상자){console.log(index);}
for(let 과일 of 과일상자){console.log(과일);}

//8. 반복문을 이용하여 <ol></ol>안에 <li> 학생명 <li> 하나씩 HTML에 출력하시오.
let studentlsit = ['유재석','강호동','신동엽'];

let html = ``;
for(let index = 0; index <= studentlsit.length-1; index++ ){
    html += `<li> ${studentlsit[index]} </li>`
    // = 대입 , += 누적합계
}
console.log(html);
document.querySelector('.studentlist').innerHTML = html;

//9. for문 중첩
for(let 부모 = 1; 부모<=5; 부모++){ //1부터 5까지 1씩증가반복 (5회전)
    console.log(`부모 : ${부모}`); 

    for(let 자식 = 1; 자식<=3; 자식++){ //1부터 3까지 1씩증가 반복 (3회전 * 부모5회전 = 15회전) 상위for한번당 하위for계속 실행
        console.log(`>>>자식 : ${자식}`);
    } //for2 end

} //for1 end

//10. 구구단 2단부터 9단까지
for(let 구구단=2; 구구단<=9; 구구단++){
    console.log(`구구단 : ${구구단}단`);

    for(let 곱 = 1; 곱 <=9; 곱++){
        console.log(`${구구단} X ${곱} = ${구구단*곱}`);
    } //for2 end
} //for1 end

//11. 무한 루프
// for(;;){console.log('무한반복');} 메모리 과부하의 오류발생

for(;;){
 //prompt , alert(알림창) , confirm 등등 몇몇 함수들은 입력/출력시 모든 코드실행 중지됨
let input = prompt('무한입력중 : ');
console.log(input);
if(input == 'X' || input == 'x'){break;}
} 

//12. break; 이용한 1부터 10까지 1씩 증가하면서 만일 5이면 반복문 종료
for(let i = 1; i <= 10; i++){
    if(i == 5){break;} //i가 20이면 반복문을 종료
    console.log(i);
}

//13. continue; 이용한 1부터 10까지 1씩 증가하면서 출력 만일 5이면 건너뛰기
for(let i = 1; i <= 10 ; i++){
    if(i == 5){continue;} //증감식으로 이동
    console.log(i); 
}

//14. 입력받은 데이터를 numArray 에 push추가 하기
//조건1 : 중복 입력은 가능하지만 중복은 저장 불가능
//조건2 : 배열의 중복없이 6개의 숫자가 등록되면 반복문이 종료
let numArray = []
//1. 총 6번을 입력받는다
for(let i = 1; i<=6; i++){
   let num = prompt(`${i}번째 의 수 입력`) //2. 입력받는다
   // ********** 중복 제외 ***********
   // 입력받은 숫자가 배열내 존재하면 for문 증감식으로 이동
    if(numArray.indexOf(num)>=0){
        alert('중복입니다. 다시입력');
        i--; //현재 반복변수의 카운터는 무효화/차감
        continue;} 
    //continue; 또는 break; 만나면 아래코드는 실행되지 않는다.
    numArray.push(num); //3. 배열 저장한다
    //무한루프시
    //if(numArray.length ==6){break;}
}
// 4. for문이 끝나고 배열 상태 출력
console.log(numArray)