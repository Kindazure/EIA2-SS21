    window.addEventListener("load", handleLoad);
    function handleLoad(): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        let colors: string[] = ["#5b6d5b", "#ca8a8b", "#e2bcb7", "f6e6e4"];
        for (let index: number = 0; index < 150; index++) {

            let pickColor: number = Math.floor(Math.random() * Math.floor(4));

            let x: number = Math.floor(Math.random() * Math.floor(canvas.width));
            let y: number = Math.floor(Math.random() * Math.floor(canvas.height));
           
            crc2.beginPath();
            crc2.arc(x, y, 125, 0, 2 * Math.PI, false);
            crc2.fillStyle = colors[pickColor];
            
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = colors[pickColor];
            crc2.moveTo(x, y);
            crc2.closePath();
            crc2.stroke();
            }}

