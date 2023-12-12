var btn=document.getElementById('btn');
var outPut=document.getElementById('outPut');
var arr=[
    '"“A room without books is like a body without a soul.”" ― Marcus Tullius Cicero',
   ' "“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”― Albert Einstein',
   
   "'“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ― Dr. Seuss",
   "“Live as if you were to die tomorrow. Learn as if you were to live forever.”― Mahatma Gandhi",
   '“Be who you are and say what you feel, because those who mind don" -Bernard M. Baruch',
  
   
];
function addQuote(){
    var randomQuote=arr[Math.floor(Math.random()*arr.length)]
    outPut.innerHTML=randomQuote;

}
