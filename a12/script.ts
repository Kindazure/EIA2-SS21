namespace eia11_1 {

 /* 
    Aufgabe: L11.1_Blumenwiese: Advanced
    Name: Larissa Gaede
    Datum: 14.06.2021
    Quellen: Eva Breuninger
    Ehrenmann: Felix Pönitzsch
    */

    let timeScale: number = 0.005;
    let scene: Scene = new Scene(timeScale);

    setInterval(updateAll, 30);
    
    function updateAll(): void {
        scene.update();
    }
}