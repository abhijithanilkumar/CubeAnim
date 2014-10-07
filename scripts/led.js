var j;
var highlight = [];
var x;

/*click listener function*/
var h = function(eventArgs) 
{
  j = eventArgs.getSourceElement();
  x = j.getFill();
  if(x.getColor() == 'rgb(0,255,0)')
  {
    with(j.getFill())
    {
      setColor('rgb(0,0,255)');
      setOpacity(1);
    }
  }
  else
  {
    with(j.getFill())
    {
      setColor('rgb(0,255,0)');
      setOpacity(1);
    }
  }
}

i = 0;

/*assign click listeners to each circle (led)*/
while(i < 100)
{
  circle[i].addClickListener(h);
  i = i+1;
}
