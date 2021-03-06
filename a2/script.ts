namespace Boxes {

    window.addEventListener("load", box);

    function box(): void {
        let n: number = 5;
        let color: string;
        let x: number = 0;
        let y: number = 0;
    
        for (let i: number = 0; i < n; i++) {
            y += (i == 2) ? 20 : 50;
            x = (x + 170) % 400;
            switch (i) {
                case 0:
                    color = "#fcba03";
                    break;
                case 1:
                case 4:
                    color = "#0398fc";
                    break;
                case 3:
                    continue;
                default:
                    color = "#b66bcf";
            }
            
            for (let size of ["big", "medium", "small"]) {
                createBox(color, x, y, size);
                if (i == 4)
                    break;
            }
        }
    }

    function createBox(_color: string, _x: number, _y: number, _size: string): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        div.classList.add(_size);
        div.style.backgroundColor = _color;
        div.style.left = _x + "px";
        div.style.top = _y + "px";
    }
}