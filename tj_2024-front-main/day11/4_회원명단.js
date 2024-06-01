// console.log('JS실행');

// //1. 함수 선언
// //function 등록(){}

// //2.(클릭)이벤트 함수 호출 하는데 확인 작업
// // function 등록(){console.log('등록()');}

// //3. 로직(함수안에서 처리할 코드) 작성 (무엇을 한건지)
// const namelist = []

// function 등록(){ console.log('등록()');
//     //1.HTML INPUT에 입력된 값을 가져온다. [입력]
//     let input = document.querySelector('#name');    console.log(input);
//     // HTML <input />을 JSrorcp(코드)로 가져오기
//     let name = input.value;     console.log(name);
//     //value속성의 입력된 값을 name변수에 반환한다.

//     //2. 입력받은 값을 배열에 저장한다. *배열내 데이터 전역 [처리/저장]
//     namelist.push(name); console.log(namelist);

//     출력();

//     //3. 배열내 데이터를 HTML table에 출력한다. [출력]
//     //[3-1 어디에]
//     // let nametable = document.querySelector('#nametable');
//     // //[3-2 무엇을]
//     // let html =  `<tr> <td> 번호</td> <td>이름</td> </tr>` //제목
//     // //0부터 마지막 인덱스 까지 1씩 증가 반복
//     // for(let i = 0; i < namelist.length; i++){
//     //     // -배열내 i번째 회원명을 문자열템플릿 ${} 을 이용한 HTML 문자열대입
//     //     html += `<tr> <td> ${i+1}}</td> <td> ${namelist[i]} </td> </tr>`
//     // }; console.log(html);
//     // //[3-3 출력] 
//     // nametable.innerHTML = html;

//     //input 초기화
//     input.value =''
// } 

// function 삭제(){console.log('삭제()');
// //1. 입력 
// let name = document.querySelector('#name').value; console.log(name);
// //2. 처리
// let deleteIndex = namelist.indexOf(name);        console.log(deleteIndex);
// namelist.splice(deleteIndex, 1);                console.log(namelist);
// //3. [출력]
// 출력();
// }

// function 출력() {
//     //3. 출력
// //3. 배열내 데이터를 HTML table에 출력한다. [출력]
//     //[3-1 어디에]
//     let nametable = document.querySelector('#nametable');
//     //[3-2 무엇을]
//     let html =  `<tr> <td> 번호</td> <td>이름</td> </tr>` //제목
//     //0부터 마지막 인덱스 까지 1씩 증가 반복
//     for(let i = 0; i < namelist.length; i++){
//         // -배열내 i번째 회원명을 문자열템플릿 ${} 을 이용한 HTML 문자열대입
//         html += `<tr>
//         <td> ${i+1}}</td>
//         <td> ${namelist[i]} </td> 
//         </tr>`
//     }; console.log(html);
//     //[3-3 출력] 
//     nametable.innerHTML = html;
    // }
    /*
    과제조건
    [등록시]
    1. 등록시 중복 제외
    2. 회원명은 3글자만 가능
    3. 회원명 숫자 제외
    [삭제시]
    1. 동일한 회원명이 있을때만 삭제
    */

    const memberlist = []

    function 등록(){                                    
        let input = document.querySelector('#name');       
        let name = input.value;                             
        if(memberlist.indexOf(name) != -1){alert('이미 등록된 이름 입니다.'); return;}
         else if(name.length != 3){ alert('3글자만 입력해 주세요.'); return;}
         else if(!isNaN(name[0])||!isNaN(name[1])||!isNaN(name[2])){alert('문자만 입력해 주세요.'); return;} 
         else{memberlist.push(name);}

        출력();
        input.value='' //초기화
    }
    
    function 삭제(){
        let name=document.querySelector('#name').value;
        let delindex = memberlist.indexOf( name );
        if(delindex != -1){memberlist.splice(delindex, 1);}
        else{alert('없는 회원 입니다.')}
        출력();
    }


    function 출력(){
        let nametable = document.querySelector('#nametable');
        let html = `<tr> <th> 번호 </th> <th> 이름 </th>  </tr>`
        for(let i = 0; i<memberlist.length; i++ ){
            html += `<tr>
                    <td> ${i+1} </td> 
                    <td> ${memberlist[i]} </td>  
            </tr>`
        }; console.log(html);

        nametable.innerHTML = html;
    }