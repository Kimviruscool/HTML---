/*
localstorage 활용
방문록 : 1. 방문내용 2. 작성일

- storage 의 경우 browser(브라우저)에 저장 (외부적인 요소)
외부에 저장할때는 getitem 넣기 setitem 가져오기
*/

let 방문목록 = [    ]

출력함수();
function 출력함수(){
    
    //- 먼저 기존에 localstorage있는 데이터 가져오기
    JSON.parse(localStorage.getItem('방문목록'));
    if(방문목록 == null) return;
    
    //1.
    let 출력구역 = document.querySelector('#출력구역');
    //2. 
    let html = ``;

    for(let i = 0; i < 방문목록.length; i++){
        html += `<div> ${방문목록[i].내용} / ${방문목록[i].작성일}</div>`
    } 
    //3. 
    출력구역.innerHTML = html;

}

function 등록함수(){
    let 내용 = document.querySelector('#내용').value;

    let date = new Date();
    let 작성일 = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    let 방문 = {내용 : 내용, 작성일 : 작성일};

    console.log(localStorage.getItem('방문목록'))
    방문목록 = JSON.parse(localStorage.getItem('방문목록'));
    console.log(방문목록);
    if(방문목록 == null){방문목록 = [];}

    방문목록.push(방문);
    
    localStorage.setItem('방문목록', JSON.stringify(방문목록));

    출력함수();
}

