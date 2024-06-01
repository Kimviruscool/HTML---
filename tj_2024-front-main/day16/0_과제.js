let idlist = [
    {ino : 1,아이디 : 'aaa'},
    {ino : 2,아이디 : 'bbb'}
]

let pwlist = [
    {pno : 1, 비밀번호 : 1234, ino : 1},
    {pno : 2, 비밀번호 : 4567, ino : 2}
]

let i = 2;
let p = 2;

function signup(){
    let signupid = document.querySelector('#signupid').value;
    let signuppw = document.querySelector('#signuppw').value;

    let addid = {ino : i++, 아이디 : `${signupid}`}
    let addpw = {pno : p++, 비밀번호 : `${signuppw}` , ino : i++}

    let id = addid;
    let pw = addpw;

    idlist.push(id);
    pwlist.push(pw);

    alert('회원가입 되었습니다.')
    console.log(idlist);
}

function login(){
    let loginid = document.querySelector('#loginid').value;
    let loginpw = document.querySelector('#loginpw').value;

    let id = loginid;
    let pw = loginpw;

    for(i=0;i<idlist.length;i++){
        if(id==idlist[i].아이디){
            if(pw==pwlist[i].비밀번호){
                alert('로그인 성공'); return;
            }else{
                alert('패스워드가 다릅니다.'); return;
            } 
        } 
    } 
    alert('없는아이디입니다.')
    
}