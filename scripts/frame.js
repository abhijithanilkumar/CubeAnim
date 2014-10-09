myPanel1 = new jsgl.Panel(document.getElementById("panel1"));

var hline1 = [];
var i = 0;
var n = 10;

/*creating the cubleplane*/
/*draw horizontal lines*/
while(i <= n)
{
  hline1[i] = myPanel1.createLine();
  hline1[i].setStartPointXY(5,30*i+5);
  hline1[i].setEndPointXY(30*n+5,30*i+5);
  myPanel1.addElement(hline1[i]);

  with(hline1[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

var vline1 = [];
i = 0;

/*draw vertical lines*/
while(i <= n)
{
  vline1[i] = myPanel1.createLine();
  vline1[i].setStartPointXY(30*i+5,8);
  vline1[i].setEndPointXY(30*i+5,30*n+5);
  myPanel1.addElement(vline1[i]);

  with(vline1[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

i = 0;
var circle = [];
circle[0] = [];
var j;

/*draw circles - leds*/
while(i < n)
{
  j = 0;
  circle[0][i] = [];
  while(j < n)
  {
    circle[0][i][j] = myPanel1.createCircle();
    circle[0][i][j].setCenterLocationXY(20+30*j,20+30*i);
    circle[0][i][j].setRadius(8);
    myPanel1.addElement(circle[0][i][j]);
    with(circle[0][i][j].getFill())
      setColor('rgb(0,0,255)');
    j = j+1;
  }
  i = i+1;
}

var myPanel2 = new jsgl.Panel(document.getElementById("panel2"));

var hline2 = [];
i = 0;

/*creating the cubleplane*/
/*draw horizontal lines*/
while(i <= n)
{
  hline2[i] = myPanel2.createLine();
  hline2[i].setStartPointXY(5,30*i+5);
  hline2[i].setEndPointXY(30*n+5,30*i+5);
  myPanel2.addElement(hline2[i]);

  with(hline2[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

var vline2 = [];
i = 0;

/*draw vertical lines*/
while(i <= n)
{
  vline2[i] = myPanel2.createLine();
  vline2[i].setStartPointXY(30*i+5,8);
  vline2[i].setEndPointXY(30*i+5,30*n+5);
  myPanel2.addElement(vline2[i]);

  with(vline2[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

i = 0;
circle[1] = [];

/*draw circles - leds*/
while(i < n)
{
  j = 0;
  circle[1][i] = [];
  while(j < n)
  {
    circle[1][i][j] = myPanel2.createCircle();
    circle[1][i][j].setCenterLocationXY(20+30*j,20+30*i);
    circle[1][i][j].setRadius(8);
    myPanel2.addElement(circle[1][i][j]);
    with(circle[1][i][j].getFill())
      setColor('rgb(0,0,255)');
    j = j+1;
  }
  i = i+1;
}

var myPanel3 = new jsgl.Panel(document.getElementById("panel3"));

var hline3 = [];
i = 0;

/*creating the cubleplane*/
/*draw horizontal lines*/
while(i <= n)
{
  hline3[i] = myPanel3.createLine();
  hline3[i].setStartPointXY(5,30*i+5);
  hline3[i].setEndPointXY(30*n+5,30*i+5);
  myPanel3.addElement(hline3[i]);

  with(hline3[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

var vline3 = [];
i = 0;

/*draw vertical lines*/
while(i <= n)
{
  vline3[i] = myPanel3.createLine();
  vline3[i].setStartPointXY(30*i+5,8);
  vline3[i].setEndPointXY(30*i+5,30*n+5);
  myPanel3.addElement(vline3[i]);

  with(vline3[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

i = 0;
circle[2] = [];

/*draw circles - leds*/
while(i < n)
{
  j = 0;
  circle[2][i] = [];
  while(j < n)
  {
    circle[2][i][j] = myPanel3.createCircle();
    circle[2][i][j].setCenterLocationXY(20+30*j,20+30*i);
    circle[2][i][j].setRadius(8);
    myPanel3.addElement(circle[2][i][j]);
    with(circle[2][i][j].getFill())
      setColor('rgb(0,0,255)');
    j = j+1;
  }
  i = i+1;
}

var myPanel4 = new jsgl.Panel(document.getElementById("panel4"));

var hline4 = [];
i = 0;

/*creating the cubleplane*/
/*draw horizontal lines*/
while(i <= n)
{
  hline4[i] = myPanel4.createLine();
  hline4[i].setStartPointXY(5,30*i+5);
  hline4[i].setEndPointXY(30*n+5,30*i+5);
  myPanel4.addElement(hline4[i]);

  with(hline4[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

var vline4 = [];
i = 0;

/*draw vertical lines*/
while(i <= n)
{
  vline4[i] = myPanel4.createLine();
  vline4[i].setStartPointXY(30*i+5,8);
  vline4[i].setEndPointXY(30*i+5,30*n+5);
  myPanel4.addElement(vline4[i]);

  with(vline4[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

i = 0;
circle[3] = [];

/*draw circles - leds*/
while(i < n)
{
  j = 0;
  circle[3][i] = [];
  while(j < n)
  {
    circle[3][i][j] = myPanel4.createCircle();
    circle[3][i][j].setCenterLocationXY(20+30*j,20+30*i);
    circle[3][i][j].setRadius(8);
    myPanel4.addElement(circle[3][i][j]);
    with(circle[3][i][j].getFill())
      setColor('rgb(0,0,255)');
    j = j+1;
  }
  i = i+1;
}

var myPanel5 = new jsgl.Panel(document.getElementById("panel5"));

var hline5 = [];
i = 0;

/*creating the cubleplane*/
/*draw horizontal lines*/
while(i <= n)
{
  hline5[i] = myPanel5.createLine();
  hline5[i].setStartPointXY(5,30*i+5);
  hline5[i].setEndPointXY(30*n+5,30*i+5);
  myPanel5.addElement(hline5[i]);

  with(hline5[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

var vline5 = [];
i = 0;

/*draw vertical lines*/
while(i <= n)
{
  vline5[i] = myPanel5.createLine();
  vline5[i].setStartPointXY(30*i+5,8);
  vline5[i].setEndPointXY(30*i+5,30*n+5);
  myPanel5.addElement(vline5[i]);

  with(vline5[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

i = 0;
circle[4] = [];

/*draw circles - leds*/
while(i < n)
{
  j = 0;
  circle[4][i] = [];
  while(j < n)
  {
    circle[4][i][j] = myPanel5.createCircle();
    circle[4][i][j].setCenterLocationXY(20+30*j,20+30*i);
    circle[4][i][j].setRadius(8);
    myPanel5.addElement(circle[4][i][j]);
    with(circle[4][i][j].getFill())
      setColor('rgb(0,0,255)');
    j = j+1;
  }
  i = i+1;
}

var myPanel6 = new jsgl.Panel(document.getElementById("panel6"));

var hline6 = [];
i = 0;

/*creating the cubleplane*/
/*draw horizontal lines*/
while(i <= n)
{
  hline6[i] = myPanel6.createLine();
  hline6[i].setStartPointXY(5,30*i+5);
  hline6[i].setEndPointXY(30*n+5,30*i+5);
  myPanel6.addElement(hline6[i]);

  with(hline6[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

var vline6 = [];
i = 0;

/*draw vertical lines*/
while(i <= n)
{
  vline6[i] = myPanel6.createLine();
  vline6[i].setStartPointXY(30*i+5,8);
  vline6[i].setEndPointXY(30*i+5,30*n+5);
  myPanel6.addElement(vline6[i]);

  with(vline6[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

i = 0;
circle[5] = [];

/*draw circles - leds*/
while(i < n)
{
  j = 0;
  circle[5][i] = [];
  while(j < n)
  {
    circle[5][i][j] = myPanel6.createCircle();
    circle[5][i][j].setCenterLocationXY(20+30*j,20+30*i);
    circle[5][i][j].setRadius(8);
    myPanel6.addElement(circle[5][i][j]);
    with(circle[5][i][j].getFill())
      setColor('rgb(0,0,255)');
    j = j+1;
  }
  i = i+1;
}

var myPanel7 = new jsgl.Panel(document.getElementById("panel7"));

var hline7 = [];
i = 0;

/*creating the cubleplane*/
/*draw horizontal lines*/
while(i <= n)
{
  hline7[i] = myPanel7.createLine();
  hline7[i].setStartPointXY(5,30*i+5);
  hline7[i].setEndPointXY(30*n+5,30*i+5);
  myPanel7.addElement(hline7[i]);

  with(hline7[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

var vline7 = [];
i = 0;

/*draw vertical lines*/
while(i <= n)
{
  vline7[i] = myPanel7.createLine();
  vline7[i].setStartPointXY(30*i+5,8);
  vline7[i].setEndPointXY(30*i+5,30*n+5);
  myPanel7.addElement(vline7[i]);

  with(vline7[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

i = 0;
circle[6] = [];

/*draw circles - leds*/
while(i < n)
{
  j = 0;
  circle[6][i] = [];
  while(j < n)
  {
    circle[6][i][j] = myPanel7.createCircle();
    circle[6][i][j].setCenterLocationXY(20+30*j,20+30*i);
    circle[6][i][j].setRadius(8);
    myPanel7.addElement(circle[6][i][j]);
    with(circle[6][i][j].getFill())
      setColor('rgb(0,0,255)');
    j = j+1;
  }
  i = i+1;
}

var myPanel8 = new jsgl.Panel(document.getElementById("panel8"));

var hline8 = [];
i = 0;

/*creating the cubleplane*/
/*draw horizontal lines*/
while(i <= n)
{
  hline8[i] = myPanel8.createLine();
  hline8[i].setStartPointXY(5,30*i+5);
  hline8[i].setEndPointXY(30*n+5,30*i+5);
  myPanel8.addElement(hline8[i]);

  with(hline8[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

var vline8 = [];
i = 0;
/*draw vertical lines*/
while(i <= n)
{
  vline8[i] = myPanel8.createLine();
  vline8[i].setStartPointXY(30*i+5,8);
  vline8[i].setEndPointXY(30*i+5,30*n+5);
  myPanel8.addElement(vline8[i]);

  with(vline8[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

i = 0;
circle[7] = [];

/*draw circles - leds*/
while(i < n)
{
  j = 0;
  circle[7][i] = [];
  while(j < n)
  {
    circle[7][i][j] = myPanel8.createCircle();
    circle[7][i][j].setCenterLocationXY(20+30*j,20+30*i);
    circle[7][i][j].setRadius(8);
    myPanel8.addElement(circle[7][i][j]);
    with(circle[7][i][j].getFill())
      setColor('rgb(0,0,255)');
    j = j+1;
  }
  i = i+1;
}

var myPanel9 = new jsgl.Panel(document.getElementById("panel9"));

var hline9 = [];
i = 0;

/*creating the cubleplane*/
/*draw horizontal lines*/
while(i <= n)
{
  hline9[i] = myPanel9.createLine();
  hline9[i].setStartPointXY(5,30*i+5);
  hline9[i].setEndPointXY(30*n+5,30*i+5);
  myPanel9.addElement(hline9[i]);

  with(hline9[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

var vline9 = [];
i = 0;
/*draw vertical lines*/
while(i <= n)
{
  vline9[i] = myPanel9.createLine();
  vline9[i].setStartPointXY(30*i+5,8);
  vline9[i].setEndPointXY(30*i+5,30*n+5);
  myPanel9.addElement(vline9[i]);

  with(vline9[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

i = 0;
circle[8] = [];

/*draw circles - leds*/
while(i < n)
{
  j = 0;
  circle[8][i] = [];
  while(j < n)
  {
    circle[8][i][j] = myPanel9.createCircle();
    circle[8][i][j].setCenterLocationXY(20+30*j,20+30*i);
    circle[8][i][j].setRadius(8);
    myPanel9.addElement(circle[8][i][j]);
    with(circle[8][i][j].getFill())
      setColor('rgb(0,0,255)');
    j = j+1;
  }
  i = i+1;
}

var myPanel10 = new jsgl.Panel(document.getElementById("panel10"));

var hline10 = [];
i = 0;

/*creating the cubleplane*/
/*draw horizontal lines*/
while(i <= n)
{
  hline10[i] = myPanel10.createLine();
  hline10[i].setStartPointXY(5,30*i+5);
  hline10[i].setEndPointXY(30*n+5,30*i+5);
  myPanel10.addElement(hline10[i]);

  with(hline10[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

var vline10 = [];
i = 0;
/*draw vertical lines*/
while(i <= n)
{
  vline10[i] = myPanel10.createLine();
  vline10[i].setStartPointXY(30*i+5,8);
  vline10[i].setEndPointXY(30*i+5,30*n+5);
  myPanel10.addElement(vline10[i]);

  with(vline10[i].getStroke())
  {
    setColor('rgb(255,0,0)');
    setWeight(8);
  }

  i = i+1;
}

i = 0;
circle[9] = [];

/*draw circles - leds*/
while(i < n)
{
  j = 0;
  circle[9][i] = [];
  while(j < n)
  {
    circle[9][i][j] = myPanel10.createCircle();
    circle[9][i][j].setCenterLocationXY(20+30*j,20+30*i);
    circle[9][i][j].setRadius(8);
    myPanel10.addElement(circle[9][i][j]);
    with(circle[9][i][j].getFill())
      setColor('rgb(0,0,255)');
    j = j+1;
  }
  i = i+1;
}

