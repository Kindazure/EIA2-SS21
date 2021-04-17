  
namespace Events {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
    
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);

        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);

        document.addEventListener("click", setInfoBox);
        document.body.addEventListener("keyup", logInfo);
    }