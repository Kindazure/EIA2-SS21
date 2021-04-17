"use strict";
var Events;
(function (Events) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.body.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
    }
    function setInfoBox(_event) {
        let mouseCursorSpan = document.querySelector("span");
        let x = _event.clientX;
        let y = _event.clientY;
        let coordinates = " x coordinate: " + x + " y coordinate: " + y;
        mouseCursorSpan.style.left = x + "px";
        mouseCursorSpan.style.top = y + "px";
        mouseCursorSpan.innerHTML = coordinates;
    }
})(Events || (Events = {}));
function logInfo(_event) {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);
}
//# sourceMappingURL=script.js.map