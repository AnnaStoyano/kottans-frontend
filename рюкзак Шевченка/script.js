const btnStart = document.querySelector('#btn-start');
const resultDiv = document.querySelector('.result').children;

const bags = ['сумка',"рюкзак","шоппер","авоська","мешок","пакет"];
const authors = ['Айвазовского','Репина','Мазаччо','Пикассо','Мане','Ван Гога','Дали','Рембрандта'];

btnStart.addEventListener('click',function(e){
    let bagName = bags[getRandom(bags.length)];
    let authorName = authors[getRandom(authors.length)];
    let result = bagName + ' ' + authorName;
    let src = 'img/'+getPortret(authorName);
    resultDiv[0].innerHTML = result;
    resultDiv[1].src = src;
    
})

const getRandom = function(max){
    return Math.floor(Math.random() * Math.floor(max));
}

const getPortret = function(name){
    let src;
    switch(name){
        case 'Айвазовского':
        src = 'aivazovsky.jpg';    
        break;
        case 'Репина':
        src = 'repin.jpg';    
        break;
        case 'Мазаччо':
        src = 'mozacho.jpg';    
        break;
        case 'Пикассо':
        src = 'picasso.jpg';    
        break;
        case 'Мане':
        src = 'mane.jpg';    
        break;
        case 'Ван Гога':
        src = 'vanGog.jpg';    
        break;
        case 'Дали':
        src = 'dali.jpg';    
        break;
        case 'Рембрандта':
        src = 'remb.jpg';    
        break;
    }
    return src;
}