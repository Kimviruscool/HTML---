let LIST = [
    {no : 1, 일정 : '1교시수업듣기', 상태 : 'o'},
    {no : 2, 일정 : '밥먹기', 상태 : 'o'},
    {no : 3, 일정 : '공부하기', 상태 : 'o'}
]

a=4;

print();

function print(){
    let box = document.querySelector('#box')
    let html = '';
    for(i=0;i<LIST.length;i++){

        if(LIST[i].상태 == 'o'){
            html += `
            <div class="blackBox">
                <div>${LIST[i].일정} </div>
                <button onclick="change(${i})">변경</button>
                <button onclick="remove(${i})">삭제</button>
            </div>`;
        }else{
            html += `
            <div class="WhiteBox">
                <div>${LIST[i].일정} </div>
                <button onclick="change(${i})">변경</button>
                <button onclick="remove(${i})">삭제</button>
            </div>`;
        }
    }
    box.innerHTML = html;
}

function add(){
    let listInput = document.querySelector('#listInput').value;
    let added = {no : a++, 일정 : `${listInput}`, 상태 : 'o'}
    LIST.push(added);
    console.log(LIST)
    alert('일정추가');
    print();
}

function remove(deleteIndex){
    LIST.splice(deleteIndex,1);
    print();
}

function change(updateIndex){
    if( LIST[updateIndex].상태 == 'o') {
        LIST[updateIndex].상태 = 'x'
    }else{
        LIST[updateIndex].상태 = 'o'
    }
    print();
}