AOS.init();


function cal(){

  var first = document.getElementById('p1');
  var second = document.getElementById('p2');
  var status = document.getElementById('status');

  var f = Math.floor(Math.random() * 6) + 1;
  var s = Math.floor(Math.random() * 6) + 1;

  var total = f+s;

  first.innerHTML = f;
  second.innerHTML = s;
  status.innerHTML = "You Rolled = "+total+"."



}
