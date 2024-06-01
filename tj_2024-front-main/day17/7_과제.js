let orderAdd = [
    {제품 : '코카콜라',가격 : '1,000'},
    {제품 : '사이다',가격 : '2,500'},
    {제품 : '아메리카노',가격 : '1,800'}
]
let AutoOrdernow = [
    {주문번호 : 1, 제품 : '코카콜라',가격 : '1,000', 주문일 : '2024-05-30 17:00'},
    {주문번호 : 2, 제품 : '사이다',가격 : '2,500', 주문일 : '2024-05-30 17:54'},
    {주문번호 : 3, 제품 : '아메리카노',가격 : '1,800', 주문일 : '2024-05-30 17:39'}
]
let num = 0;

let time = 0;

let timeId;


print();

function add() {

    let order = document.querySelector('#order').value;
    let price = document.querySelector('#price').value;


    let menuadd = { 제품 : `${order}`, 가격 : `${price}`}

    let localData = JSON.parse(localStorage.getItem('localData'));
    console.log(localData);

    orderAdd.push(menuadd);
    console.log(orderAdd);


    localStorage.setItem('localData', JSON.stringify(orderAdd));

    alert('제품등록이 완료되었습니다.')
}
//================================================================================================
function print(){

      //어디에
      let tbody = document.querySelector('#tbody');

     orderAdd = JSON.parse(localStorage.getItem('orderAdd'));
     AutoOrdernow = JSON.parse(localStorage.getItem('AutoOrdernow'));

    //무엇을
    let html = ``;
    for(i = 0; i< AutoOrdernow.length; i++){
        html += `<tr> <td>${AutoOrdernow[i].주문번호}</td> 
                      <td>${AutoOrdernow[i].제품}</td> 
                      <td>${AutoOrdernow[i].가격}</td> 
                      <td>${AutoOrdernow[i].주문일}</td>
                </tr>`
    }

    //출력
    tbody.innerHTML = html;
}
//===========================================================================================
function autoorder(){

}