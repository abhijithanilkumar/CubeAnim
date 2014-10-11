var led = [];
var f;
var fobj = {};
var myobj;

function getframe()
{
  f = document.getElementById("frame").value;  
}

function generator()
{
  var i = 0;
  var j;
  var k;
  var x;

  while(i < n)
  {
    j = 0;
    led[i] = [];
    while(j < n)
    {
      k = 0;
      led[i][j] = [];
      while(k < n)
      {
        x = circle[i][j][k].getFill();
        if(x.getColor() == 'rgb(0,255,0)')
          led[i][j][k] = 1;
        else
          led[i][j][k] = 0;
        k = k+1;
      }
      j = j+1;
    }
    i = i+1;
  }
  getframe();
  fobj[f] = led;
  console.log(fobj);
  myobj = JSON.stringify(fobj);
  alert(myobj);  
  //var t = "hello"
  document.getElementById("dict").innerHTML = myobj;
}      


