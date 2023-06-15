var ctx;
var pts=[
           [100,35],
           [60,10],
           [20,35],
           [35,100],
           [85,100]
        ];

var colors=[
            "#ADD8E6",
            "#F08080",
            "#20B2AA",
            "#FF00FF",
            "#7B68EE",
            "#DC143C",
            "#00BFFF",
            "#90EE90"

           ];
var c=0;

function init(){

  ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,300,200);
  ctx.fillStyle=colors[Math.floor(Math.random()*colors.length)];
  
   c = (c<10)?c:0;
   ctx.beginPath();
   ctx.moveTo(pts[0][0],pts[0][1]);
   ctx.lineTo(pts[3][0],pts[3][1]);
   ctx.lineTo(pts[1][0],pts[1][1]);
   ctx.lineTo(pts[4][0],pts[4][1]);
   ctx.lineTo(pts[2][0],pts[2][1]);
   ctx.lineTo(pts[0][0],pts[0][1]);
   ctx.stroke();
   ctx.fill();

  
}











