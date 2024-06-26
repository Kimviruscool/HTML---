/*
1. 제품 : { 제품번호 : , 제품명: , 가격:}
2. 주문 : {주문번호 : ,주문시간 : , 제품번호:  }

생활속에서 연습
쪼갤수있을만큼 쪼개라 ex)자동주문 '자동'-'주문'

*/

//제품 샘플 (샘플 있으면 선 출력)
let 제품목록 = [
    {제품번호 : 1, 제품명 : '코카콜라', 가격 : 1000,},
    {제품번호 : 2, 제품명 : '사이다', 가격 : 2500,},
    {제품번호 : 3, 제품명 : '아메리카노', 가격 : 1800,}
]
//1번 
function 제품등록() {
    //----------------localstorage 호출------------------------------------------
    데이터최신화(2);
    
    //1. 입력받은 값을 가져온다.
    let 제품명 = document.querySelector('#제품명').value;
    let 가격 = document.querySelector('#가격').value;
    //2. 데이터를 가공(객체화)
    
    let 제품번호 = 제품목록.length != 0 ? 제품목록[제품목록.length-1].제품번호+1 : 1;//현재 제품목록의 마지막 제품번호의  +1, 길이는 1부터 / 인덱스 0부터 / 끝 인덱스 : length -1
    
    let 제품 = {제품번호 : 제품번호, 제품명: 제품명, 가격 : 가격};
    //3. [유효성검사]
    //4. 가공된 데이터(객체)를(배열에) 저장한다.
    제품목록.push(제품);

    //----------------- localstorage 저장 ---------------------------------
    데이터최신화(1);

    alert('제품등록 성공')
    제품출력();
}

//2. 제품출력 함수 : 1. JS가 열렸을때 2. 제품상태가 업데이트 되었을때(수정/삭제/추가)

제품출력();
console.log(제품목록);
function 제품출력() { 
    
       //----------------localstorage 호출------------------------------------------
       데이터최신화(2);
    //어디에
    let 제품출력구역 = document.querySelector('#제품출력구역');
    //무엇을
    let html = ``;

    for(let i = 0; i < 제품목록.length; i++){
        html += `<tr>
                <td> ${제품목록[i].제품번호}</td>
                <td> ${제품목록[i].제품명}</td>
                <td> ${제품목록[i].가격}</td>
                <td> <button onclick="주문등록( ${제품목록[i].제품번호} )"> 주문</button></td>
                </tr>`
    } 
    //출력
    제품출력구역.innerHTML = html;
}

let 주문목록 = [
    {주문번호 : 1, 주문일자 : '2024-05-30 17:00', 제품번호 : 2},
    {주문번호 : 2, 주문일자 : '2024-05-30 17:51', 제품번호 : 2}
]

//3. 주문 : 1.주문버튼을 클릭했을때.
function 주문등록(제품번호){ console.log('주문등록()'+제품번호);

       //----------------localstorage 호출------------------------------------------
       데이터최신화(4);
    //1.
    //2. 데이터 가공 (객체화 : 저장 어떻게(형식)으로 저장할지 구성)
    let 주문번호 = 주문목록.length-1 >= 0 ? 주문목록[주문목록.length-1].주문번호+1 : 1; //마지막 주문번호에 +1, 마지막주문번호 = 마지막인덱스의주문번호 = 배열.length-1
    let date = new Date();
    let 주문일자 = `${date.getFullYear()}-${자릿수변환(date.getMonth()+1)}-${자릿수변환(date.getDate())} ${자릿수변환(date.getHours())}:${자릿수변환(date.getMinutes())}`;
    
    let 주문 = {주문번호 : 주문번호, 주문일자 : 주문일자 , 제품번호: 제품번호};
    //3. 유효성검사 (패스)
    //4. 저장
    주문목록.push(주문);
    // alert('성공'); console.log(주문목록);

       //----------------localstorage 저장------------------------------------------
       데이터최신화(3);

    주문출력();
}

//*날짜/숫자 2자리 변환 함수
function 자릿수변환(변환할값) {
    //만약에 월/일/시/분 이 매개변수(변환할값) 가 10보다 작으면 앞에 '0'연결하기
    if(변환할값<10){변환할값 = '0'+변환할값;}
    //반환
    return 변환할값;
}
//4번
주문출력();
function 주문출력() { console.log('주문출력()');

       //----------------localstorage 호출------------------------------------------
       데이터최신화(4);
    //1.
    let 주문출력구역 = document.querySelector('#주문출력구역');

    //2.
    let html = ``;

    for(let i = 0; i <주문목록.length; i++){
        html += `<tr>
                  <td>${주문목록[i].주문번호}</td> 
                  <td>${제품조회(주문목록[i].제품번호).제품명}</td> 
                  <td>${제품조회(주문목록[i].제품번호).가격.toLocaleString()}</td> 
                  <td>${주문목록[i].주문일자}</td> 
                </tr>`
    }

    //3. 
    주문출력구역.innerHTML = html;
}



//*제품번호를 매개변수로 전달받고 해당 제품번호(매개변수)의 제품객체(정보:제품명,가격)를 찾아서 반환 해주는 함수
function 제품조회(제품번호) {
    //1. 매개변수로 찾을 제품의 제품번호를 받는다.
    //2. 해당 제품번호를 찾는다, 제품목록에서 하나씩 순회하면서 동일한 제품번호 찾기
    for(let i = 0 ; i < 제품목록.length; i++){
        //만약에 제품번호(매개변수) 와 i번째 제품목록내 i번째 제품의 번호와 일치하면
        if(제품번호 == 제품목록[i].제품번호){
            let 찾은제품 = 제품목록[i]; //i번째 객체를 호출해서
            return 찾은제품; //찾았으면 함수 종료 하고 찾은 객체를 (해당함수를 호출했던곳으로 )반환
        }
    } //for end

}

//5 실행조건 : 1.자동주문 버튼 클릭했을때
function 자동주문() { console.log('자동주문()');

    setInterval(()=>{
    //주문할 제품번호를 난수 생성 (현제 제품목록 존재하는 제품번호만, 제품번호 1 ~ 마지막 제품번호)
    //끝 제품번호 = 제품목록[제품목록.length-1].제품번호;

    let 끝제품번호 = 제품목록[제품목록.length-1].제품번호; //2
    //난수 생성
    let 제품번호 = parseInt((Math.random()*끝제품번호)+1); //(Math.random()*끝번호) + 시작번호
    //Math.random() : 0~1미만의 실수
    //Math.random()+1 : 1~2미만의 실수
    //Math.random()+1*10 : 10 ~ 11미만의실수
    //(Math.raondom()*10)+1 : 1 ~ 11미만
    //(Math.raondom()*2)+1 : 1 ~ 3미만
    //parseInt(실수) : 실수를 정수 반환

    //특정 주기마다 함수를 실행해주는 라이브러리함수
    
    //난수 생성후 주문등록 함수 호출
    //난수를 특정 주기마다 생성
    주문등록(제품번호);},3000);
    
}

//6. localstorage() : JS메모리가 아닌 브라우저(크롬/프로그램) 메모리에 저장 ,setItem(key , value) 저장 / getItem(key) 출력
//1. 제품등록 2. 제품출력 3. 주문등록 4. 주문출력 
//setItem : 1(제품목록)                 3(주문목록)     
//getItem : 1           2(제품목록)     3(주문목록)     4(주문목록)
function 데이터최신화(처리번호) {
    //===============제품목록===========================================
    if(처리번호 == 1){
    //1. 저장 localStorage.setItem(key , value); stringfy는 내부에
    localStorage.setItem('productList', JSON.stringify(제품목록));
    }else if(처리번호 == 2){
    //2. 호출 localStorage.setItem(key); parse는 외부에
    제품목록 = JSON.parse(localStorage.getItem('productList'));
    if(제품목록 == null){제품목록 = []}
    //==============주문목록============================================
    }else if(처리번호 == 3){
    localStorage.setItem('orderList', JSON.stringify( 주문목록 ));
    }else if(처리번호 ==4) {
    주문목록 = JSON.parse(localStorage.getItem('orderList'));
    if(주문목록 == null){주문목록 = []}
    }else
    {
        alert('데이터 최신화 오류');
    }
    
}

//6-1 : 제품목록을 브라우저의 locaclstorage 저장
//6-2 : 제품목록을 브라우저의 locaclstorage 호출
//6-3 : 주문목록을 브라우저의 locaclstorage 저장
//6-4 : 주문목록을 브라우저의 locaclstorage 호출