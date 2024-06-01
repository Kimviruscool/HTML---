//전역
let timerId = ``; //interval 저장하는 변수
let count = 0; //인터벌 실행 횟수 저장하는 변수

//시작함수
function start() {
    // setInterval(함수명 , 밀리초); 500 : 0.5 초마다 함수 설정
    timerId = setInterval(createImg,500);
}

//2. 이미지 생성하기
function createImg(){
    console.log('createImg()')

    let box = document.querySelector('#box')

    // +위치(top 0~470 , left 0~470) 난수 생성
    let top = parseInt(Math.random()*471); //Math.random()*471 : 0~471 난수 생성 
    //Math.random() : 0~1 사이의 실수 생성
    //parseInt(실수) : 소수점 없애고 정수 반환

    let left = parseInt(Math.random()*471);

    count++;

    let img = `<img id="img${count}" onclick="removeImg(${count})"
    style="top:${top}px;left:${left}px;"
    src="버섯.gif"/>`;

    box.innerHTML += img;

    //조건 종료
    //queryselectorall() : 여러개요소 vs querySelector : 한개의요소
    let imgList = document.querySelectorAll('#box > img');
    //만약에 imglist의 요소가 30개 이상이면
    if(imgList.length>30){alert('실패'); clearImg();}
}

//3. 이미지 제거함수
function removeImg(count) { console.log('removeImg()'+count)
//내가 클릭한(count) 이미지 요소 가져오기
    let clickImg = document.querySelector(`#img${count}`);
    console.log(clickImg);
    
    //2. 요소 제거하는 방법 [innerHTML 사용안함]
    //1. 제거할 요소의 부모 요소 호출
    let box = document.querySelector('#box');
    //2., 부묘요객체.removechild(자식요소객체)
    box.removeChild(clickImg);

}

//4. 인터벌 종료 함수
function clearImg() {
    clearInterval(timerId);
}