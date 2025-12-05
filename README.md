# learning

[js1.js](https://github.com/user-attachments/files/23952691/js1.js)
var color_p1=document.getElementById('color_p1');
var msg,i,j;
for(i=1;i<10;i++){
  for(j=1;j<=i;j++){
    msg += j + '*' + i + '=' +j*i +' ';}
  msg += '<br />'
}
color_p1.innerHTML = msg;
