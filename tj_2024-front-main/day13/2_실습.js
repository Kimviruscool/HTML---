let car =["50어2453,15:57","64고1587,15:58","","","","","","","","","","","","","","","","","",""]
_update();

function _in(x){
    let carnum = document.querySelector('#carnum').value
    let date = new Date() ; 
    let currenthour = date.getHours();
    let currentminute = date.getMinutes();
    date = `${currenthour}:${currentminute}`
    let board=`${carnum},${date}`; 
    
    if(_check(x)){alert('주차성공'); }
    else{alert('주차실패')}

    car[x]=board;
    _update();
}

function _out(){
    let carnum = document.querySelector('#carnum').value
    let outdate = new Date();
    let indate=''
    for(i=0; i<=19; i++){
    
        let incar = car[i].split(',')[0];

        if(incar==carnum){

            let indate = car[i].split(',')[1];
                
            let outhour = outdate.getHours();
            let outmin = outdate.getMinutes();

            let indateH = indate.split(":")[0];
            let indateM = indate.split(":")[1];

            let money = ((outhour*60+outmin*1)-(indateH*60+indateM*1))*100;
            
            
            if(carnum == car[i].split(',')[0]){alert(`${i}번째에 있습니다.요금은 ${money}원입니다.`)}


            car[i]=''
            console.log(car);
            _update();
            return;

        }
    
    }
    alert('차량이 없습니다.')
    


}

function _check(x){
    

    let carnum = document.querySelector('#carnum').value

    console.log( carnum )
    console.log( car[x].split(',')[0] )


    if( "" == car[x].split(',')[0]){ 

        return true;  
      }return false;
      
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
        let boardArray=board.split(','); console.log(boardArray[0]);
        if(boardArray[0]==''){html+=`<div onclick="_in(${i})" id="carout"></div>`
    }
    else{html+=`<div onclick="_in(${i})" id="carin"></div>`}

}
    parking.innerHTML = html;
}