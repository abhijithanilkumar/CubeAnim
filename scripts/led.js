var m;
var k;
var x;

/*click listener function*/
var h = function(eventArgs) 
{
  k = eventArgs.getSourceElement();
  x = k.getFill();
  if(x.getColor() == 'rgb(0,255,0)')
  {
    with(k.getFill())
    {
      setColor('rgb(0,0,255)');
      setOpacity(1);
    }
  }
  else
  {
    with(k.getFill())
    {
      setColor('rgb(0,255,0)');
      setOpacity(1);
    }
  }
}

m = 0;
i = 0;
j = 0;
/*assign click listeners to each circle (led)*/
while(m < n)
{
  i = 0;
  while(i < n)
  {
    j = 0;
    while(j < n)
    {
      circle[m][i][j].addClickListener(h);
      j = j+1;
    }
    i = i+1;
  }
  m = m+1;
}

