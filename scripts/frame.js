myPanel = new jsgl.Panel(document.getElementById("panel"));

var hline = [];
var i = 0;
var n = 10;

/*creating the cubleplane*/
/*draw horizontal lines*/
while(i <= n)
{
  hline[i] = myPanel.createLine();
  hline[i].setStartPointXY(5,30*i+5);
  hline[i].setEndPointXY(305,30*i+5);
  myPanel.addElement(hline[i]);

  with(hline[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

var vline = [];
i = 0;

/*draw vertical lines*/
while(i <= n)
{
  vline[i] = myPanel.createLine();
  vline[i].setStartPointXY(30*i+5,8);
  vline[i].setEndPointXY(30*i+5,305);
  myPanel.addElement(vline[i]);

  with(vline[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

i = 0;
var circle = [];
var k;

/*draw circles - leds*/
while(i < n)
{
  j = 0;
  while(j < n)
  {
    k = i*10+j;
    circle[k] = myPanel.createCircle();
    circle[k].setCenterLocationXY(20+30*i,20+30*j);
    circle[k].setRadius(8);
    myPanel.addElement(circle[k]);
    with(circle[k].getFill())
      setColor('rgb(0,0,255)');
    j = j+1;
  }
  i = i+1;
}

