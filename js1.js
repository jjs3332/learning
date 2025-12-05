var color_p1=document.getElementById('color_p1');
var msg,i,j;
for(i=1;i<10;i++){
  for(j=1;j<=i;j++){
    msg += j + '*' + i + '=' +j*i +' ';}
  msg += '<br />'
}
color_p1.innerHTML = msg;

var firstbook = document.getElementById('one');
var secondebook = document.getElementById('two');
var thirthbook = document.getElementById('three');
firstbook.className = 'yellow';
var a_1,a_2,a_3;
thirthbook.textContent = 'js & jquery' ;
var books =[
  firstbook,
  secondebook,
  thirthbook]
for(i=0;i<3;i++){
  books[i].className ='red' ;}

