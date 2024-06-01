/*
실습 1 : 회원가입 , 로그인 구현 
조건 객체x : 아이디와 비밀번호 입력받아 회원가입 처리
아이디와 비밀번호가 기존 데이터의 존재 했을때로그인 성공 아니면 실패

[개발순서도]
1. 메모리구성 

요구사항 분석
1. 회원가입 : 저장C
2. 로그인 : 기존데이터와 비교 R , 논리
(백엔드)
1. 메모리 구성
 아이디와 비밀번호를 저장하는 저장소필요
let idlist = []
let pwlist = []
전역변수

2. 기능 / 서비스 구성 , 함수구현
 1. 회원가입 처리 == 함수 
-sigup
[로직 순서도]
1. 아이디/비밀번호 입력받는다. (입력장치 : HTML)
2. 입력받은 데이터를 각 배열에 저장한다
3. 안내 메시지

 2. 로그인 처리 == 함수]
- login
[로직순서도]
1. 아이디 비밀번호 입력받는다
2. 입력받은 데이터를 각 배열내 존재하는지 비교
3. 안내메세지


(프론트엔드)
1 회원가입 창
 1. 아이디 input 비번 input
 2. 회원가입 처리 button
 
2 로그인 창 
 1. 각페이지 꾸미기


(백엔드 / 프론트엔드 연동)
각 button에 JS함수 연동

*/

//1. 메모리구성
let idlist = [] //let/const 이용한 변수상수 선언 키워드
let pwlist = [] //변수/상수가 저장할수 있는 데이터 타입 : 문자숫자논리[]함수
//변수/상수의 유효범위 : 1.전역변수 2.지역변수 : 특정{}안에서 선언된 변수/상수는 {}밖에서 호출될수없다

//2. 함수 구성
function signup(){ console.log(signup)
//2-1
let signupId = document.querySelector('#signupId'); console.log(signupId)
let signupPw = document.querySelector('#signupPw'); console.log(signupPw)
// 2-2
let id = signupId.value;
let pw = signupPw.value;

// 2-3 입력받은 데이터를 각 배열에 저장
idlist.push(id);
pwlist.push(pw);
//3-4 안내메세지
alert('회원가입 성공');
}

//2. 함수구성
function login(){
    //2-1
    let loginId = document.querySelector('#loginId');
    let loginPw = document.querySelector('#loginPw');
    //2-2
    let id = loginId.value;
    let pw = loginPw.value;
    //3-3. 비교
    //3-1 아이디가 기존 배열내 존재하는지
    let index = idlist.indexOf(id);
    if(index != -1){
        //3-2 아이디가 존재하면 패스워드 검증
        //만약에 아이디가 위치한 인덱스의 패스워드도
        //위치한 인덱스 패스워드가 입력받은패스워드 같으며
        if(pwlist[index] == pw){
            alert('로그인성공');
        }
        else{
            alert('패스워드가 다릅니다.')
        }
    }else{
        alert('없는 아이디 입니다.')
    }

}

