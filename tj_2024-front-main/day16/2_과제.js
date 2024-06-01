// 1. new Date() : 현재 날짜/시간 객체 반환
console.log(new Date);
//4. 사용자 정의 날짜 
console.log(new Date(2024,4,20))
//5. 말일
console.log(new Date(2024,5,0))
// ====================================== 모든 함수에서 사용할 변수 : 전역변수 =======================

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth()+1; 

//2.객체1개 <--> 일정1개 배열1개 <==> 여러개객체
let contentList = [
    {content : '학원개강', date : '2024-5-17', color : 'blue'},
    {content : '은행업무', date : '2024-5-11', color : 'purple'},
    {content : '은행털기', date : '2024-5-31', color : 'red'}
]
//==================================================================================
calPrint();
function calPrint(){ //js열렸을때
    // 어디에
    let 어디에 = document.querySelector('#calTop> h5'); console.log(어디에);
    // 무엇을
    let 무엇을 = `${year}년 ${month}월`;
    // 출력
    어디에.innerHTML=무엇을;

    //=============================================================//
    //1. 어디에
    let calendar = document.querySelector('#calendar')
    //2. 무엇을 202405 기준 31일이니까 31개 div반복
    let html = `<div id="red">일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div id="blue">토</div>`;

    let date = new Date(year, month, 0); //2024-04-30
    let endDay = date.getDate();
    //2. year , month 변수에 저장된 날짜의 1일 요일 구하기 (1일 요일 앞에 공백) 

    //* 1일 요일 앞에 공백 출력 반복문
    let date2 = new Date(year, month-1, 1); //2024-05-01 
    let startweek = date2.getDay(); console.log(startweek); //0일요일 1월 2화 3수 ~~~ 6 토
    //* 1일의 요일 까지 공백 출력 반복문
    for(let b= 1; b <= startweek; b++){
        html += '<div></div>'
    }

    // *1일부터 말일까지 일수 출력 반복문 
    for(let day = 1; day<= endDay; day++){

        //*현재 반복되고 있는 날짜의 형식(년-월-일) 만들기
        let date3 = `${year}-${month}-${day}`;
        
        let dayhtml =``;

        for(let i = 0; i<contentList.length;i++){

        if(contentList[i].date == date3){
            dayhtml += `<div style="background-color : ${ contentList[i].color}">
                        ${contentList[i].content}
                        </div>`
        }
        } //for2 end

    html += `<div onclick="add(${day})">${day} ${dayhtml}}</div>`
    }
    //3. 출력
    calendar.innerHTML=html;
    console.log(contentList)
}

//2. 월 변경함수 : 실행조건 : 화살표 클릭했을때
function monthchange(매개변수){
if(매개변수 == '이전'){
    month = month -1; if(month == 0){month =12; year}
} else if(매개변수 == '다음'){
    month = month +1; if(month == 13){month = 1; year = year +1; }
}
calPrint();
}

function add(index){
    let 기록 = document.querySelector('#기록').value;
    let 색 = document.querySelector('#색').value;
    let date4 = `${year}-${month}-${index}`

    let addd = {content : `${기록}`, date : `${date4}`, color : `${색}`}

    contentList.push(addd);

    calPrint();
}
