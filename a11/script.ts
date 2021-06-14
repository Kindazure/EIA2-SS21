namespace eia10_2 {
     /* 
    Aufgabe: L10.2_Blumenwiese: Polymorphie
    Name: Larissa Gaede
    Datum: 14.06.2021
    Quellen: Eva Breuninger, Maximilian Buckel
    Ehrenmann: Sören Winterhalder
    */

    let timeScale: number = 0.005;
    let scene: Scene = new Scene(timeScale);

    setInterval(updateAll, 30);
    
    function updateAll(): void {
        scene.update();
    }
}