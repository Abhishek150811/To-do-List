const inputbox = document.getElementById('input-box') ;
const list = document.getElementById('list') ;
const button = document.querySelector('.text-field button'); 
button.addEventListener('click', addTask) ;
list.addEventListener('click' , func, false) ;

function addTask(event){
    text = inputbox.value ; 
    if(text == ''){
        alert("You must write something") ;
    }
    else{
        var li = document.createElement('li');
        li.innerHTML = text ; 
        list.appendChild(li) ;
        let span = document.createElement('span') ;
        span.innerHTML = '\u00d7' ;
        li.appendChild(span) ;
    }
    saveData() ;
    inputbox.value = "" ;
}

function func(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked') ;
        saveData() ;
    }   
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove() ;
        saveData() ;
    }
}

function loadData(){
    list.innerHTML = localStorage.getItem('data');
}
function saveData(){
    localStorage.setItem('data' , list.innerHTML) ;
}
loadData() ;