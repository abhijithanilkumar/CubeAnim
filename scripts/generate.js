function generator()
{
  var led = [];
  var i = 0;
  var j;
  var k;

  while(i < n)
  {
    j = 0;
    led[i] = [];
    while(j < n)
    {
      k = circle0[i][j].getFill();
      if(k.getColor() == 'rgb(0,255,0)')
        led[i][j] = 1;
      else
        led[i][j] = 0;
      j = j+1;
    }
    i = i+1;
  }
}
      
