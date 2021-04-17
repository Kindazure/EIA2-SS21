namespace Events {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        document.addEventListener("mousemove", setInfoBox);

        document.body.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        
    }

    function setInfoBox(_event: MouseEvent): void {
        let mouseCursorSpan: HTMLSpanElement = <HTMLElement>document.querySelector("span");

        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let coordinates: string = " x coordinate: " + x + " y coordinate: " + y;
        
        mouseCursorSpan.style.left = x + "px";
        mouseCursorSpan.style.top = y + "px";
        mouseCursorSpan.innerHTML = coordinates;
    }

}
function logInfo(_event: Event): void {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);
}