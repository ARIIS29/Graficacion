    
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(30, 30);
    context.lineTo(150, 30);
    context.stroke();


    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(200,60,50,0,2*Math.PI);
    context.stroke();

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.strokeRect(300,20,100,100);
    context.stroke();
    

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.strokeRect(450,30,150,80,150);
    context.stroke();
    
     var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(180, 200);
    context.lineTo(480, 250);
    context.lineTo(180, 480);
    context.lineTo(180, 200);
    context.stroke();
    