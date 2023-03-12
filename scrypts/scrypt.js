function addComments(form) {
    let date = form.addDate.value;
    let name = form.addName.value;
    let msg = form.addMsg.value;
    let newDiv = document.createElement('div');
    let alert = '';
    let outDate = '';
    newDiv.className = "comments";

    if (name == '' || msg == '') {
        alert = 'Поле является обязательным';
    }

    if (date == '') {
        date = new Date ();
        outDate = 'Сегодня в ' + date.toLocaleTimeString('ru-RU').slice(0,-3);
    }

    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
    date = new Date(date.valueOf())
    if (date < today - 86400000) {
        outDate = date.toLocaleString('ru-RU').slice(0,-3);
    } 
    else if (date < today) {
        outDate = 'Вчера в ' + date.toLocaleTimeString('ru-RU').slice(0,-3); 
    } 
    else{
        outDate = 'Сегодня в ' + date.toLocaleTimeString('ru-RU').slice(0,-3);
    }

    if (name == ''){
        document.getElementById('errName').innerText = alert;
        document.getElementById('errName').classList.add('errLabel');
        document.getElementById('addName').classList.add('errBox');
    }
    else if (name !== '') {
        document.getElementById('errName').innerText = '';
        document.getElementById('addName').classList.remove('errBox');
    }

    if (msg == ''){
        document.getElementById('errMsg').innerText = alert;
        document.getElementById('errMsg').classList.add('errLabel'); 
        document.getElementById('addMsg').classList.add('errBox');
        console.log('msg');
    }
    else if (msg !== '') {
        document.getElementById('errMsg').innerText = '';
        document.getElementById('addMsg').classList.remove('errBox');

    }

    if (alert == '') {
        newDiv.innerHTML = '<div><div>'+msg+'<div class="flexIcon"><div class="icon-heart-empty" onclick="like(this)"></div><div class="icon-trash-empty" onclick="delCom(this)"></div></div></div><div><div>'+name+'</div><div>'+outDate+'</div></div></div>';
        document.getElementById("commArea").append(newDiv);
        return false;
    }
    else{
        return false;
    }
   
}

function delCom(del) {
    del.parentNode.parentNode.parentNode.parentNode.remove();
}

function like(lk) {
    if (lk.classList.contains('like')){
        lk.classList.remove('like');
        lk.classList.remove('icon-heart');
        lk.classList.add('icon-heart-empty')
    }
    else{
        lk.classList.remove('icon-heart-empty');
        lk.classList.add('icon-heart');
        lk.classList.add('like');
    }
}
