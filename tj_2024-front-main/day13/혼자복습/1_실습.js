let boardlist = ["제목입니다, 내용입니다, 1234,2024-05-24,3",
                 "두번째제목이야,또내입입니다,4567,2024-05-23,0"]

//1. 기능구성

//1. 등록함수 실행조건 : 
function _create(){
    //1. 입력받을것 받아오기
    let title = document.querySelector('#titleInput').value;
    let content = document.querySelector('#contentInput').value;
    let password = document.querySelector('#passwordInput').value;
    //2. 입력받지 않은 데이터 초기화
    let date = new Date(); //new date() : 현재 날짜를 반환해주는 클래스
    console.log(date);
    console.log(date.getFullYear() ); //연도만 출력
    console.log(date.getMonth() ); //월만 출력
    console.log(date.getDate() ); //일만 출력

    console.log(date.getHours() ); //시만 출력
    console.log(date.getMinutes() ); //분만 출력
    console.log(date.getSeconds() ); //초만 출력

    let currentyear = date.getFullYear();
    let currentmonth = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
    let currentday = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
    date = `${currentyear}-${currentmonth}-${currentday}` //날짜 구성

    let view = 0; //처음 등록시 조회수는 0부터 시작
    //3. ,쉼표 구분해서 하나의 문자열로 만들자.
    let board = `${title},${content},${password},${date},${view}`; console.log(board);
    //4. 배열등록
    boardlist.push(board); console.log(boardlist);
    //5. 등록성공
    alert('등록성공');
    _allread(); //등록성공시 전체출력 함수 호출 
}

//2. 전체출력 : 실행조건 : 페이지가 열렸을때(HTML이 실행됐을때 = JS실행) 데이터가 변화(수정/삭제)가 있을때
_allread();
function _allread(){
    //1. 어디에
    let tablebody = document.querySelector('#tablebody');

    //2. 무엇을
    let html ='';
    for(let i = 0; i<boardlist.length; i++){ //배열 순회; 0번 인덱스부터 마지막인덱스 까지
        // i번째 게시물 반환
        let board = boardlist[i];
        //게시물 정보 분류 : 특정 문자 기준으로 분류 .split
        let boardArray = board.split(',');
        //,쉼표 기준으로 각 분류된 배열 게시물 정보
        console.log(boardArray[0]);console.log(boardArray[3]);console.log(boardArray[4]);
        
        html += `<tr>
        <td>${i}</td>
        <td onclick="raed()">${boardArray[0]}</td> 
        <td>${boardArray[3]}</td>
        <td>${boardArray[4]}</td>
        </tr>`
    }

    //3. 출력/대입
    tablebody.innerHTML = html;
    console.log(html);
}

//3.
function _read(index){}
let boardArray = boardlist[index].split(','); //해당 인덱스의 
let viewpage = document.querySelector('#viewpage');
let html = `<h3>상세 페이지</h3>
            <div>${boardArray[0]}</div>
            <div>
             <span>조회수 : ${boardArray[4]}</span> 
             <span>작성일 : ${boardArray[3]}</span>
            </div>
            <div>${boardArray[1]}</div>
            <button>수정</button>
            <button>삭제</button>`;
viewpage.innerHTML.html;
//4.
function _update(){}
//5.
function _delete(){}