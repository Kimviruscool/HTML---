let category =[
    {no : 1, 카테고리명 : `커피`, 가격 : `2000`},
    {no : 2, 카테고리명 : `티`, 가격 : `2500`},
    {no : 3, 카테고리명 : `에이드`, 가격 : `3000`},
    {no : 4, 카테고리명 : `스무디`, 가격 : `4000`}
];

let menu =[
    {mno : 1, 메뉴명 : `연유라떼`, no : 1},
    {mno : 2, 메뉴명 : `할메가커피`, no : 1},
    {mno : 3, 메뉴명 : `아메리카노`, no : 1},
    {mno : 4, 메뉴명 : `아이스티`, no : 2},
    {mno : 5, 메뉴명 : `녹차`, no : 2},
    {mno : 6, 메뉴명 : `유자차`, no : 2},
    {mno : 7, 메뉴명 : `레몬에이드`, no : 3},
    {mno : 8, 메뉴명 : `자몽에이드`, no : 3},
    {mno : 9, 메뉴명 : `청포도에이드`, no : 3},
    {mno : 10, 메뉴명 : `민트스무디`, no : 4},
    {mno : 11, 메뉴명 : `초코스무디`, no : 4},
    {mno : 12, 메뉴명 : `딸기스무디`, no : 4}
];

let cart = [
    {mno : 2, 사이즈 : `M`},
    {mno : 6, 사이즈 : `L`},
    {mno : 9, 사이즈 : `L`},
    {mno : 12, 사이즈 : `M`}
];

let a=5;
let b = 13;


function _create(){
    let 카테고리 = document.querySelector('#카테고리');
    let html = ``;
    for(let i=0; i<category.length; i++){
        html += `<div onclick="_menu(${i+1})"> ${category[i].카테고리명} </div>`
    }
     카테고리.innerHTML= html;
}
_create();

function _menu(index){   
    let 메뉴 = document.querySelector('#메뉴');
    let html = ``;
    for(let i=0; i<menu.length; i++){
        if(menu[i].no == index){
            html += `<div onclick="_cart(${i+1})"> ${menu[i].메뉴명} </div>`
        }
    }
    메뉴.innerHTML= html;
}

function _cart(index){
    let 장바구니 = document.querySelector('#장바구니');
    let html = ``;
    let 사이즈 = prompt(`사이즈 입력 : `);
    for(let i=0; i<menu.length; i++){
        if(menu[i].mno == index){
            html += `<div> ${menu[i].메뉴명} ${사이즈}</div>`;
            orderSave = {mno : menu[i].mno, 사이즈 :`${사이즈}`};
            cart.push(orderSave);
            console.log(cart);
        }
    }
    장바구니.innerHTML+= html;
}   

function 등록1(){
   let 카테고리추가 =  document.querySelector('#카테고리추가').value;
   let html = '';
   
   let CTADD = {no : a++ , 카테고리명 : `${카테고리추가}`, 가격 : '6000'}

   category.push(CTADD);
   console.log(category);
   _create();
   
}

function 등록2(){
    let 메뉴추가 =  document.querySelector('#메뉴추가').value;
    let num = prompt(`카테고리 번호 입력 : `)*1;
    let MNADD = {mno : b++ , 메뉴명 : `${메뉴추가}`, no : num};

    menu.push(MNADD);
    console.log(menu);
    _menu();
}
// {no : 1, 카테고리명 : `커피`, 가격 : `2000`}