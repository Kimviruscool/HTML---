/*
    비회원제 게시판 
    day13 복습
    let boardList = ["제목입니다,내용입니다,1234,2024-05-24,3",
                 "두번째 제목,내용입니다,2345,2024-05-25,0"
                ];

    day14 복습
    게시물 정보 : 제목, 내용, 비밀번호, 날짜, 조회수
    게시물 객체 = {제목 : , 내용 : , 비밀번호 : , 날짜 : , 조회수 : ,}
                > 만일 게시물 객체가 여러개이면 배열을 사용하자.
    게시물 목록 = {게시물 객체, 게시물 객체, 게시물 객체}
                > 여러 객체들을 식별할 때 인덱스는 문제점이 있다. 인덱스는 절대인 식별자 역할을 못함
                > 게시물 번호를 만들어보자 = 삭제 / 수정되도 고정으로 사용하자.
*/

//  0.
let boardList = [
    {번호 : 1, 제목 : `제목입니다.`, 내용 : `내용입니다.`, 비밀번호:`1234`, 작성일 : `2024-05-24`, 조회수 : 3},
    {번호 : 2, 제목 : `두번째 제목`, 내용 : `또 내용입니다.`, 비밀번호:`2345`, 작성일 : `2024-05-25`, 조회수 : 0},
];  // 배열 선언 끝

//  식별번호 자동생성
let autoNum=2;

//  1. 등록
function _create(){
    let title = document.querySelector(`#titleInput`).value;
    let content = document.querySelector(`#contentInput`).value;
    let password = document.querySelector(`#passwordInput`).value;
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1);
    let currentDay = date.getDate() < 10 ? "0"+(date.getDate()) : date.getDate();
    date = `${currentYear}-${currentMonth}-${currentDay}`;
    let view = 0;

    // * "," 구분이 아닌 객체형식으로 만들자.
    let board = {번호 : ++autoNum, 제목 : title, 내용 : content, 비밀번호 : password, 작성일 : date, 조회수 : view};

    boardList.push(board);
    alert(` 등록 성공 `);
    _allRead();
}

//  2. 출력
_allRead();
function _allRead(){
    let tableBody = document.querySelector(`#tableBody`);
    html = ``;
    for(i=0; i<boardList.length; i++){
        html +=`<tr>
                    <td>
                        ${boardList[i].번호}
                    </td>
                    <td onclick="_read(${boardList[i].번호})">
                        ${boardList[i].제목}
                    </td>
                    <td>
                        ${boardList[i].작성일}
                    </td>
                    <td>
                        ${boardList[i].조회수}
                    </td>
                </tr>
                `; 
    }
    tableBody.innerHTML=html;
}

//  3. 상세 페이지 출력 / 출력개별 출력 실행 조건 : 1. 제목을 클릭했을 때
function _read(번호){ console.log(`내가 클릭한 게시물 번호 : ${번호}`);
    // 1. 어디에
    let viewPage = document.querySelector(`#viewPage`);

    let findIndex = findBoardIndex(번호);
    if(findIndex==-1) return;
    let board = boardList[findIndex];

    // 2. 무엇을
    let html = `<h3>
                    상세 페이지
                </h3>
                <div>
                    ${board.제목}
                </div>
                <div>
                    <span>
                        조회수 : ${board.조회수}
                    </span>
                    <span>
                        작성일 : ${board.작성일}
                    </span>
                </div>
                <div>
                    ${board.내용}
                </div>    
                <button type="button" onclick="_update(${board.번호})"> 수정 </button>
                <button type="button" onclick="_delete(${board.번호})"> 삭제 </button> 
                `;
    // 3. 출력
    viewPage.innerHTML=html;
}

//  4. 수정함수 / 실행 조건 > (누구를) 1. 수정 버튼 클릭할 때
function _update(번호){

    let findIndex = findBoardIndex(번호);   // 내가 선택한 게시물 번호를 findBoardIndex 함수에 매개변수로 전달하면 찾은 인덱스 반환 없으면 -1
    if(findIndex==-1) {return;}

    if(!(_pwConfirm(findIndex))){
        return;
    }
    //  배열 내 특정 데이터 수정
    //  > 해당 게시물 분류

    //  새로운 제목과 내용 입력 받음
    let uTitle = prompt(`수정할 제목 : `);
    let uContent = prompt(`수정할 내용 : `);

    //  찾은 인덱스의 객체 속성 내 값 수정
    boardList[findIndex].제목=uTitle;
    boardList[findIndex].내용=uContent;

    //  화면 새로고침(재출력 > 데이터의 변화가 있기 때문에 업데이트함)
    _allRead();
    _read(번호);
}

//  5. 삭제함수 / 실행 조건 > (누구를) 1. 삭제 버튼 클릭할 때
function _delete(번호){

    let findIndex = findBoardIndex(번호);
    if(findIndex==-1) return;

    if(!(_pwConfirm(findIndex))){
        return;
    }
    //  배열 내 특정 인덱스 삭제
    boardList.splice(findIndex,1);
    //  화면 새로고침(재출력 > 데이터의 변화가 있기 때문에 업데이트함)
    _allRead();
    document.querySelector(`#viewPage`).innerHTML = ``;
}

//  6. 게시물 번호를 이용한 특정 게시물의 인덱스를 찾아주는 함수
function findBoardIndex(번호){
    // 내가 클릭한 게시물 번호의 객체를 배열에서 찾자.
    let findIndex = -1; // 찾지 못함(인덱스가 없다는 뜻 : -1)을 기본값
    for(i=0; i<boardList.length; i++){
        // 만약에 배열 내 i번째 게시물의 번호와 내가 클릭한 번호가 같으면 findIndex에 대입하고 반복문 종료
        if(boardList[i].번호 == 번호){findIndex = i; return findIndex;}
    }
    // 찾았다 > findIndex = 0 이상의 게시물 객체의 인덱스, 만약 못 찾았다 > findIndex = -1
    return findIndex;
}

//  7. 패스워드 체크 함수
function _pwConfirm(번호){
    //  - 패스워드 검증
    //  1. 검증받을 패스워드를 입력 받는다.
    let confirmPw = prompt(` 비밀번호 : `);
    //  2. 해당 인덱스의 비밀번호와 입력받은 비밀번호가 다르면 함수를 중간에 종료
    if(confirmPw != boardList[번호].비밀번호){
        alert(`패스워드가 다릅니다`);
        return false; // 패스워드 일치 실패, 함수 종료, 이하 코드는 실행이 안됨.
    }
    return true;    // 패스워드 일치 뜻
}