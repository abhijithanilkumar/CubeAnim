myPanel = new jsgl.Panel(document.getElementById("panel"));

var hline = [];
var i = 0;

while(i <= 10)
{
  hline[i] = myPanel.createLine();
  hline[i].setStartPointXY(0,50*i+10);
  hline[i].setEndPointXY(505,50*i+10);
  myPanel.addElement(hline[i]);

  with(hline[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(10);
  }

  i = i+1;
}

var vline = [];
i = 0;

while(i <= 10)
{
  vline[i] = myPanel.createLine();
  vline[i].setStartPointXY(50*i+5,10);
  vline[i].setEndPointXY(50*i+5,505);
  myPanel.addElement(vline[i]);

  with(vline[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(10);
  }

  i = i+1;
}

i = 0;
var circle = [];
var k;

while(i < 10)
{
  j = 0;
  while(j < 10)
  {
    k = i*10+j;
    circle[k] = myPanel.createCircle();
    circle[k].setCenterLocationXY(30+50*i,35+50*j);
    circle[k].setRadius(10);
    myPanel.addElement(circle[k]);
    j = j+1;
  }
  i = i+1;
}

//var highlight = [];
var highlight = function() 
{
    with(circle[0].getFill())
    {
      setColor('rgb(0,255,0)');
      setOpacity(1);
    }
}

i = 0;
//while(i < 100)
//{
  circle[i].addClickListener(highlight);
 // i = i+1;
//}
//circle[1].addClickListener(highlight[1]);
/*i = 0;
var highlight = [];
while(i < 10)
{
  j = 0;
  while(j < 10)
  {
    k = i*10+j;
    highlight[k] = function() {
      with(circle[k].getFill())
      {
        setColor('rgb(0,255,0)');
        setOpacity(1);
      }
    }
    circle[k].addClickListener(highlight[k]);
    j = j+1;
  }
  i = i+1;
}
*/



