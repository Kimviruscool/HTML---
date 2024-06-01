
let 일정 = [ '밥먹기','공부하기','집가기'];
let 상태 = [ 'o' , 'x' , 'x'];

// 등록

print();

function add(){

    let listInput = document.querySelector('#listInput');
    let list = listInput.value;

    일정.push(list);
    상태.push('o')
    
    print();
}


function remove(deleteIndex){

    일정.splice(deleteIndex,1);
    print();
}



function ch( updateIndex ){
   
    if( 상태[updateIndex] == 'o') {
        상태[updateIndex] = 'x'
    }else{
        상태[updateIndex] = 'o'
    }
    print();
}


function print(){

    let box = document.querySelector('#box')
    html = '';
    
    for(let i = 0; i < 일정.length ; i++){
        // 각 i번째 인덱스 항목 정보를 각 호출
        let currentlist = 일정 [i];
        
        if( 상태[i] == 'o') {
            html += `
            <div class="whiteBox">
                <div>${currentlist} </div>
                <button onclick="ch(${i})">변경</button>
                <button onclick="remove(${i})">삭제</button>
            </div>`;
        }else{
            html += `
            <div class="blackBox">
                <div>${currentlist} </div>
                <button onclick="ch(${i})">변경</button>
                <button onclick="remove(${i})">삭제</button>
            </div>`;
        }



       
    }  
       box.innerHTML = html;
}
