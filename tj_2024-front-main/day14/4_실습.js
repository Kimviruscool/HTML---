let car =[
    {번호 : "50어2453", 시간 :"15:57"},
    {번호 : "64고1587", 시간 :"15:58"},
    "","","","","","","","","","","","","","","","","",""
];
_update();

function _in(x){
    let carnum = document.querySelector('#carnum').value
    let date = new Date() ; 
    let currenthour = date.getHours();
    let currentminute = date.getMinutes();
    date = `${currenthour}:${currentminute}`
    let board={번호 : carnum, 시간 : date};
    console.log(board);
    
    if(_check(x)){alert('주차실패'); return;}
    else{alert('주차성공');}

    car[x]=board;
    _update();
    console.log(car[x]);
}

function _out(){
    let carnum = document.querySelector('#carnum').value
    let outdate = new Date();
    for(i=0; i<=19; i++){
    
        let incar = car[i].번호; console.log(incar);

        if(incar==carnum){

            let indate = car[i].시간;
                
            let outhour = outdate.getHours();
            let outmin = outdate.getMinutes();

            let indateH = indate.split(":")[0];
            let indateM = indate.split(":")[1];

            let money = ((outhour*60+outmin*1)-(indateH*60+indateM*1))*100;
            
            
            if(carnum == car[i].번호){alert(`${i}번째에 있습니다.요금은 ${money}원입니다.`)}


            car[i]=''
            console.log(car);
            _update();
            return;

        }
    
    }
    alert('차량이 없습니다.')
    


}

function _check(x){
    

    if( `` == car[x]){ 
        return false;  
      }return true;
      
}

/*function _money(x){
    let money = document.querySelector('#money').value

    let date = new Date() ; 
    let currenthour = date.getHours();
    let currentminute = date.getMinutes();
    date = `${currenthour}:${currentminute}`
    let board=`${carnum},${date}`; 



}*/
function _update(){
    let parking = document.querySelector('#parking')
    let html = ``
    for( let i=0; i<=19; i++){
        let board=car[i]
        if(board==''){html+=`<div onclick="_in(${i})" id="carout"></div>`
    }
    else{html+=`<div onclick="_in(${i})" id="carin"></div>`}

}
    parking.innerHTML = html;
}