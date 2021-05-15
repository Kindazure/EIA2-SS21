let canvas: HTMLCanvasElement = document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

//sky
crc2.beginPath();
crc2.rect(0, 0, canvas.width, canvas.height);
crc2.fillStyle = "#87ceeb";
crc2.fill();

//mountains
crc2.beginPath();
crc2.moveTo(0, 450);
crc2.lineTo(200, 150);
crc2.lineTo(400, 450);
crc2.fillStyle = "#a0a0a0";
crc2.fill();

crc2.beginPath();
crc2.moveTo(300, 450);
crc2.lineTo(450, 250);
crc2.lineTo(600, 450);
crc2.fillStyle = "#808080";
crc2.fill();

crc2.beginPath();
crc2.moveTo(900, 450);
crc2.lineTo(1300, 100);
crc2.lineTo(1500, 450);
crc2.fillStyle = "#a0a0a0";
crc2.fill();

crc2.beginPath();
crc2.moveTo(800, 450);
crc2.lineTo(1000, 250);
crc2.lineTo(1200, 450);
crc2.fillStyle = "#808080";
crc2.fill();

//clouds
crc2.beginPath();
crc2.ellipse(650, 150, 120, 80, 0, 0, Math.PI * 2);
crc2.fillStyle = "#ffffff";
crc2.fill();

crc2.beginPath();
crc2.ellipse(850, 100, 150, 80, 0, 0, Math.PI * 2);
crc2.fillStyle = "#ffffff";
crc2.fill();

crc2.beginPath();
crc2.ellipse(1250, 150, 100, 60, 0, 0, Math.PI * 2);
crc2.fillStyle = "#ffffff";
crc2.fill();

crc2.beginPath();
crc2.ellipse(1450, 200, 150, 80, 0, 0, Math.PI * 2);
crc2.fillStyle = "#ffffff";
crc2.fill();

crc2.beginPath();
crc2.ellipse(300, 150, 100, 60, 0, 0, Math.PI * 2);
crc2.fillStyle = "#ffffff";
crc2.fill();

crc2.beginPath();
crc2.ellipse(150, 200, 150, 80, 0, 0, Math.PI * 2);
crc2.fillStyle = "#ffffff";
crc2.fill();


//grass
crc2.beginPath();
crc2.rect(0, 450, canvas.width, 450);
crc2.fillStyle = "#63b521";
crc2.fill();

//flöwers
let flowerColor: string[] = ["#ea899a", "#88a7eb", "#83cbf0", "#a0d3b9", "#c994ff"];
flower(100, 700, flowerColor[0]);
flower(200, 790, flowerColor[1]);
flower(300, 500, flowerColor[2]);
flower(400, 650, flowerColor[3]);
flower(500, 700, flowerColor[4]);

flower(1000, 550, flowerColor[0]);
flower(1100, 600, flowerColor[1]);
flower(1200, 700, flowerColor[2]);
flower(1300, 650, flowerColor[3]);
flower(1400, 750, flowerColor[4]);


function flower(x: number, y: number, color: string): void {
  //stängel
  crc2.beginPath();
  crc2.rect(x, y, 6, -80);
  crc2.fillStyle = "#006600";
  crc2.fill();

  //pedale
  crc2.beginPath();
  crc2.arc(x + 3, y - 95, 10, 0, Math.PI * 2);
  crc2.arc(x + 16, y - 85, 10, 0, Math.PI * 2);
  crc2.arc(x - 10, y - 85, 10, 0, Math.PI * 2);
  crc2.fillStyle = color;
  crc2.fill();

  crc2.beginPath();
  crc2.arc(x - 6, y - 70, 10, 0, Math.PI * 2);
  crc2.arc(x + 12, y - 70, 10, 0, Math.PI * 2);

  crc2.fillStyle = color;
  crc2.fill();


  //yello
  crc2.beginPath();
  crc2.arc(x + 3, y - 80, 10, 0, Math.PI * 2);
  crc2.fillStyle = "#ffe445";
  crc2.fill();
}



