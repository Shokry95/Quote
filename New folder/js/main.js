

var quate = document.getElementById('quate');
var output = document.getElementById('output');
var auther = document.getElementById('auther');

var quotes =[
    '“Be yourself; everyone else is already taken.”',
    '“A room without books is like a body without a soul.”',
    '“So many books, so little time.”',
    '“A room without books is like a body without a soul.”',
    '“You only live once, but if you do it right, once is enough.”'



];

var authers = [
    '― Oscar Wilde',
    '― Marcus Tullius Cicero',
    '― Frank Zappa',
    '― Marcus Tullius Cicer',
    '― Mae West',

];

quate.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length )];
    output.innerHTML = randomQuote;
})


quate.addEventListener('click', function(){
    var randomAuther = authers[Math.floor(Math.random()* authers.length )]
    auther.innerHTML = randomAuther;
})

