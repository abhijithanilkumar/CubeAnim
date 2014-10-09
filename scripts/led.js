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

i = 0;
j = 0;
/*assign click listeners to each circle (led)*/
while(i < n)
{
  j = 0;
  while(j < n)
  {
    circle0[i][j].addClickListener(h);
    j = j+1;
  }
  i = i+1;
}

i = 0;
j = 0;
/*assign click listeners to each circle (led)*/
while(i < n)
{
  j = 0;
  while(j < n)
  {
    circle1[i][j].addClickListener(h);
    j = j+1;
  }
  i = i+1;
}

i = 0;
j = 0;
/*assign click listeners to each circle (led)*/
while(i < n)
{
  j = 0;
  while(j < n)
  {
    circle2[i][j].addClickListener(h);
    j = j+1;
  }
  i = i+1;
}

i = 0;
j = 0;
/*assign click listeners to each circle (led)*/
while(i < n)
{
  j = 0;
  while(j < n)
  {
    circle3[i][j].addClickListener(h);
    j = j+1;
  }
  i = i+1;
}

i = 0;
j = 0;
/*assign click listeners to each circle (led)*/
while(i < n)
{
  j = 0;
  while(j < n)
  {
    circle4[i][j].addClickListener(h);
    j = j+1;
  }
  i = i+1;
}


i = 0;
j = 0;
/*assign click listeners to each circle (led)*/
while(i < n)
{
  j = 0;
  while(j < n)
  {
    circle5[i][j].addClickListener(h);
    j = j+1;
  }
  i = i+1;
}

i = 0;
j = 0;
/*assign click listeners to each circle (led)*/
while(i < n)
{
  j = 0;
  while(j < n)
  {
    circle6[i][j].addClickListener(h);
    j = j+1;
  }
  i = i+1;
}

i = 0;
j = 0;
/*assign click listeners to each circle (led)*/
while(i < n)
{
  j = 0;
  while(j < n)
  {
    circle7[i][j].addClickListener(h);
    j = j+1;
  }
  i = i+1;
}

i = 0;
j = 0;
/*assign click listeners to each circle (led)*/
while(i < n)
{
  j = 0;
  while(j < n)
  {
    circle8[i][j].addClickListener(h);
    j = j+1;
  }
  i = i+1;
}

i = 0;
j = 0;
/*assign click listeners to each circle (led)*/
while(i < n)
{
  j = 0;
  while(j < n)
  {
    circle9[i][j].addClickListener(h);
    j = j+1;
  }
  i = i+1;
}


